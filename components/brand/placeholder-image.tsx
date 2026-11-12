import Image from "next/image";
import { cn } from "@/lib/utils";

export function PlaceholderImage({
  path,
  label,
  className,
  rounded = "none",
  priority = false,
  sizes = "100vw",
}: {
  path: string;
  label?: string;
  className?: string;
  rounded?: "none" | "lg" | "xl";
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={path}
      alt={label ?? ""}
      fill
      sizes={sizes}
      priority={priority}
      quality={70}
      className={cn(
        "object-cover",
        rounded === "lg" && "rounded-lg",
        rounded === "xl" && "rounded-xl",
        className
      )}
    />
  );
}
