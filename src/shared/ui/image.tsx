import { FC, HTMLProps } from "react";
import { cn } from "../lib/utils";

interface ImageProps extends Omit<HTMLProps<HTMLImageElement>, "fill"> {
  fill?: boolean;
}

export const Image: FC<ImageProps> = ({
  className,
  width,
  height,
  src,
  fill = false,
  alt,
  ...props
}) => {
  if (!width && !height && !fill) {
    throw new Error("w and h not given, use fill");
  }

  return (
    <img
      className={cn(fill && "absolute h-full w-full", className)}
      src={src}
      alt={alt}
      {...props}
    />
  );
};
