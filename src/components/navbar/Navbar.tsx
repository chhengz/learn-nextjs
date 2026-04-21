"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const links = [
    { label: "Home", href: "/" },
    { label: "Temple", href: "/photo-feed" },
    { label: "Blog", href: "/blog" },
    { label: "Articles", href: "/articles" },
    { label: "Products", href: "/products" },
    { label: "Login", href: "/login" },
    // { label: "Dashboard", href: "/dashboard" },
]

export const Navbar = () => {

    const pathname = usePathname();


    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                {links.map((link) => {

                    const isActive = (href: string) => pathname === href || pathname.startsWith(href) && link.href !== "/";

                    return (<li key={link.href}>
                        <Link href={link.href} className={`text-gray-300 hover:text-white ${isActive(link.href) ? "text-white underline" : ""}`}>
                            {link.label}
                        </Link>
                    </li>)
                })}
            </ul>
        </nav>
    );
}

