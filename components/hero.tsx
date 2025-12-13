"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Ruler, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
            {/* Background Gradient */}
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/back.png"
                    alt="Background Comercial Costa Norte"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 skew-x-12 transform origin-top-right z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 text-amber-500 font-semibold text-sm mb-6 border border-amber-500/20">
                            Líderes en Vestuario Industrial
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                            Uniformamos y protegemos a tu equipo con <span className="text-amber-500">calidad superior</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
                            Más de 10 años confeccionando y comercializando soluciones textiles para la industria chilena. Ropa de trabajo, uniformes corporativos y EPP.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <Link
                                href="#productos"
                                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                            >
                                Ver Catálogo <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="#contacto"
                                className="px-8 py-4 bg-transparent border border-slate-600 hover:border-white text-white font-semibold rounded-lg transition-all flex items-center justify-center"
                            >
                                Solicitar Cotización
                            </Link>
                        </div>
                    </motion.div>

                    {/* Quick Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                            <Ruler className="text-amber-500 mb-4 h-8 w-8" />
                            <h3 className="text-white font-bold mb-2">Confección a Medida</h3>
                            <p className="text-slate-400 text-sm">Diseños personalizados ajustados a tus requerimientos.</p>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                            <ShieldCheck className="text-amber-500 mb-4 h-8 w-8" />
                            <h3 className="text-white font-bold mb-2">Seguridad Industrial</h3>
                            <p className="text-slate-400 text-sm">Prendas certificadas para alta exigencia y protección.</p>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
                            <Users className="text-amber-500 mb-4 h-8 w-8" />
                            <h3 className="text-white font-bold mb-2">Imagen Corporativa</h3>
                            <p className="text-slate-400 text-sm">Uniformes que refuerzan la identidad de tu marca.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
