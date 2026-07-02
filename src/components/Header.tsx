
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 w-full bg-white border-b border-black/10 z-50">
            <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex justify-between items-center gap-2 md:gap-4">
                <div className="flex items-center bg-white">
                    <img
                        src="https://cdn.dooca.store/1814/files/logo-svg-9.png?v=1765290456"
                        alt="Campagnaro Truck Center"
                        className="h-9 sm:h-10 md:h-14 w-auto"
                    />
                </div>

                <nav className="flex items-center gap-2 sm:gap-3 lg:gap-8">
                    <ul className="hidden md:flex items-center gap-5 lg:gap-7 font-medium text-secondary text-xs lg:text-sm">
                        <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a></li>
                        <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
                    </ul>
                    <button
                        type="button"
                        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isMenuOpen}
                        title={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="md:hidden w-9 h-9 inline-flex items-center justify-center text-secondary hover:text-primary transition-colors"
                    >
                        {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
                    </button>
                    <a
                        href="https://wa.me/555432327422"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-accent hover:bg-accent-hover text-white px-3 sm:px-4 py-2 rounded-md font-semibold transition-colors flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap"
                    >
                        <span className="sm:hidden">WhatsApp</span>
                        <span className="hidden sm:inline">Agendar (54) 3232-7422</span>
                    </a>
                </nav>
            </div>

            {isMenuOpen && (
                <nav className="md:hidden bg-white border-t border-black/10 px-4 py-3">
                    <ul className="max-w-6xl mx-auto flex items-center justify-center gap-5 text-xs font-semibold text-secondary">
                        <li><a href="#como-funciona" onClick={() => setIsMenuOpen(false)}>Como Funciona</a></li>
                        <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
                    </ul>
                </nav>
            )}
        </header>
    )
}
