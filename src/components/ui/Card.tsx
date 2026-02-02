import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:border-accent-warm/20 hover:bg-white/[0.06]",
        className
      )}
    >
      {children}
    </div>
  );
}
