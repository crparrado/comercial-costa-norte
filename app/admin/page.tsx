"use client";

import { useState } from "react";
import { products as initialProducts, Product } from "@/lib/products";
import { Plus, Trash2, Save, Copy, Download } from "lucide-react";

export default function AdminPage() {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [jsonOutput, setJsonOutput] = useState("");

    const handleAddProduct = () => {
        const newProduct: Product = {
            id: Date.now().toString(),
            title: "Nuevo Producto",
            category: "Industrial",
            description: "Descripción del producto...",
            images: ["/placeholder.svg"],
        };
        setProducts([...products, newProduct]);
    };

    const handleRemoveProduct = (id: string) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    const handleChange = (id: string, field: keyof Product, value: any) => {
        setProducts(
            products.map((p) => {
                if (p.id === id) {
                    if (field === "images") {
                        // Handle images as comma-separated string for input
                        return { ...p, images: value.split(",").map((s: string) => s.trim()) };
                    }
                    return { ...p, [field]: value };
                }
                return p;
            })
        );
    };

    const generateCode = () => {
        const code = `export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
}

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;
        setJsonOutput(code);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(jsonOutput);
        alert("Código copiado al portapapeles. Pégalo en lib/products.ts");
    };

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Mantenedor de Productos</h1>
                    <div className="flex gap-4">
                        <button
                            onClick={handleAddProduct}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
                        >
                            <Plus size={20} /> Agregar Producto
                        </button>
                        <button
                            onClick={generateCode}
                            className="bg-slate-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-slate-800"
                        >
                            <Save size={20} /> Generar Código
                        </button>
                    </div>
                </div>

                <div className="grid gap-6 mb-12">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Título</label>
                                        <input
                                            type="text"
                                            value={product.title}
                                            onChange={(e) => handleChange(product.id, "title", e.target.value)}
                                            className="w-full px-3 py-2 border rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Categoría</label>
                                        <input
                                            type="text"
                                            value={product.category}
                                            onChange={(e) => handleChange(product.id, "category", e.target.value)}
                                            className="w-full px-3 py-2 border rounded-md"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Imágenes (separadas por coma)</label>
                                        <input
                                            type="text"
                                            value={product.images.join(", ")}
                                            onChange={(e) => handleChange(product.id, "images", e.target.value)}
                                            className="w-full px-3 py-2 border rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Descripción</label>
                                        <textarea
                                            value={product.description}
                                            onChange={(e) => handleChange(product.id, "description", e.target.value)}
                                            rows={5}
                                            className="w-full px-3 py-2 border rounded-md"
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => handleRemoveProduct(product.id)}
                                            className="text-red-500 hover:text-red-700 flex items-center gap-2 text-sm font-medium"
                                        >
                                            <Trash2 size={16} /> Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {jsonOutput && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-8 z-50">
                        <div className="bg-white rounded-xl p-6 w-full max-w-4xl max-h-[80vh] flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">Código Generado</h3>
                                <div className="flex gap-2">
                                    <button
                                        onClick={copyToClipboard}
                                        className="bg-amber-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-amber-600"
                                    >
                                        <Copy size={20} /> Copiar
                                    </button>
                                    <button
                                        onClick={() => setJsonOutput("")}
                                        className="bg-slate-200 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-300"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mb-4">
                                Copia este código y reemplaza el contenido de <code>lib/products.ts</code>
                            </p>
                            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-auto flex-1 text-sm font-mono">
                                {jsonOutput}
                            </pre>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
