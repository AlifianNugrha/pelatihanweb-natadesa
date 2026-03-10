import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
    return (
        <section id="cta" className="py-16 md:py-20 bg-green-950 relative overflow-hidden">
            {/* Abstract Background pattern */}
            <div className="absolute top-0 right-0 -m-24 w-80 h-80 bg-green-800 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -m-24 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Siap Majukan Desa Bersama <br />
                    <span className="text-orange-400">Natadesa Nusantara?</span>
                </h2>

                <p className="text-green-100 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed">
                    Hubungi kami hari ini untuk konsultasi awal <strong className="text-white">GRATIS</strong> terkait program pelatihan KDMP & BUMDes yang pas untuk kebutuhan desa Anda.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                        href="#"
                        className="px-6 py-3 bg-orange-500 text-white rounded-md font-bold text-sm hover:bg-orange-600 transition flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                        <Phone size={18} />
                        Hubungi Konsultan Kami
                    </a>
                    <Link
                        href="#layanan"
                        className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-md font-bold text-sm hover:bg-white/10 transition flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                        Lihat Modul Pelatihan
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
