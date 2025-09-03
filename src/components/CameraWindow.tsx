import React, { useRef, useEffect, useState } from 'react';
import { Camera, Upload, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

interface CameraWindowProps {
  onPhotoCapture: (imageData: string) => void;
}

export const CameraWindow: React.FC<CameraWindowProps> = ({ onPhotoCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCamera, setHasCamera] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [isCameraFrozen, setIsCameraFrozen] = useState(false);

  useEffect(() => {
    initializeCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
        toast.error('Failed to start video preview');
      });
    }
  }, [stream]);

  const initializeCamera = async () => {
    try {
      setIsLoading(true);
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 512, height: 512, facingMode: 'user' } 
      });
      setStream(mediaStream);
      setHasCamera(true);
      setStream(mediaStream);
      toast.success("Camera ready!");
    } catch (error) {
      console.error('Error accessing camera:', error);
      setHasCamera(false);
      toast.error("Camera access denied. You can still upload photos!");
    } finally {
      setIsLoading(false);
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');
    
    if (!context) return;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);
    
    const imageData = canvas.toDataURL('image/png');
    setCapturedPhoto(imageData);
    setIsCameraFrozen(true);
    onPhotoCapture(imageData);
    toast.success("Photo captured!");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageData = e.target?.result as string;
      setCapturedPhoto(imageData);
      setIsCameraFrozen(true);
      onPhotoCapture(imageData);
      toast.success("Photo uploaded!");
    };
    reader.readAsDataURL(file);
  };

  const resetCamera = () => {
    setCapturedPhoto(null);
    setIsCameraFrozen(false);
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    initializeCamera();
  };

  return (
    <div className="space-y-4">
      <h2 className="brutal-heading text-2xl">📸 CAPTURE</h2>
      
      <div className="camera-window relative w-[512px] h-[512px] bg-muted mx-auto">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-card">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
              <p className="font-bold mt-2">Loading camera...</p>
            </div>
          </div>
        )}
        
        {capturedPhoto ? (
          <img
            src={capturedPhoto}
            alt="Captured"
            className="w-full h-full object-cover"
          />
        ) : hasCamera && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
            style={{ filter: 'none' }}
          />
        )}
        
        {!hasCamera && !isLoading && !capturedPhoto && (
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <div className="text-center">
              <Camera size={48} className="mx-auto mb-4 opacity-50" />
              <p className="font-bold">No camera access</p>
              <p className="text-sm mt-1">Upload a photo instead!</p>
            </div>
          </div>
        )}
        
        <canvas ref={canvasRef} className="hidden" />
      </div>

      <div className="flex gap-3 flex-wrap">
        {hasCamera && !isCameraFrozen && (
          <button
            onClick={capturePhoto}
            className="brutal-button flex items-center gap-2 flex-1 min-w-0"
          >
            <Camera size={20} />
            SNAP!
          </button>
        )}
        
        <button
          onClick={() => fileInputRef.current?.click()}
          className="brutal-button-secondary flex items-center gap-2 flex-1 min-w-0"
        >
          <Upload size={20} />
          UPLOAD
        </button>
        
        {(hasCamera || capturedPhoto) && (
          <button
            onClick={resetCamera}
            className="brutal-button-accent p-3"
            title={capturedPhoto ? "Reset Photo" : "Reset Camera"}
          >
            <RotateCcw size={20} />
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
};
