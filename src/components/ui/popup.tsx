import React from "react";
import { XIcon } from "lucide-react";
import { Button } from "./button";
import { cn } from "../../lib/utils";
import styles from "../../styles/landing-design.module.css";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenGetLink?: () => void;
}

export const Popup: React.FC<PopupProps> = ({ isOpen, onClose, onOpenGetLink }) => {
  
  const handleClaimSpot = () => {
    onClose(); // Close the current popup
    setTimeout(() => {
      onOpenGetLink?.(); // Open the Get Your Link popup after a brief delay
    }, 300); // Small delay for smooth transition
  };
  return (
    <>
      {/* Backdrop - Only covers right side */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-[700px] backdrop-blur-md transition-all duration-700 ease-out z-50 overflow-y-auto",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
        style={{ 
          background: 'rgba(26, 26, 26, 0.4)',
          backdropFilter: 'blur(20px)',
          boxShadow: 'var(--shadow-2xl)'
        }}
      >
        <div className="p-8" style={{ color: 'var(--color-text-primary)' }}>
          {/* Close Button */}
          <button
            onClick={onClose}
            className={cn(
              "mb-12 flex items-center gap-3 transition-all duration-300 ease-out transform",
              styles.buttonPrimary,
              isOpen ? "translate-y-0 opacity-100" : "translate-y-[-20px] opacity-0"
            )}
            style={{ 
              transitionDelay: isOpen ? "200ms" : "0ms",
              borderRadius: 'var(--radius)'
            }}
          >
            <XIcon className="w-5 h-5" />
            <span className="text-base font-medium">Close</span>
          </button>

          {/* Main Content */}
          <div className="space-y-16">

            {/* Hero Section */}
            <div 
              className={cn(
                "space-y-8 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
            >
              <div className="space-y-6">
                <h1 className={cn("text-5xl font-black leading-tight tracking-tight", styles.textGradient)}>
                  MOGULS
                </h1>
                <div className={styles.accentLine} />
                <h2 className="text-3xl font-light leading-tight max-w-md" style={{ color: 'var(--color-text-primary)' }}>
                  The First Operating System for Creators.
                </h2>
                <p className="text-xl leading-relaxed font-light max-w-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  Your brand. Your business. Your community. Finally in one place.
                </p>
              </div>
              <button 
                onClick={handleClaimSpot}
                className={cn(styles.buttonCTA, "px-8 py-4 text-lg")}
                style={{ borderRadius: 'var(--radius)' }}
              >
                Claim Your Spot
              </button>
            </div>


            {/* What That Means Section */}
            <div 
              className={cn(
                "space-y-8 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "600ms" : "0ms" }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>What That Means</h2>
                <div className={styles.accentLine} />
                
                <div className={styles.contentCard}>
                  <p className="text-lg leading-relaxed font-light mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                    Other platforms give you fragments.<br />
                    Moguls gives you an entire operating system.
                  </p>
                </div>

                <div className={styles.featureList}>
                  <div className={cn(styles.featureItem, "font-light")} style={{ color: 'var(--color-text-tertiary)' }}>
                    Create & Distribute across every channel
                  </div>
                  <div className={cn(styles.featureItem, "font-light")} style={{ color: 'var(--color-text-tertiary)' }}>
                    Post to all your socials with a single click
                  </div>
                  <div className={cn(styles.featureItem, "font-light")} style={{ color: 'var(--color-text-tertiary)' }}>
                    Monetize with subscriptions, products, tickets, NFTs
                  </div>
                  <div className={cn(styles.featureItem, "font-light")} style={{ color: 'var(--color-text-tertiary)' }}>
                    Engage fans with loyalty rewards and gamification
                  </div>
                  <div className={cn(styles.featureItem, "font-light")} style={{ color: 'var(--color-text-tertiary)' }}>
                    Scale from single creator to global agency
                  </div>
                </div>
              </div>
            </div>


            {/* MogulLens AI Section */}
            <div 
              className={cn(
                "space-y-8 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "800ms" : "0ms" }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>MogulLens AI</h2>
                <div className={styles.accentLine} />
                
                <div className={styles.contentCard}>
                  <div className="space-y-4">
                    <p className="text-xl font-light" style={{ color: 'var(--color-text-primary)' }}>Your built-in strategist.</p>
                    <p className="text-lg leading-relaxed font-light" style={{ color: 'var(--color-text-secondary)' }}>
                      Real-time analytics. Cross-platform insights. Predictive recommendations.
                      MogulLens learns your brand and works like a co-pilot.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Monetization Section */}
            <div 
              className={cn(
                "space-y-8 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "850ms" : "0ms" }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Monetization Without Limits</h2>
                <div className={styles.accentLine} />
                
                <div className={styles.contentCard}>
                  <div className="space-y-4">
                    <p className="text-xl font-light" style={{ color: 'var(--color-text-primary)' }}>Sell anything. Bundle everything.</p>
                    <p className="text-lg leading-relaxed font-light" style={{ color: 'var(--color-text-secondary)' }}>
                      From digital products to live events, Moguls powers every revenue stream.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            {/* Why Moguls Section */}
            <div 
              className={cn(
                "space-y-8 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "950ms" : "0ms" }}
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Why Moguls</h2>
                <div className={styles.accentLine} />
                
                <div className={styles.contentCard}>
                  <div className="space-y-4">
                    <p className="text-xl font-light" style={{ color: 'var(--color-text-primary)' }}>Not a link. Not another platform.</p>
                    <p className="text-lg leading-relaxed font-light" style={{ color: 'var(--color-text-secondary)' }}>
                      Moguls is the first operating system for creators—a unified foundation for everything you do online.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Section */}
            <div 
              className={cn(
                "space-y-8 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "1050ms" : "0ms" }}
            >
              <div className="space-y-6">
                <div className="space-y-6">
                  <h2 className="text-3xl font-light" style={{ color: 'var(--color-text-primary)' }}>Everything you are. One OS.</h2>
                  <div className={styles.accentLine} />
                  
                  <div className={styles.contentCard}>
                    <div className="space-y-4">
                      <p className="text-xl leading-relaxed font-light" style={{ color: 'var(--color-text-secondary)' }}>
                        The future of your brand starts here.
                      </p>
                      <p className="text-lg font-light" style={{ color: 'var(--color-text-tertiary)' }}>
                        Moguls. Where your brand lives.
                      </p>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={handleClaimSpot}
                  className={cn(styles.buttonCTA, "px-8 py-4 text-lg")}
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  Claim Your Spot
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
