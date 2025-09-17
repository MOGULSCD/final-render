import { ChevronRightIcon, PlayIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Popup } from "../../components/ui/popup";
import { GetLinkPopup } from "../../components/ui/get-link-popup";

export const ConceptMotion = (): JSX.Element => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isGetLinkPopupOpen, setIsGetLinkPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleOpenGetLinkPopup = () => {
    setIsGetLinkPopupOpen(true);
  };

  const handleCloseGetLinkPopup = () => {
    setIsGetLinkPopupOpen(false);
  };

  return (
    <div
      className="flex justify-center items-start w-screen h-screen overflow-hidden"
      style={{ background: 'var(--color-background-base)' }}
      data-model-id="68:161"
    >
      <div className="w-full max-w-[1512px] h-full relative" style={{ background: 'var(--color-background-base)' }}>
        <div className="relative h-full overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-contain scale-75"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://res.cloudinary.com/dputu81lo/video/upload/v1755634658/logo-solo_2_eougbl.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Header */}
          <header className="flex w-full max-w-[1480px] items-center justify-between absolute top-4 left-4 right-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] z-10 transition-all duration-300 ease-out hover:translate-y-[-0.5rem]">
            <img
              className="w-[159.23px] h-8"
              alt="Moguls Logo"
              src="https://c.animaapp.com/mfakhdk187JOQe/img/group-9.png"
            />

            <div 
              className="flex flex-col items-center justify-center gap-2 px-1.5 py-1"
              style={{
                borderRadius: 'var(--radius)',
                background: 'rgba(36, 36, 36, 0.6)',
                backdropFilter: 'blur(12px)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <button 
                onClick={handleOpenGetLinkPopup}
                className="h-auto px-4 py-2 hover:scale-105 transition-all duration-200 ease-out"
                style={{
                  borderRadius: 'var(--radius)',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-text-primary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <span className="font-bold text-base leading-4">
                  Get Your Link
                </span>
              </button>
            </div>
          </header>

          {/* Video Preview Card */}
          <div 
            className="absolute w-[300px] h-[170px] bottom-4 left-4 transition-all duration-300 ease-out hover:scale-105 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] z-10"
            style={{
              borderRadius: 'var(--radius)',
              background: 'rgba(36, 36, 36, 0.6)',
              backdropFilter: 'blur(12px)',
              boxShadow: 'var(--shadow-md)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div className="p-0 relative w-full h-full">
              <img
                className="w-[284px] h-[154px] absolute top-[7px] left-[7px] object-cover"
                style={{ borderRadius: 'var(--radius)' }}
                alt="Video Preview"
                src="https://c.animaapp.com/mfakhdk187JOQe/img/rectangle-3.png"
              />

              <div className="flex items-center gap-2 absolute bottom-3 left-4">
                <PlayIcon className="w-5 h-5" style={{ color: 'var(--color-text-primary)' }} />
                <span 
                  className="font-medium text-xs text-right tracking-wide leading-normal whitespace-nowrap"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Watch Demo
                </span>
              </div>
            </div>
          </div>

          {/* What is Moguls Button */}
          <div 
            className="flex flex-col items-center justify-center gap-1 p-1 absolute bottom-40 right-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] z-10"
            style={{
              borderRadius: 'var(--radius)',
              background: 'rgba(36, 36, 36, 0.6)',
              backdropFilter: 'blur(12px)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <button 
              onClick={handleOpenPopup}
              className="h-auto flex items-center justify-center gap-1.5 px-4 py-2 hover:scale-105 transition-all duration-200 ease-out"
              style={{
                borderRadius: 'var(--radius)',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-text-primary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span className="font-semibold text-xs tracking-wide leading-3 whitespace-nowrap">
                What is Moguls
              </span>
              <ChevronRightIcon className="w-2.5 h-2.5" />
            </button>
          </div>


          {/* Main Heading */}
          <div className="absolute bottom-8 right-8 max-w-[700px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] z-10 transition-all duration-300 ease-out hover:translate-y-[-0.5rem]">
            <h1 
              className="font-black text-[60px] text-right tracking-tight leading-[60px]"
              style={{ color: 'var(--color-text-primary)' }}
            >
              The First Operating <br />
              System For Your Brand.
            </h1>
          </div>
        </div>
      </div>
      
      {/* Popup Components */}
      <Popup 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
        onOpenGetLink={handleOpenGetLinkPopup}
      />
      <GetLinkPopup isOpen={isGetLinkPopupOpen} onClose={handleCloseGetLinkPopup} />
    </div>
  );
};
