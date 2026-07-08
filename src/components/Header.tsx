export const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-white border-b border-black/10 z-50">
            <div className="max-w-6xl mx-auto px-3 sm:px-4 h-14 md:h-16 flex justify-between items-center gap-2 md:gap-4">
                <div className="flex items-center bg-white shrink-0">
                    <img
                        src="https://cdn.dooca.store/1814/files/logo-svg-9.png?v=1765290456"
                        alt="Campagnaro Truck Center"
                        className="h-8 sm:h-10 md:h-14 w-auto"
                    />
                </div>

                <nav className="flex flex-1 items-center justify-center gap-2 sm:gap-3 lg:gap-8 min-w-0">
                    <ul className="flex md:hidden items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-secondary whitespace-nowrap">
                        <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como funciona</a></li>
                        <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
                    </ul>

                    <ul className="hidden md:flex items-center gap-5 lg:gap-7 font-medium text-secondary text-xs lg:text-sm">
                        <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a></li>
                        <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
                    </ul>
                </nav>

                <a
                    href="https://wa.me/555432327422"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-accent hover:bg-accent-hover text-white px-2.5 sm:px-4 py-2 rounded-md font-semibold transition-colors flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap shrink-0"
                >
                    <span className="sm:hidden">WhatsApp</span>
                    <span className="hidden sm:inline">Agendar (54) 3232-7422</span>
                </a>
            </div>
        </header>
    )
}