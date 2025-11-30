"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        type: "cotizacion",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("Por favor completa los campos obligatorios.");
            return;
        }
        alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
        // Reset form
        setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            type: "cotizacion",
            message: "",
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contacto" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Contáctanos</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        ¿Necesitas una cotización o tienes alguna duda? Escríbenos y te responderemos a la brevedad.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Información de Contacto</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Teléfono</p>
                                        <p className="text-slate-600">+56 9 1234 5678</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Correo Electrónico</p>
                                        <p className="text-slate-600">ventas@comercialcostanorte.cl</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">Ubicación</p>
                                        <p className="text-slate-600">Santiago, Chile</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-100">
                                <a
                                    href="https://wa.me/56912345678?text=Hola,%20quiero%20cotizar%20ropa%20de%20trabajo%20para%20mi%20empresa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-lg font-bold transition-colors"
                                >
                                    Contactar por WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Nombre Completo *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Empresa</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                        placeholder="Nombre empresa"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Correo Electrónico *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                        placeholder="tucorreo@empresa.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                        placeholder="+56 9..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Requerimiento</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                                >
                                    <option value="cotizacion">Cotización de Productos</option>
                                    <option value="confeccion">Servicio de Confección</option>
                                    <option value="informacion">Información General</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                                    placeholder="Describe tu requerimiento..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                            >
                                Enviar Mensaje <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
