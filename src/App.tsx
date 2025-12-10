import { Header } from '@components/Header'
import { Hero } from '@components/Hero'
import { WhyAferir } from '@components/WhyAferir'
import { Process } from '@components/Process'
import { Differentials } from '@components/Differentials'
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
                <Differentials />
                <Location />

                {/* Final CTA Section */}
                <section className="py-16 text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl text-primary font-bold mb-4">
                            Não arrisque. Mantenha seu Caminhão na Estrada e dentro da Lei.
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Fale com nossa equipe e garanta que a documentação e o equipamento do seu veículo estejam em dia. Não espere a fiscalização!
                        </p>
                        <a
                            href="https://wa.me/555432327422"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-lg transition-colors"
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
