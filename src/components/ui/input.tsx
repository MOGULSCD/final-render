import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm transition-all duration-200",
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
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
