import React, { useState } from 'react';
import { CameraWindow } from '@/components/CameraWindow';
import { OutputWindow } from '@/components/OutputWindow';
import { StyleSelector, styles, StyleType } from '@/components/StyleSelector';

const Index = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<StyleType>(styles[0]);

  const handlePhotoCapture = (imageData: string) => {
    setCapturedImage(imageData);
  };

  const handleStyleSelect = (style: StyleType) => {
    setSelectedStyle(style);
  };

  const handleReset = () => {
    setCapturedImage(null);
    setSelectedStyle(styles[0]);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="brutal-heading text-4xl md:text-6xl mb-4 animate-pulse">
          📸 PHOTOBOOTH
        </h1>
        <p className="text-lg font-bold opacity-75 uppercase tracking-wider">
          Transform Photos • Artistic Styles • Epic Avatars
        </p>
      </header>

      {/* Main Grid Layout */}
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Camera */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <CameraWindow 
              onPhotoCapture={handlePhotoCapture} 
            />
          </div>

          {/* Middle Column - Styles */}
          <div className="lg:col-span-4 flex flex-col">
            <StyleSelector
              selectedStyle={selectedStyle}
              onStyleSelect={handleStyleSelect}
            />
          </div>

          {/* Right Column - Output */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <OutputWindow
              imageData={capturedImage}
              onReset={handleReset}
              style={selectedStyle}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="text-center mt-12 pb-8">
        <div className="brutal-card inline-block bg-card p-4">
          <p className="font-bold text-sm uppercase tracking-wider">
            🎨 Made with bold aesthetics & brutal design
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default Index;