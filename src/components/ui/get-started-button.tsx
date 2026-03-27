import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GetStartedButtonProps extends ButtonProps {
  text?: string;
}

export const GetStartedButton = React.forwardRef<HTMLButtonElement, GetStartedButtonProps>(
  ({ text = "Get Started", className, children, ...props }, ref) => {
    return (
      <Button 
        ref={ref}
        className={cn("group relative overflow-hidden", className)} 
        size="lg"
        {...props}
      >
        <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0 z-20">
          {text}
        </span>
        <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-white/20 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-white">
          <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
        </i>
      </Button>
    );
  }
);
GetStartedButton.displayName = "GetStartedButton";
