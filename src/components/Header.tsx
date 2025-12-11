

export const Header = () => {


    return (
        <header className="fixed top-0 w-full bg-white shadow-sm z-50 py-4">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                <div className="flex items-center">
                    <img
                        src="https://cdn.dooca.store/1814/files/logo-svg-9.png?v=1765290456"
                        alt="Campagnaro Truck Center"
                        className="h-10 md:h-24 w-auto"
                    />
                </div>

                {/* Nav - Visible on all devices now */}
                <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
                    <ul className="flex flex-wrap justify-center gap-4 md:gap-6 font-medium text-gray-700 text-sm md:text-base">
                        <li><a href="#obrigatoriedade" className="hover:text-primary transition-colors">Obrigatoriedade</a></li>
                        <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a></li>
                        <li><a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a></li>
                        <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
                    </ul>
                    <a
                        href="https://wa.me/555432327422"
                        target="_blank"
                        className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-lg font-medium transition-colors hidden md:flex items-center gap-2 text-sm md:text-base whitespace-nowrap"
                    >
                        Agendar (54) 3232-7422
                    </a>
                </nav>
            </div>
        </header>
    )
}
