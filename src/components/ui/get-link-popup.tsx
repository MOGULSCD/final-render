import React, { useState } from "react";
import { XIcon, CheckIcon, SparklesIcon, ShieldIcon, TrendingUpIcon, ZapIcon, CrownIcon, UsersIcon } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { Select } from "./select";
import { cn } from "../../lib/utils";
import styles from "../../styles/landing-design.module.css";

interface GetLinkPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetLinkPopup: React.FC<GetLinkPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Backdrop - Responsive width */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:max-w-[700px] backdrop-blur-md transition-all duration-700 ease-out z-50 overflow-y-auto",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
        style={{ 
          background: 'rgba(26, 26, 26, 0.4)',
          backdropFilter: 'blur(20px)',
          boxShadow: 'var(--shadow-2xl)'
        }}
      >
        <div className="p-4 sm:p-8" style={{ color: 'var(--color-text-primary)' }}>
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
          <div className="space-y-12 sm:space-y-16">
            {/* Hero Section */}
            <div 
              className={cn(
                "space-y-6 sm:space-y-8 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'var(--color-primary)' }} />
                  <span className="font-light text-sm sm:text-base tracking-wide" style={{ color: 'var(--color-text-secondary)' }}>Early Access</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-light leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                  Reserve Your Spot in the Future of Brand Management.
                </h1>
                <div className={styles.accentLine} />
                <p className="text-base sm:text-lg leading-relaxed font-light" style={{ color: 'var(--color-text-secondary)' }}>
                  Join the exclusive waitlist and be among the first to experience the next generation 
                  of creator tools and brand engagement platforms.
                </p>
              </div>
            </div>

            {/* Form Section */}
            <form 
              onSubmit={handleSubmit}
              className={cn(
                "space-y-4 sm:space-y-6 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
            >
              <div className="grid grid-cols-1 gap-4">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <Input
                name="company"
                placeholder="Company / Brand Name"
                value={formData.company}
                onChange={handleInputChange}
                required
              />

              <Select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>What interests you most?</option>
                <option value="content-creation">Content Creation Tools</option>
                <option value="brand-management">Brand Management</option>
                <option value="audience-engagement">Audience Engagement</option>
                <option value="monetization">Monetization Solutions</option>
                <option value="analytics">Analytics & Insights</option>
                <option value="collaboration">Creator Collaboration</option>
                <option value="marketplace">Marketplace Access</option>
                <option value="all">All of the above</option>
              </Select>

              <button 
                type="submit"
                className={cn(styles.buttonPrimary, "w-full px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold")}
                style={{ borderRadius: 'var(--radius)' }}
              >
                Reserve My Spot
              </button>
            </form>

            {/* Divider */}
            <div 
              className={cn(
                styles.accentLine,
                "transition-all duration-700 ease-out transform",
                isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "600ms" : "0ms" }}
            />

            {/* Early Access Benefits */}
            <div 
              className={cn(
                "space-y-8 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "700ms" : "0ms" }}
            >
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>Early Access Benefits</h2>
                
                <div className="grid gap-6">
                  {/* Priority Access Card */}
                  <div className={styles.benefitCard}>
                    <div className={cn(styles.benefitIcon, styles.priorityIcon)}>
                      <ZapIcon className="w-6 h-6" style={{ color: 'rgb(34, 197, 94)' }} />
                    </div>
                    <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--color-text-primary)' }}>
                      Priority Access
                    </h3>
                    <p className="font-light leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      Be the first to access new features and tools before public release. Get exclusive early access to beta features and shape the future of the platform.
                    </p>
                  </div>

                  {/* Exclusive Pricing Card */}
                  <div className={styles.benefitCard}>
                    <div className={cn(styles.benefitIcon, styles.pricingIcon)}>
                      <CrownIcon className="w-6 h-6" style={{ color: 'rgb(59, 130, 246)' }} />
                    </div>
                    <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--color-text-primary)' }}>
                      Exclusive Pricing
                    </h3>
                    <p className="font-light leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      Lock in special early-bird pricing with up to 50% off premium features. Secure lifetime discounts and exclusive member rates.
                    </p>
                  </div>

                  {/* Direct Influence Card */}
                  <div className={styles.benefitCard}>
                    <div className={cn(styles.benefitIcon, styles.influenceIcon)}>
                      <UsersIcon className="w-6 h-6" style={{ color: 'rgb(168, 85, 247)' }} />
                    </div>
                    <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--color-text-primary)' }}>
                      Direct Influence
                    </h3>
                    <p className="font-light leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      Shape the platform with your feedback and feature requests. Join our exclusive community and have direct input on product development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div 
              className={cn(
                "text-center pt-4 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "800ms" : "0ms" }}
            >
              <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                By joining, you agree to receive updates about Moguls. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
