import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Pelatihan By Natadesa Nusantara",
  description: "Natadesa Nusantara hadir sebagai mitra strategis desa memberikan pelatihan KDMP dan BUMDes berkualitas.",
  icons: {
    icon: "/NDICO.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.className} min-h-screen bg-slate-50 text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
