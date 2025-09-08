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
      className="bg-[#020c11] flex justify-center items-start w-screen h-screen overflow-hidden"
      data-model-id="68:161"
    >
      <div className="bg-[#020c11] w-full max-w-[1512px] h-full relative">
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

            <div className="flex flex-col items-center justify-center gap-2 px-1.5 py-1 bg-[#051d26] rounded-[56px] border border-solid border-black">
              <Button 
                onClick={handleOpenGetLinkPopup}
                className="h-auto px-4 py-2 rounded-2xl border border-solid border-black bg-[linear-gradient(41deg,rgba(255,150,2,1)_0%,rgba(255,80,94,1)_100%)] hover:opacity-90 hover:scale-105 transition-all duration-200 ease-out"
              >
                <span className="font-bold text-white text-base leading-4">
                  Get Your Link
                </span>
              </Button>
            </div>
          </header>

          {/* Video Preview Card */}
          <Card className="absolute w-[300px] h-[170px] bottom-4 left-4 rounded-2xl bg-[#051d26] border border-solid border-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] z-10">
            <CardContent className="p-0 relative w-full h-full">
              <img
                className="w-[284px] h-[154px] absolute top-[7px] left-[7px] rounded-xl border border-solid border-black object-cover"
                alt="Video Preview"
                src="https://c.animaapp.com/mfakhdk187JOQe/img/rectangle-3.png"
              />

              <div className="flex items-center gap-2 absolute bottom-3 left-4">
                <PlayIcon className="w-5 h-5 text-white" />
                <span className="font-medium text-white text-xs text-right tracking-wide leading-normal whitespace-nowrap">
                  Watch Demo
                </span>
              </div>
            </CardContent>
          </Card>

          {/* What is Moguls Button */}
          <div className="flex flex-col items-center justify-center gap-1 p-1 absolute bottom-40 right-4 rounded-[56px] border border-solid border-black bg-[linear-gradient(90deg,rgba(255,150,2,1)_0%,rgba(255,80,94,1)_100%)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] z-10">
            <Button 
              onClick={handleOpenPopup}
              className="h-auto flex items-center justify-center gap-1.5 px-4 py-2 bg-[#051d26] rounded-2xl border border-solid border-black hover:bg-[#051d26]/80 hover:scale-105 transition-all duration-200 ease-out"
            >
              <span className="font-semibold text-white text-xs tracking-wide leading-3 whitespace-nowrap">
                What is Moguls
              </span>
              <ChevronRightIcon className="w-2.5 h-2.5 text-white" />
            </Button>
          </div>


          {/* Main Heading */}
          <div className="absolute bottom-8 right-8 max-w-[700px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] z-10 transition-all duration-300 ease-out hover:translate-y-[-0.5rem]">
            <h1 className="font-black text-[#edf1f3] text-[60px] text-right tracking-tight leading-[60px]">
              The First Operating <br />
              System For Your Brand.
            </h1>
          </div>
        </div>
      </div>
      
      {/* Popup Components */}
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <GetLinkPopup isOpen={isGetLinkPopupOpen} onClose={handleCloseGetLinkPopup} />
    </div>
  );
};
