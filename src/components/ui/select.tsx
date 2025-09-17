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
            "flex h-12 w-full px-4 py-3 text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm transition-all duration-200 appearance-none cursor-pointer",
            className
          )}
          style={{
            borderRadius: 'var(--radius)',
            border: '1px solid var(--color-border-default)',
            background: 'rgba(255,255,255,0.02)',
            color: 'var(--color-text-primary)',
          }}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDownIcon 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" 
          style={{ color: 'var(--color-text-tertiary)' }}
        />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
