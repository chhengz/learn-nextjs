"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/login",
    label: "Login",
  },
  {
    href: "/register",
    label: "Register",
  },
  {
    href: "/forgot-password",
    label: "Forgot Password",
  },
  {
    href: "/reset-password",
    label: "Reset Password",
  },
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [input, setInput] = useState("");
  const pathname = usePathname();

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen p-8 pb-20">
      <div>
        <input 
          value={input} 
          className="border p-2 rounded w-full mb-4" 
          placeholder="Search..."
          onChange={e => setInput(e.target.value)} 
        />
      </div>
      <nav className="mb-8">
        <ul className="flex space-x-4">
          {navLinks.map((link) => {

            const isActive = (href: string) => pathname === href || pathname.startsWith(href) && link.href !== "/";

            return (<li key={link.href}>
              <Link href={link.href} className={` hover:text-blue-500 ${isActive(link.href) ? "text-black underline" : "text-blue-600"}`}>
                            {link.label}
                        </Link>
            </li>)
          })}
        </ul>
      </nav>

      {children}
    </div>
  );
}