import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

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
        "ybit-button inline-flex min-h-12 items-center justify-center border px-6 text-sm font-semibold uppercase tracking-[0.16em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ybit-rose",
        variant === "primary" &&
          "border-ybit-rose bg-ybit-rose text-ybit-black hover:text-ybit-black",
        variant === "ghost" &&
          "border-ybit-line bg-ybit-ivory/[0.03] text-ybit-ivory hover:border-ybit-rose hover:text-ybit-black",
        variant === "quiet" &&
          "border-transparent bg-transparent px-0 text-ybit-rose hover:text-ybit-ivory",
        className,
      )}
      {...props}
    >
      {variant !== "quiet" ? (
        <span aria-hidden className="ybit-button__layer">
          <span className="ybit-button__wave ybit-button__wave--first" />
          <span className="ybit-button__wave ybit-button__wave--second" />
        </span>
      ) : null}
      <span className="ybit-button__label" data-label={String(props.children)}>
        <span>{props.children}</span>
      </span>
    </a>
  );
}
