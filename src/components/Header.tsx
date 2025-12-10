import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="fixed top-0 w-full bg-white shadow-sm z-50 py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="https://cdn.dooca.store/1814/files/logo-svg-9.png?v=1765290456"
                        alt="Campagnaro Truck Center"
                        className="h-10 md:h-12 w-auto"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-6 font-medium text-gray-700">
                        <li><a href="#obrigatoriedade" className="hover:text-primary transition-colors">Obrigatoriedade</a></li>
                        <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a></li>
                        <li><a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a></li>
                        <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
                    </ul>
                    <a
                        href="https://wa.me/555432327422"
                        target="_blank"
                        className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                        Agendar (54) 3232-7422
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <nav className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4 text-center">
                    <a href="#obrigatoriedade" onClick={toggleMenu} className="block py-2 text-gray-700">Obrigatoriedade</a>
                    <a href="#como-funciona" onClick={toggleMenu} className="block py-2 text-gray-700">Como Funciona</a>
                    <a href="#diferenciais" onClick={toggleMenu} className="block py-2 text-gray-700">Diferenciais</a>
                    <a href="#contato" onClick={toggleMenu} className="block py-2 text-gray-700">Contato</a>
                    <a
                        href="https://wa.me/555432327422"
                        target="_blank"
                        className="bg-accent text-white px-6 py-3 rounded-lg font-medium inline-block w-full"
                    >
                        Agendar via WhatsApp
                    </a>
                </nav>
            )}
        </header>
    )
}
