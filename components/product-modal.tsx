"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import { Product } from "@/lib/products";
import { Carousel } from "@/components/ui/carousel";
import Link from "next/link";

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    if (!isOpen || !product) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative z-10 flex flex-col md:flex-row max-h-[90vh]"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white text-slate-900 p-2 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 bg-slate-100 h-64 md:h-auto">
                        <Carousel images={product.images} className="w-full h-full" />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
                        <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">
                            {product.category}
                        </span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{product.title}</h2>
                        <div className="prose prose-slate mb-8">
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-slate-100">
                            <Link
                                href={`https://wa.me/56912345678?text=Hola,%20me%20interesa%20cotizar%20el%20producto:%20${encodeURIComponent(product.title)}`}
                                target="_blank"
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                            >
                                <Phone size={20} /> Cotizar por WhatsApp
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
