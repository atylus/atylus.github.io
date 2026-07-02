import Image from "next/image";

type ThemeLogoProps = {
  alt?: string;
  className?: string;
  height?: number;
  size?: "default" | "compact";
  width?: number;
};

export default function ThemeLogo({
  alt = "Atylus logo",
  className,
  height = 20,
  size = "default",
  width = 110,
}: ThemeLogoProps) {
  return (
    <span
      className={["theme-logo", `theme-logo--${size}`, className]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        alt={alt}
        className="theme-logo-light"
        src="/assets/images/logo-dark.svg"
        width={width}
        height={height}
      />
      <Image
        alt={alt}
        className="theme-logo-dark"
        src="/assets/images/logo-light.svg"
        width={width}
        height={height}
      />
    </span>
  );
}
