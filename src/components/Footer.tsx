import { MapPin, Phone, Mail, Shield } from 'lucide-react'

export const Footer = () => {
    return (
        <footer id="contato" className="bg-gray-900 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <h4 className="text-xl font-bold text-black mb-4">Campagnaro Truck Center</h4>
                    <div className="space-y-4">
                        <p className="flex items-center gap-3">
                            <MapPin className="text-accent h-5 w-5" />
                            <span>BR-116, 6255 - Pradense, Vacaria - RS, 95208-350</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <Phone className="text-accent h-5 w-5" />
                            <span>(54) 3232-7422</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <Mail className="text-accent h-5 w-5" />
                            <span>truckcenter@campagnaro.com.br</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <div className="text-center">
                        <Shield className="h-16 w-16 text-yellow-500 mx-auto mb-2" />
                        <span className="font-bold text-white uppercase tracking-wider">Posto Autorizado INMETRO</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm opacity-50">
                <p>&copy; {new Date().getFullYear()} Campagnaro Truck Center. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
