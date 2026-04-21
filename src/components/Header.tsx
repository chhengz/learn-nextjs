import Link from "next/link";
import { Navbar } from "./navbar/Navbar";

export default function Header() {
    return (
        <header className="flex items-center justify-between text-center p-4 bg-gray-800 text-white">
            <h1 className="text-2xl hover:underline"><Link href="/">Jakku</Link></h1>

            <Navbar />
        </header>
    );
};
