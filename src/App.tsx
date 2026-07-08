import { Header } from '@components/Header'
import { Hero } from '@components/Hero'
import { Process } from '@components/Process'
import { Location, StructureGallery } from '@components/Location'
import { Footer } from '@components/Footer'
import { FloatingWhatsApp } from '@components/FloatingWhatsApp'
import { FAQ } from '@components/FAQ'

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Process />
                <StructureGallery />
                <FAQ />
                <Location />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    )
}

export default App