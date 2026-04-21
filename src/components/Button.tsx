import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Button = ({ href, children, className = "", ...props }: ButtonProps) => {
  return (
    <Link href={href}>
      <button
        className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};
