"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
    { name: "Desa Cisitu, Garut, Jawa Barat", year: "2025" },
    { name: "Desa Grenggeng, Kebumen, Jawa Tengah", year: "2025" },
    { name: "Desa Loa Lepu, Kutai Kartanegara, Kaltim", year: "2025" },
    { name: "Desa Muara Muntai Ilir, Kutai Kartanegara, Kaltim", year: "2025" },
    { name: "Desa Bumi Etam, Kutai Timur, Kaltim", year: "2025" },
    { name: "RW 01 Desa Ponggok, Klaten, Jawa Tengah", year: "2024" },
    { name: "Desa Gatak, Klaten, Jawa Tengah", year: "2024" },
    { name: "Desa Manggis, Boyolali, Jawa Tengah", year: "2024" },
    { name: "Desa Barudua, Garut, Jawa Barat", year: "2024" },
    { name: "Objek Wisata Padidipa, Boyolali, Jateng", year: "2024" },
    { name: "Desa Motongbang, Alor, NTT", year: "2023" },
    { name: "Desa Lewalu, Alor, NTT", year: "2023" },
    { name: "Desa Kopidil, Alor, NTT", year: "2023" },
    { name: "Desa Alila Selatan, Alor, NTT", year: "2023" },
    { name: "Desa Pintumas, Alor, NTT", year: "2023" },
    { name: "Desa Teluk Bakau, Bintan, Kepri", year: "2022" },
    { name: "Desa Gunung Kijang, Bintan, Kepri", year: "2022" },
    { name: "Desa Sidowayah, Klaten, Jawa Tengah", year: "2021" },
    { name: "Desa Canden, Boyolali, Jawa Tengah", year: "2021" },
    { name: "Desa Tibayan, Klaten, Jawa Tengah", year: "2021" },
];

export default function PortfolioMarquee() {
    return (
        <section className="py-12 bg-green-50 overflow-hidden relative border-y border-green-100">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center pt-4">
                <h3 className="text-xl md:text-2xl font-bold text-green-950">
                    Jejak Pengabdian & <span className="text-orange-600">Pelatihan</span>
                </h3>
                <p className="text-slate-600 text-sm mt-2 max-w-2xl mx-auto">
                    Telah dipercaya oleh berbagai desa dan komunitas di seluruh Indonesia sejak tahun 2021 untuk meningkatkan kapasitas SDM.
                </p>
            </div>

            <div className="relative w-full flex flex-col gap-4">
                {/* Gradient overlays for smooth fading edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-green-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-green-50 to-transparent z-10 pointer-events-none"></div>

                {/* Row 1: Left to right mapping */}
                <div className="flex w-[200%] gap-4 animate-[marquee_50s_linear_infinite]">
                    {[...locations, ...locations].map((loc, i) => (
                        <div
                            key={`row1-${i}`}
                            className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-green-100 shadow-sm shrink-0"
                        >
                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                <MapPin size={16} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-green-950">{loc.name}</span>
                                <span className="text-xs text-slate-500">Tahun {loc.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
