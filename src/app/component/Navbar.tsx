"use client";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#project", label: "Projects" },
    { href: "#education", label: "Education" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-zinc-200 bg-zinc-50/90 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
                <a href="#home" className="font-semibold tracking-tight text-zinc-900">
                    Stormnoopper
                </a>
                <div className="flex items-center gap-6 text-sm text-zinc-600">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="hidden transition-colors hover:text-zinc-900 md:block">
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="rounded-md bg-zinc-900 px-3.5 py-1.5 font-medium text-white transition-colors hover:bg-zinc-700"
                    >
                        Contact
                    </a>
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="-mr-2 p-2 text-zinc-700 md:hidden"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="border-t border-zinc-200 px-5 py-2 md:hidden">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2.5 text-zinc-700 hover:text-zinc-900"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
