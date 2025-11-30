"use client";

import { useState } from "react";
import { products, categories, Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { ProductModal } from "@/components/product-modal";
import { Carousel } from "@/components/ui/carousel";

export function ProductsSection() {
    const [activeCategory, setActiveCategory] = useState<string>("Todos");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filteredProducts = activeCategory === "Todos"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section id="productos" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Catálogo de Productos</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                        Explora nuestra selección de ropa técnica y corporativa.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        <button
                            onClick={() => setActiveCategory("Todos")}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                activeCategory === "Todos"
                                    ? "bg-slate-900 text-white"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                            )}
                        >
                            Todos
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                    activeCategory === cat
                                        ? "bg-slate-900 text-white"
                                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col cursor-pointer group"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="h-64 bg-slate-200 relative overflow-hidden">
                                <Carousel images={product.images} className="h-full" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <span className="text-xs font-semibold text-amber-600 mb-2 uppercase tracking-wider">{product.category}</span>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{product.title}</h3>
                                <p className="text-slate-600 text-sm mb-4 flex-1 line-clamp-3">{product.description}</p>
                                <button
                                    className="w-full text-center bg-slate-100 text-slate-900 py-2 rounded-lg font-medium hover:bg-slate-200 transition-colors text-sm"
                                >
                                    Ver Detalles
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ProductModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    );
}
