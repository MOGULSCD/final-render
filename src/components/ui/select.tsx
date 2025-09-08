import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "flex h-12 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm transition-all duration-200 appearance-none cursor-pointer",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
