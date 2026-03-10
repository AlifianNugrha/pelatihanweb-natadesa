import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-28 md:pb-36">
            {/* Background decoration matching Webekspor's subtle patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-950 leading-[1.15] mb-6">
                        Membangun Desa <br />
                        <span className="text-green-600">Lebih Kuat,</span> <br />
                        <span className="text-orange-500">Lebih Mandiri.</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                        Natadesa Nusantara hadir sebagai mitra strategis desa memberikan
                        pelatihan <strong className="text-green-900">KDMP</strong> dan
                        <strong className="text-green-900"> BUMDes</strong> berkualitas
                        untuk mewujudkan desa berdaya dan sejahtera.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Link
                            href="#layanan"
                            className="px-8 py-3.5 bg-green-600 text-white rounded-md font-semibold text-base hover:bg-green-700 transition flex items-center justify-center gap-2 group -600/20"
                        >
                            Lihat Program Kami
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#kolaborasi"
                            className="px-8 py-3.5 bg-white border-2 border-slate-200 text-slate-700 rounded-md font-semibold text-base hover:border-slate-300 hover:bg-slate-50 transition flex items-center justify-center text-center"
                        >
                            Tentang Kolaborasi
                        </Link>
                    </div>

                    <div className="flex items-center gap-8 border-t border-slate-200 pt-8 mt-4">
                        <div>
                            <p className="text-3xl font-extrabold text-green-950">KDMP</p>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-1">Koperasi Desa</p>
                        </div>
                        <div className="w-px h-12 bg-slate-200"></div>
                        <div>
                            <p className="text-3xl font-extrabold text-green-950">BUMDes</p>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-1">Badan Usaha</p>
                        </div>
                    </div>
                </div>

                {/* Visual Element / Card */}
                <div className="relative mx-auto mt-10 md:mt-0 max-w-md md:max-w-lg lg:max-w-xl w-full">
                    <div className="absolute top-0 -left-6 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 -right-6 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

                    <div className="relative z-10 transition-transform duration-500 hover:scale-[1.02] mt-4 md:mt-0">
                        {/* Wrapper foto dengan mask gradient putih bawah */}
                        <div className="relative rounded-3xl overflow-hidden">
                            <img
                                src="/fotopakhari.png"
                                alt="Konsultan Natadesa Nusantara"
                                className="w-full h-auto object-cover"
                            />
                            {/* Blur/Fade white di area bawah (diturunkan ke 1/5 area) */}
                            <div className="absolute bottom-0 w-full h-1/5 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
                        </div>

                        {/* Floating Badge 1 - Free Sertifikat */}
                        <div className="absolute -top-4 -left-2 md:-top-6 md:-left-8 bg-white/95 backdrop-blur-sm border border-slate-100 p-2 md:p-4 rounded-xl flex items-center gap-2 md:gap-3 animate-float-1">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-50 text-orange-600 flex items-center justify-center rounded-lg">
                                <span className="text-lg md:text-xl"> 🧾</span>
                            </div>
                            <div>
                                <p className="text-[9px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Bonus Program</p>
                                <p className="font-bold text-green-950 text-xs md:text-base leading-tight">Free Sertifikat</p>
                            </div>
                        </div>

                        {/* Floating Badge 2 - Pelatihan BUMDes */}
                        <div className="absolute top-1/2 -right-2 md:-right-12 -translate-y-1/2 bg-white/95 backdrop-blur-sm border border-slate-100 p-2 md:p-4 rounded-xl flex items-center gap-2 md:gap-3 animate-float-2">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-green-50 text-green-600 flex items-center justify-center rounded-lg">
                                <CheckCircle2 size={24} className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div>
                                <p className="text-[9px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Materi Utama</p>
                                <p className="font-bold text-green-950 text-xs md:text-base leading-tight">Pelatihan BUMDes</p>
                            </div>
                        </div>

                        {/* Floating Badge 3 - Garansi */}
                        <div className="absolute -bottom-2 left-6 md:-bottom-1 md:left-20 bg-white/95 backdrop-blur-sm border border-slate-100 p-2 md:p-4 rounded-xl flex items-center gap-2 md:gap-3 animate-float-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg">
                                <span className="text-lg md:text-xl">📈</span>
                            </div>
                            <div>
                                <p className="text-[9px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Hasil Terukur</p>
                                <p className="font-bold text-green-950 text-xs md:text-base leading-tight">Metode Teruji</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
