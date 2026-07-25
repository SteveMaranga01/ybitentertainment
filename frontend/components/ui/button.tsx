import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/frontend/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "ghost" | "quiet";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center border px-6 text-sm font-semibold uppercase tracking-[0.16em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ybit-gold",
        variant === "primary" &&
          "border-ybit-gold bg-ybit-gold text-ybit-black hover:bg-ybit-ivory",
        variant === "ghost" &&
          "border-white/20 bg-white/[0.03] text-white hover:border-white hover:bg-white/[0.08]",
        variant === "quiet" &&
          "border-transparent bg-transparent px-0 text-ybit-gold hover:text-ybit-ivory",
        className,
      )}
      {...props}
    />
  );
}
