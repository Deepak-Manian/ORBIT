import { ReactNode } from "react";
import { Icon, IconName } from "./Icon";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "pill";
  size?: "sm" | "md" | "lg";
  icon?: IconName;
  iconPosition?: "left" | "right";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon = "arrow",
  iconPosition = "right",
  onClick,
  disabled = false,
  className = "",
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center font-body font-semibold tracking-tight transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 rounded-full gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-full gap-2",
    lg: "text-base px-7 py-3.5 rounded-full gap-2.5 font-bold",
  };

  const variantClasses = {
    primary:
      "bg-[var(--orange)] text-[var(--black)] hover:bg-[#ff7654] shadow-[2px_2px_0px_var(--black)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_var(--black)] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[2px_2px_0px_var(--black)]",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm",
    outline:
      "bg-transparent text-[var(--black)] border-2 border-[var(--black)] hover:bg-[var(--black)] hover:text-white shadow-[2px_2px_0px_var(--black)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
    ghost:
      "bg-transparent text-[var(--muted)] hover:text-[var(--black)] hover:bg-[var(--black)]/5 rounded-lg",
    dark: "bg-[var(--black)] text-white hover:bg-neutral-900 border border-neutral-800 shadow-[2px_2px_0px_rgba(255,255,255,0.2)]",
    pill: "bg-[var(--cream)] text-[var(--black)] border border-[var(--line)] hover:border-[var(--black)]",
  };

  const iconSize = size === "sm" ? 14 : size === "lg" ? 20 : 16;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {icon && iconPosition === "left" && <Icon name={icon} size={iconSize} />}
      <span>{children}</span>
      {icon && iconPosition === "right" && <Icon name={icon} size={iconSize} />}
    </button>
  );
}
