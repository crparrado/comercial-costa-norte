"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "#inicio" },
        { name: "Quiénes Somos", href: "#quienes-somos" },
        { name: "Servicios", href: "#servicios" },
        { name: "Productos", href: "#productos" },
        { name: "Sustentabilidad", href: "#sustentabilidad" },
        { name: "Clientes", href: "#clientes" },
        { name: "Blog", href: "/blog" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex items-center gap-3">
                        <span className="text-4xl font-extrabold text-[#ea7600] tracking-tighter">CCN</span>
                        <div className={cn("h-10 w-px transition-colors duration-300", scrolled ? "bg-slate-900" : "bg-white")}></div>
                        <div className={cn("flex flex-col text-sm font-bold leading-tight transition-colors duration-300", scrolled ? "text-slate-900" : "text-white")}>
                            <span>COMERCIAL</span>
                            <span>COSTA NORTE</span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium hover:text-amber-500 transition-colors",
                                scrolled ? "text-slate-700" : "text-slate-200"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contacto"
                        className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-2 rounded-full text-sm font-bold transition-colors flex items-center gap-2"
                    >
                        <Phone size={16} /> Cotizar
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn("lg:hidden", scrolled ? "text-slate-900" : "text-white")}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 lg:hidden">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-700 font-medium hover:text-amber-500"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
