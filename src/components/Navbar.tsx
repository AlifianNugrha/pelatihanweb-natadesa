"use client";

import { MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // 1. Import komponen Image
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Tentang Kami", href: "#about" },
        { name: "Layanan", href: "#layanan" },
        { name: "Kolaborasi", href: "#kolaborasi" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <>
            {/* Promo Bar */}
            <div className="bg-orange-500 text-white text-xs md:text-sm py-2 px-4 text-center font-medium">
                <span className="animate-pulse mr-2">🔥</span>
                Telah Dibuka! Pendaftaran Pelatihan KDMP & BUMDes Gelombang Terbaru di Solo Technopark.
            </div>

            <nav
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md py-3" : "bg-white py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* 2. Logo diganti dengan Image */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="logo Logo"
                            width={140}     // Sesuaikan lebar
                            height={45}     // Sesuaikan tinggi
                            priority        // Agar logo dimuat paling awal
                            className="object-contain"
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-600 hover:text-green-600 font-semibold text-sm transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="#cta"
                            className="px-5 py-2.5 bg-green-600 text-white rounded-md font-semibold text-sm hover:bg-green-700 transition"
                        >
                            Konsultasi
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-slate-800"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t md:hidden animate-in slide-in-from-top-2">
                        <div className="px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-600 hover:text-green-600 font-semibold text-sm transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#cta"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-5 py-3 bg-green-600 text-white rounded-md font-semibold text-sm hover:bg-green-700 transition text-center w-full"
                            >
                                Konsultasi Gratis
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Floating WA Button */}
            <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full hover:bg-green-600 hover:scale-110 transition-all"
                aria-label="Chat WhatsApp"
            >
                <MessageCircle size={28} />
            </a>
        </>
    );
}