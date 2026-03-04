import Link from "next/link";
import { IconType } from "react-icons";

interface LinkButtonProps {
  href: string;
  text: string;
  icon?: IconType;
  iconPosition?: "right" | "left";
  rounded?: boolean;
  download?: boolean;

  animate?: boolean;
  aosType?: string;
  aosDelay?: number;
}

function LinkButton({
  href,
  text,
  icon: Icon,
  iconPosition,
  rounded,
  download = false,
  animate = false,
  aosType = "fade-up",
  aosDelay = 0,
}: LinkButtonProps) {
  return (
    <Link
      {...(animate && {
        "data-aos": aosType,
        "data-aos-delay": aosDelay,
      })}
      href={href}
      download={download}
      className={`cursor-pointer inline-flex justify-center items-center gap-2 bg-accent px-4 py-2 rounded-full  hover:bg-accent/70 transition-all duration-200 active:scale-[0.98] hover:scale-105 ${rounded ? "rounded-full" : "rounded-lg"}`}
    >
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
      {text}
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
    </Link>
  );
}

export default LinkButton;
