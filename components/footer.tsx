import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="mb-6">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl font-extrabold text-[#ea7600] tracking-tighter">CCN</span>
                                <div className="h-10 w-px bg-white"></div>
                                <div className="flex flex-col text-sm font-bold leading-tight text-white">
                                    <span>COMERCIAL</span>
                                    <span>COSTA NORTE</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm mb-4">
                            Expertos en ropa de trabajo y uniformes corporativos. Calidad y seguridad para tu equipo.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-white transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li><Link href="#inicio" className="hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link href="#quienes-somos" className="hover:text-white transition-colors">Quiénes Somos</Link></li>
                            <li><Link href="#productos" className="hover:text-white transition-colors">Catálogo</Link></li>
                            <li><Link href="#contacto" className="hover:text-white transition-colors">Contacto</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contacto</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone size={16} /> +56 9 1234 5678
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} /> ventas@comercialcostanorte.cl
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={16} /> Santiago, Chile
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Comercial Costa Norte Ltda. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
