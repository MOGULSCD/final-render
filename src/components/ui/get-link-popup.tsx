import React, { useState } from "react";
import { XIcon, CheckIcon, SparklesIcon, ShieldIcon, TrendingUpIcon } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { Select } from "./select";
import { cn } from "../../lib/utils";

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
      {/* Backdrop - Only covers right side */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-[700px] bg-black/70 backdrop-blur-md transition-all duration-700 ease-out z-50 overflow-y-auto",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="p-6 text-white">
          {/* Close Button */}
          <Button
            onClick={onClose}
            className={cn(
              "mb-6 flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-500 ease-out transform",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-[-20px] opacity-0"
            )}
            style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
          >
            <XIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Close</span>
          </Button>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Hero Section */}
            <div 
              className={cn(
                "space-y-4 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <SparklesIcon className="w-6 h-6 text-orange-400" />
                <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Early Access</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black leading-tight">
                Reserve Your Spot in<br />
                the Future of Brand<br />
                Management.
              </h1>
              <p className="text-base text-white/80 leading-relaxed max-w-[500px] font-medium">
                Join the exclusive waitlist and be among the first to experience the next generation 
                of creator tools and brand engagement platforms.
              </p>
            </div>

            {/* Form Section */}
            <form 
              onSubmit={handleSubmit}
              className={cn(
                "space-y-6 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-4 rounded-xl font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-200 ease-out text-base h-auto"
              >
                Reserve My Spot
              </Button>
            </form>

            {/* Divider */}
            <div 
              className={cn(
                "w-full h-px bg-gradient-to-r from-orange-400/80 to-pink-500/80 transition-all duration-700 ease-out transform",
                isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "600ms" : "0ms" }}
            />

            {/* Early Access Benefits */}
            <div 
              className={cn(
                "space-y-6 transition-all duration-700 ease-out transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
              )}
              style={{ transitionDelay: isOpen ? "700ms" : "0ms" }}
            >
              <h2 className="text-2xl font-black text-white">Early Access Benefits:</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Priority Access</h3>
                    <p className="text-white/70 text-sm font-medium">Be the first to access new features and tools before public release.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <ShieldIcon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Exclusive Pricing</h3>
                    <p className="text-white/70 text-sm font-medium">Lock in special early-bird pricing with up to 50% off premium features.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <TrendingUpIcon className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Direct Influence</h3>
                    <p className="text-white/70 text-sm font-medium">Shape the platform with your feedback and feature requests.</p>
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
              <p className="text-white/50 text-xs">
                By joining, you agree to receive updates about Moguls. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
