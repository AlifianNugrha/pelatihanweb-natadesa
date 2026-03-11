import { CheckCircle2, Bookmark, BarChart, FileText, MonitorPlay, CalendarDays, Users } from "lucide-react";
import Link from "next/link";

export default function Services() {
    return (
        <section id="layanan" className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-2xl mx-auto mb-10">
                    <div className="text-orange-600 font-bold text-xs tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
                        <span className="w-6 h-0.5 bg-orange-600"></span> Program Pelatihan <span className="w-6 h-0.5 bg-orange-600"></span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-green-950 mb-4">
                        Layanan <span className="text-green-600">Unggulan</span> <br className="hidden md:block" />Natadesa Nusantara
                    </h2>
                </div>

                {/* Banner Promo Live Class (Ruangguru Style) */}
                <div className="mb-12 bg-gradient-to-r from-green-950 via-green-900 to-green-800 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 group">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

                    <div className="relative z-10 w-full md:w-2/3">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-red-500 text-white font-bold text-[10px] md:text-xs tracking-wider uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm animate-pulse">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div> Live Class
                            </span>
                            <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 font-bold text-[10px] md:text-xs px-2.5 py-1 rounded-full hidden sm:inline-block">
                                Kuota Terbatas
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
                            Kelas Online Interaktif: <br className="hidden md:block" /> <span className="text-orange-400 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Manajemen Finansial BUMDes</span>
                        </h3>

                        <p className="text-green-100 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                            Belajar langsung bersama pakar koperasi dan BUMDes secara real-time. Dapatkan panduan lengkap penyusunan laporan keuangan yang akuntabel.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-6 md:mb-0">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                                <CalendarDays size={18} className="text-orange-400" />
                                <div>
                                    <p className="text-[10px] text-green-200">Jadwal Terdekat</p>
                                    <p className="font-bold text-white text-sm">24 Agustus 2026</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                                <Users size={18} className="text-orange-400" />
                                <div>
                                    <p className="text-[10px] text-green-200">Peserta</p>
                                    <p className="font-bold text-white text-sm">Sisa 5 Slot</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 w-full md:w-1/3 flex flex-col items-center md:items-end justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm text-center border-t-4 border-orange-500">
                            <div className="w-16 h-16 bg-green-50 flex items-center justify-center rounded-2xl mx-auto mb-4 text-green-600 shadow-inner">
                                <MonitorPlay size={32} />
                            </div>
                            <h4 className="font-bold text-green-950 text-xl mb-1">Daftar Sekarang</h4>
                            <p className="text-slate-500 text-xs mb-4">Investasi cerdas untuk kemajuan desa</p>

                            <div className="flex items-center justify-center gap-2 mb-5">
                                <span className="text-slate-400 line-through text-xs">Rp 1.500.000</span>
                                <span className="text-2xl font-extrabold text-orange-600 min-w-max">Rp 499.000</span>
                            </div>

                            <Link href="/layanan" className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn">
                                Gabung Kelas Live <CheckCircle2 size={16} className="group-hover/btn:scale-110 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    {/* Card 1 - Featured (Webekspor style highlighting) */}
                    <div className="bg-green-950 text-white rounded-2xl p-6 relative overflow-hidden flex flex-col group transition hover:-translate-y-1">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-green-800 rounded-bl-full opacity-50 z-0"></div>
                        <div className="relative z-10 flex-col flex h-full">
                            <span className="bg-orange-500 text-white font-bold text-[9px] tracking-wider uppercase px-2 py-1 rounded-full w-max mb-4">
                                Prioritas Nasional
                            </span>
                            <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center mb-4 text-orange-400">
                                <Bookmark size={20} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">KDMP</h3>
                            <p className="text-green-100 text-xs leading-relaxed mb-6 flex-grow">
                                Program pelatihan pembentukan dan pengelolaan Koperasi Desa Merah Putih sesuai regulasi.
                            </p>

                            <ul className="space-y-2 mb-6">
                                {['Struktur koperasi', 'Manajemen keuangan', 'Strategi usaha', 'Kepatuhan regulasi'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-green-100">
                                        <CheckCircle2 size={14} className="text-orange-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/layanan" className="w-full py-2 bg-white text-green-950 text-sm font-bold rounded-md hover:bg-slate-100 transition mt-auto text-center">
                                Pilih Program
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border rounded-2xl p-6 flex flex-col group transition hover:-translate-y-1 border-slate-200">
                        <span className="bg-green-100 text-green-700 font-bold text-[9px] tracking-wider uppercase px-2 py-1 rounded-full w-max mb-4">
                            Program Andalan
                        </span>
                        <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center mb-4 text-green-600 group-hover:bg-green-50 group-hover:border-green-100 transition">
                            <BarChart size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-green-950 mb-3">BUMDes</h3>
                        <p className="text-slate-600 text-xs leading-relaxed mb-6 flex-grow">
                            Pelatihan komprehensif pendirian, pengelolaan, dan pengembangan BUMDes secara maksimal.
                        </p>

                        <ul className="space-y-2 mb-6">
                            {['Pendirian & legalitas', 'Tata kelola admin', 'Diversifikasi usaha', 'Penguatan SDM'].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                    <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/layanan" className="w-full py-2 bg-slate-50 border border-slate-200 text-green-950 text-sm font-bold rounded-md hover:border-slate-300 hover:bg-slate-100 transition mt-auto text-center">
                            Lihat Detail
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border rounded-2xl p-6 flex flex-col group transition hover:-translate-y-1 border-slate-200">
                        <span className="bg-slate-100 text-slate-700 font-bold text-[9px] tracking-wider uppercase px-2 py-1 rounded-full w-max mb-4">
                            Layanan Opsional
                        </span>
                        <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center mb-4 text-slate-600 group-hover:bg-slate-100 transition">
                            <FileText size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-green-950 mb-3">Konsultasi</h3>
                        <p className="text-slate-600 text-xs leading-relaxed mb-6 flex-grow">
                            Konsultasi intensif dan pendampingan langsung di lapangan untuk memastikan implementasi maksimal.
                        </p>

                        <ul className="space-y-2 mb-6">
                            {['Asesmen wilayah', 'Rencana strategis', 'Monitoring evaluasi', 'Fasilitasi perizinan'].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                    <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/layanan" className="w-full py-2 bg-slate-50 border border-slate-200 text-green-950 text-sm font-bold rounded-md hover:border-slate-300 hover:bg-slate-100 transition mt-auto text-center">
                            Pelajari Lanjut
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
