import { MapPin, Phone, Mail, Shield } from 'lucide-react'

export const Footer = () => {
    return (
        <footer id="contato" className="bg-secondary text-white/75 py-10">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">

                <div>
                    <h4 className="text-lg font-bold text-white mb-3">Campagnaro Truck Center</h4>
                    <div className="space-y-2 text-sm">
                        <p className="flex items-center gap-2">
                            <MapPin className="text-primary h-4 w-4 shrink-0" />
                            <span>BR-116, 6255 - Pradense, Vacaria - RS, 95208-350</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone className="text-primary h-4 w-4 shrink-0" />
                            <span>(54) 3232-7422</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail className="text-primary h-4 w-4 shrink-0" />
                            <span>truckcenter@campagnaro.com.br</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <div className="text-center">
                        <Shield className="h-10 w-10 text-primary mx-auto mb-2" />
                        <span className="font-bold text-sm text-white uppercase">Posto Autorizado INMETRO</span>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 border-t border-white/10 mt-8 pt-5 text-center text-xs opacity-50">
                <p>&copy; {new Date().getFullYear()} Campagnaro Truck Center. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
