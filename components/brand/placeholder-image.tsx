import { cn } from "@/lib/utils";

export function PlaceholderImage({
  path,
  label,
  className,
  rounded = "none",
}: {
  path: string;
  label?: string;
  className?: string;
  rounded?: "none" | "lg" | "xl";
  priority?: boolean;
}) {
  return (
    <img
      src={path}
      alt={label ?? ""}
      className={cn(
        "h-full w-full object-cover",
        rounded === "lg" && "rounded-lg",
        rounded === "xl" && "rounded-xl",
        className
      )}
    />
  );
}
