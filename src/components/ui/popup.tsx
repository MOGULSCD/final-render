import React from "react";
import { XIcon } from "lucide-react";
import { Button } from "./button";
import { cn } from "../../lib/utils";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop - Only covers right side */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-[700px] bg-black/70 backdrop-blur-md transition-all duration-700 ease-out z-50 overflow-y-auto",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="p-8 text-white">
          {/* Close Button */}
          <Button
            onClick={onClose}
            className={cn(
              "mb-8 flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-500 ease-out transform",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-[-20px] opacity-0"
            )}
            style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
          >
            <XIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Close</span>
          </Button>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Hero Section */}
            <div 
              className={cn(
                "space-y-6 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
            >
              <h1 className="text-6xl font-bold leading-tight tracking-wider">
                MOGULS
              </h1>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  The First Operating System for Creators.
                </h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Your brand. Your business. Your community. Finally in one place.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 ease-out text-lg">
                Claim Your Spot
              </Button>
            </div>

            {/* Divider */}
            <div 
              className={cn(
                "w-full h-px bg-gradient-to-r from-orange-400/80 to-pink-500/80 transition-all duration-700 ease-out transform",
                isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
            />

            {/* What That Means Section */}
            <div 
              className={cn(
                "space-y-6 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "600ms" : "0ms" }}
            >
              <h2 className="text-2xl font-bold text-white">What That Means</h2>
              <div className="space-y-4">
                <p className="text-white/90 leading-relaxed">
                  Other platforms give you fragments.<br />
                  Moguls gives you an entire operating system—built for creators, brands, and businesses to:
                </p>
                <ul className="space-y-2 text-white/90 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Create & Distribute across every channel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Post to all your socials from Moguls with a single click</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Monetize with subscriptions, products, tickets, NFTs, and sponsorships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Engage fans with loyalty rewards, gamification, and token-gated access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Scale seamlessly from a single creator to a global agency</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Second Divider */}
            <div 
              className={cn(
                "w-full h-px bg-gradient-to-r from-orange-400/80 to-pink-500/80 transition-all duration-700 ease-out transform",
                isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "700ms" : "0ms" }}
            />

            {/* MogulLens AI Section */}
            <div 
              className={cn(
                "space-y-4 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "800ms" : "0ms" }}
            >
              <h2 className="text-2xl font-bold text-white">MogulLens AI</h2>
              <div className="space-y-3">
                <p className="text-lg text-white/90 font-medium">Your built-in strategist.</p>
                <p className="text-white/90 leading-relaxed">
                  Real-time analytics. Cross-platform insights. Predictive recommendations.<br />
                  MogulLens learns your brand and works like a co-pilot—saving you hours while keeping you one step ahead.
                </p>
              </div>
            </div>

            {/* Monetization Section */}
            <div 
              className={cn(
                "space-y-4 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "850ms" : "0ms" }}
            >
              <h2 className="text-2xl font-bold text-white">Monetization Without Limits</h2>
              <div className="space-y-3">
                <p className="text-lg text-white/90 font-medium">Sell anything. Bundle everything. Accept fiat or crypto.</p>
                <p className="text-white/90 leading-relaxed">
                  From digital products to live events, Moguls powers every revenue stream.
                </p>
              </div>
            </div>

            {/* Third Divider */}
            <div 
              className={cn(
                "w-full h-px bg-gradient-to-r from-orange-400/80 to-pink-500/80 transition-all duration-700 ease-out transform",
                isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "900ms" : "0ms" }}
            />

            {/* Why Moguls Section */}
            <div 
              className={cn(
                "space-y-4 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "950ms" : "0ms" }}
            >
              <h2 className="text-2xl font-bold text-white">Why Moguls</h2>
              <div className="space-y-3">
                <p className="text-lg text-white/90 font-medium">Not a link. Not another platform.</p>
                <p className="text-white/90 leading-relaxed">
                  Moguls is the first operating system for creators—a unified foundation for everything you do online.
                </p>
              </div>
            </div>

            {/* Fourth Divider */}
            <div 
              className={cn(
                "w-full h-px bg-gradient-to-r from-orange-400/80 to-pink-500/80 transition-all duration-700 ease-out transform",
                isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "1000ms" : "0ms" }}
            />

            {/* Closing Section */}
            <div 
              className={cn(
                "space-y-6 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "1050ms" : "0ms" }}
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Everything you are. One OS.</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  The future of your brand starts here.
                </p>
                <p className="text-lg text-white/90 font-medium">
                  Moguls. Where your brand lives.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Don't get left behind—secure your place before everyone else.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 ease-out text-lg">
                Claim Your Spot
              </Button>
            </div>

            {/* Scroll indicator */}
            <div 
              className={cn(
                "flex justify-center pt-8 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "1000ms" : "0ms" }}
            >
              <div className="text-white/60 text-sm flex items-center gap-2">
                <span>scroll</span>
                <div className="w-4 h-6 border border-white/40 rounded-full flex justify-center">
                  <div className="w-1 h-2 bg-white/60 rounded-full mt-1 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
