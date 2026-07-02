import type { CSSProperties, ImgHTMLAttributes } from "react";

type StaticImageLike = {
  src: string;
};

export type ImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height"
> & {
  src: string | StaticImageLike;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
};

function normalizeSrc(src: ImageProps["src"]) {
  return typeof src === "string" ? src : src.src;
}

export default function Image({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  loading,
  style,
  sizes,
  ...props
}: ImageProps) {
  const mergedStyle: CSSProperties = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: style?.objectFit,
        ...style,
      }
    : (style ?? {});

  return (
    <img
      src={normalizeSrc(src)}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? "eager" : (loading ?? "lazy")}
      fetchPriority={priority ? "high" : undefined}
      sizes={sizes}
      style={mergedStyle}
      {...props}
    />
  );
}
