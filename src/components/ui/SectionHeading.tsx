import clsx from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="font-display text-5xl uppercase tracking-wider text-text-primary md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-text-secondary">{subtitle}</p>
      )}
      <div
        className={clsx(
          "mt-4 h-[2px] w-16 bg-accent-pop",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
