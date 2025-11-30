import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Comercial Costa Norte Ltda | Ropa de Trabajo y Uniformes",
    description: "Empresa líder en confección y venta de ropa de trabajo, uniformes corporativos y elementos de protección personal en Chile.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
                {children}
            </body>
        </html>
    );
}
