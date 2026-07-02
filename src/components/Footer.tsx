import { Clock, ExternalLink, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import inmetroLogo from '../assets/inmetro.png'

const contactLinkClass = 'flex items-start gap-2 hover:text-white transition-colors'

export const Footer = () => {
    return (
        <footer id="contato" className="bg-secondary text-white/75 border-t-2 border-primary">
            <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_0.75fr_0.8fr] gap-8 lg:gap-6">
                <div>
                    <h2 className="text-lg font-bold text-white mb-4">Campagnaro Truck Center</h2>
                    <address className="not-italic space-y-3 text-sm leading-relaxed">
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=BR-116%2C+6255+-+Pradense%2C+Vacaria+-+RS%2C+95208-350"
                            target="_blank"
                            rel="noreferrer"
                            className={contactLinkClass}
                        >
                            <MapPin className="text-primary h-4 w-4 shrink-0 mt-1" />
                            <span>BR-116, 6255 - Pradense<br />Vacaria - RS, 95208-350</span>
                        </a>
                        <a href="tel:+555432327422" className={contactLinkClass}>
                            <Phone className="text-primary h-4 w-4 shrink-0 mt-0.5" />
                            <span>(54) 3232-7422</span>
                        </a>
                        <a href="mailto:truckcenter@campagnaro.com.br" className={contactLinkClass}>
                            <Mail className="text-primary h-4 w-4 shrink-0 mt-0.5" />
                            <span className="break-all">truckcenter@campagnaro.com.br</span>
                        </a>
                    </address>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Clock className="text-primary h-4 w-4" />
                        <h2 className="text-sm font-bold text-white">Horário de funcionamento</h2>
                    </div>
                    <dl className="space-y-3 text-xs">
                        <div>
                            <dt className="font-semibold text-white">Segunda a sexta</dt>
                            <dd>07:30–12:00</dd>
                            <dd>13:30–18:00</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-white">Sábado</dt>
                            <dd>07:30–12:00</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-white">Domingo</dt>
                            <dd>Fechado</dd>
                        </div>
                    </dl>
                </div>

                <div>
                    <h2 className="text-sm font-bold text-white mb-4">Redes sociais</h2>
                    <div className="space-y-3 text-sm">
                        <a
                            href="https://www.instagram.com/campagnaroacessorios/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Instagram className="text-primary h-4 w-4" />
                            <span>Instagram</span>
                        </a>
                        <a
                            href="https://www.facebook.com/campagnaroacessorios"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Facebook className="text-primary h-4 w-4" />
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>

                <div className="flex items-start lg:justify-end">
                    <a
                        href="https://cronotacografo.rbmlq.gov.br/relacao-de-postos/rs"
                        target="_blank"
                        rel="noreferrer"
                        title="Consultar postos autorizados no Rio Grande do Sul"
                        className="flex lg:flex-col items-center gap-3 lg:gap-2 lg:text-center hover:text-white transition-colors"
                    >
                        <div className="w-14 h-14 rounded-lg overflow-hidden bg-white shrink-0">
                            <img
                                src={inmetroLogo}
                                alt="Logo do INMETRO"
                                loading="lazy"
                                width="56"
                                height="56"
                                className="w-full h-full object-cover scale-110"
                            />
                        </div>
                        <span className="font-bold text-xs text-white uppercase max-w-32 inline-flex items-center gap-1">
                            Posto Autorizado INMETRO <ExternalLink className="w-3 h-3 shrink-0" />
                        </span>
                    </a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 border-t border-white/10 py-5 text-center text-xs text-white/40">
                <p>&copy; {new Date().getFullYear()} Campagnaro Truck Center. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
