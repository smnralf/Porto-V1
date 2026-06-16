import { cn } from "@/lib/utils";
import Link from "next/link";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; external?: boolean };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", children, className, ...rest } = props;

  const base =
    "inline-flex items-center justify-center gap-2 font-black border-2 border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember disabled:pointer-events-none disabled:opacity-50 btn-hard";

  const variants = {
    primary:   "bg-ember text-ink",
    secondary: "bg-paper text-ink",
    ghost:     "bg-transparent border-transparent text-muted hover:text-main transition-colors",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, external, ...linkRest } = props as ButtonAsLink;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer"
          {...(linkRest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(linkRest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
