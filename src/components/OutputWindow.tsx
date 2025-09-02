import React, { useRef } from 'react';
import { Download, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { FilterType } from './FilterSelector';

import { StyleType } from './StyleSelector';

interface OutputWindowProps {
  imageData: string | null;
  onReset: () => void;
  style: StyleType;
}

export const OutputWindow: React.FC<OutputWindowProps> = ({
  imageData,
  onReset,
  style
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadImage = () => {
    if (!imageData) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw image without filter
      context.drawImage(img, 0, 0);
      
      // Download the processed image
      canvas.toBlob((blob) => {
        if (!blob) return;
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `photobooth-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        toast.success("Photo downloaded!");
      }, 'image/png');
    };
    img.src = imageData;
  };


  return (
    <div className="space-y-4">
      <h2 className="brutal-heading text-2xl">✨ OUTPUT</h2>
      
      <div className="output-window relative w-[512px] h-[512px] bg-muted mx-auto">
        {imageData ? (
          <img
            src={imageData}
            alt="Output"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📷</div>
              <p className="font-bold">Your masterpiece</p>
              <p className="text-sm opacity-75 mt-1">will appear here!</p>
            </div>
          </div>
        )}
      </div>
      
      <canvas ref={canvasRef} className="hidden" />
      
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={downloadImage}
          disabled={!imageData}
          className={`brutal-button flex items-center gap-2 flex-1 min-w-0 ${
            !imageData ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <Download size={20} />
          DOWNLOAD
        </button>
        
        <button
          onClick={onReset}
          disabled={!imageData}
          className={`brutal-button-accent p-3 ${
            !imageData ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          title="Reset Photo"
        >
          <RefreshCw size={20} />
        </button>
      </div>
      
      {imageData && (
        <div className="brutal-card bg-accent p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-sm uppercase">Filter Applied:</span>
          </div>
          <div className="font-black text-lg">{style.name}</div>
          <div className="text-sm opacity-75">{style.description}</div>
        </div>
      )}
    </div>
  );
};