
import React, { useRef, useEffect } from 'react';

const ThreeDModel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const iframe = document.createElement('iframe');
    iframe.src = "https://my.spline.design/untitled-3ee437aa14f685a45a29e9054eef531a/";
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '1rem';
    iframe.style.overflow = 'hidden';
    iframe.title = "3D Badger Model";
    
    containerRef.current.appendChild(iframe);
    
    return () => {
      if (containerRef.current) {
        const iframe = containerRef.current.querySelector('iframe');
        if (iframe) {
          containerRef.current.removeChild(iframe);
        }
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} className="w-full h-[400px] md:h-[500px] rounded-xl bg-white/50 backdrop-blur-sm p-2 shadow-xl animate-float">
      {/* 3D model iframe will be inserted here */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-muted-foreground">Loading 3D Model...</div>
      </div>
    </div>
  );
};

export default ThreeDModel;
