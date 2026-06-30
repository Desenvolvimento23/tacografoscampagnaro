import { Header } from '@components/Header'
import { Hero } from '@components/Hero'
import { WhyAferir } from '@components/WhyAferir'
import { Process } from '@components/Process'
import { Location } from '@components/Location'
import { Footer } from '@components/Footer'

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <WhyAferir />
                <Process />
                <Location />

                {/* Final CTA Section */}
                <section className="py-12 md:py-14 text-center border-t border-black/10">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-xl md:text-[22px] text-secondary font-bold mb-3">
                            Não arrisque. Mantenha seu Caminhão na Estrada e dentro da Lei.
                        </h2>
                        <p className="text-sm text-secondary/70 mb-6 max-w-4xl mx-auto">
                            Fale com nossa equipe e garanta que a documentação e o equipamento do seu veículo estejam em dia. Não espere a fiscalização!
                        </p>
                        <a
                            href="https://wa.me/555432327422"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold py-3 px-5 rounded-md transition-colors"
                        >
                            Agende pelo WhatsApp (54 3232-7422)
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default App
