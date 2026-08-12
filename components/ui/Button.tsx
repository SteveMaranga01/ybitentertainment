"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "ybit-button inline-flex min-h-12 items-center justify-center border px-6 text-sm font-semibold uppercase tracking-[0.16em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ybit-rose disabled:cursor-not-allowed disabled:opacity-50",
          variant === "primary" && "border-ybit-rose bg-ybit-rose text-ybit-black hover:text-ybit-black",
          variant === "secondary" && "border-white/20 bg-white/[0.03] text-white hover:border-ybit-blue hover:text-ybit-black",
          variant === "ghost" && "border-transparent bg-transparent px-0 text-ybit-rose hover:text-ybit-ivory",
          variant === "outline" && "border-2 border-ybit-rose text-ybit-rose hover:bg-ybit-rose hover:text-ybit-black",
          size === "sm" && "min-h-10 px-4 text-[10px]",
          size === "md" && "min-h-12 px-6 text-sm",
          size === "lg" && "min-h-12 px-8 text-base",
          className,
        )}
        {...props}
      >
        {variant !== "ghost" ? (
          <span aria-hidden className="ybit-button__layer">
            <span className="ybit-button__wave ybit-button__wave--first" />
            <span className="ybit-button__wave ybit-button__wave--second" />
          </span>
        ) : null}
        <span className="ybit-button__label" data-label={String(children)}>
          <span>{children}</span>
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
