import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white text-slate-600 py-10 md:py-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 mb-8">

                    {/* Brand Info */}
                    <div className="md:col-span-1">
                        <Link href="/" className="font-bold text-2xl tracking-tight text-green-950 mb-4 inline-block">
                            Nata<span className="text-orange-500">desa</span>
                        </Link>
                        <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
                            PT Konsultan Desa Terpercaya yang fokus pada pemberdayaan ekonomi lokal melalui pelatihan KDMP dan BUMDes bersertifikat.
                        </p>
                        <div className="flex items-center gap-3 text-slate-400">
                            <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-green-950 font-bold text-sm mb-4">Perusahaan</h4>
                        <ul className="space-y-3 text-xs md:text-sm font-medium">
                            <li><Link href="#about" className="hover:text-orange-600 transition-colors">Tentang Kami</Link></li>
                            <li><Link href="#layanan" className="hover:text-orange-600 transition-colors">Program Pelatihan</Link></li>
                            <li><Link href="#kolaborasi" className="hover:text-orange-600 transition-colors">Kemitraan (Solo Technopark)</Link></li>
                            <li><Link href="#" className="hover:text-orange-600 transition-colors">Karir & Instruktur</Link></li>
                            <li><Link href="#" className="hover:text-orange-600 transition-colors">Testimoni Desa</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-green-950 font-bold text-sm mb-4">Bantuan & Legal</h4>
                        <ul className="space-y-3 text-xs md:text-sm font-medium">
                            <li><Link href="#" className="hover:text-orange-600 transition-colors">Syarat & Ketentuan</Link></li>
                            <li><Link href="#" className="hover:text-orange-600 transition-colors">Kebijakan Privasi</Link></li>
                            <li><Link href="#" className="hover:text-orange-600 transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-orange-600 transition-colors">Panduan Pendaftaran</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-green-950 font-bold text-sm mb-4">Hubungi Kami</h4>
                        <ul className="space-y-3 text-xs md:text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="text-orange-500 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">
                                    Jl. Solo Technopark No.1, Jebres, <br />
                                    Kota Surakarta, Jawa Tengah 57126
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-orange-500 shrink-0" />
                                <span>+62 812-3456-7890</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-orange-500 shrink-0" />
                                <span>info@natadesa.co.id</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Natadesa Nusantara. All rights reserved.</p>
                    <p>
                        Kolaborasi resmi bersama <strong className="text-green-950">Solo Technopark</strong>
                    </p>
                </div>
            </div>
        </footer>
    );
}
