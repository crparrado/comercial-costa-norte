"use client";

import { useState } from "react";
import { products, categories, Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { ProductModal } from "@/components/product-modal";
import { Carousel } from "@/components/ui/carousel";

export function ProductsSection() {
    return (
        <section id="productos" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Catálogo de Productos</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                        Descubre nuestra línea completa de ropa técnica y corporativa en nuestro catálogo digital.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="grid md:grid-cols-2">
                        <div className="bg-slate-900 p-12 flex flex-col justify-center items-start text-white">
                            <h3 className="text-2xl font-bold mb-4">Colección 2025</h3>
                            <p className="text-slate-300 mb-8">
                                Explora más de 300 productos diseñados para la seguridad y comodidad de tu equipo. Ropa ignífuga, térmica, alta visibilidad y más.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 w-full">
                                <a
                                    href="/catalogo.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                    Ver Catálogo
                                </a>
                                <a
                                    href="/catalogo.pdf"
                                    download="Catalogo-Comercial-Costa-Norte.pdf"
                                    className="flex-1 bg-transparent border border-white/20 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                    Descargar PDF
                                </a>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-auto bg-slate-100 flex items-center justify-center p-8">
                            {/* Visual representation of a catalog */}
                            <div className="relative w-48 aspect-[1/1.41] bg-white shadow-2xl rounded-r-lg border-l-4 border-slate-200 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 border border-slate-100">
                                    <span className="text-4xl font-extrabold text-[#ea7600] tracking-tighter mb-2">CCN</span>
                                    <div className="h-px w-12 bg-slate-200 mb-2"></div>
                                    <span className="text-[10px] font-bold text-slate-900 uppercase text-center leading-tight">Comercial<br />Costa Norte</span>
                                    <div className="mt-8 text-center">
                                        <span className="block text-xs text-slate-400 uppercase tracking-widest">Catálogo</span>
                                        <span className="block text-xl font-bold text-slate-900">2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
