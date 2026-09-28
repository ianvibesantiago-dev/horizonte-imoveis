import type { ComponentProps } from "react";

// Espelha o componente "Button" do Figma (Type = Dark | Light | Outline).
type Variant = "dark" | "light" | "outline";

const variants: Record<Variant, string> = {
  dark: "bg-night text-canvas hover:bg-bronze",
  light: "bg-canvas text-night hover:bg-bronze hover:text-canvas",
  outline: "border border-night text-night hover:bg-night hover:text-canvas",
};

export function Button({ variant = "dark", className = "", children, ...props }: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a
      className={`label group inline-flex items-center gap-4 rounded-sm px-8 py-4 transition-colors duration-500 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      <span aria-hidden className="h-px w-6 bg-current transition-all duration-500 group-hover:w-10" />
    </a>
  );
}
