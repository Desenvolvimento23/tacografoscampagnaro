import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import gallery01 from '../assets/gallery/campagnaro-01.webp'
import gallery02 from '../assets/gallery/campagnaro-02.webp'
import gallery03 from '../assets/gallery/campagnaro-03.webp'
import gallery04 from '../assets/gallery/campagnaro-04.webp'
import gallery05 from '../assets/gallery/campagnaro-05.webp'
import gallery06 from '../assets/gallery/campagnaro-06.webp'
import gallery07 from '../assets/gallery/campagnaro-07.webp'
import gallery08 from '../assets/gallery/campagnaro-08.webp'

const galleryImages = [
    { src: gallery01, alt: 'Fachada da Campagnaro Truck Center em Vacaria' },
    { src: gallery02, alt: 'Vista aérea da estrutura da Campagnaro Truck Center' },
    { src: gallery03, alt: 'Vista aérea da Campagnaro Truck Center junto à BR-116' },
    { src: gallery04, alt: 'Pátio e oficinas da Campagnaro Truck Center' },
    { src: gallery05, alt: 'Entrada principal da Campagnaro Truck Center' },
    { src: gallery06, alt: 'Fachada da oficina Campagnaro Truck Center' },
    { src: gallery07, alt: 'Pátio de atendimento da Campagnaro Truck Center' },
    { src: gallery08, alt: 'Estrutura de atendimento da Campagnaro Truck Center' },
]

const sectionTitleClass = "text-2xl font-bold text-center text-secondary mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-0.5 after:bg-primary"

export const StructureGallery = () => {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const nextImage = new Image()
        nextImage.src = galleryImages[(currentImage + 1) % galleryImages.length].src

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return undefined
        }

        const timer = window.setTimeout(() => {
            setCurrentImage((current) => (current + 1) % galleryImages.length)
        }, 5000)

        return () => window.clearTimeout(timer)
    }, [currentImage])

    const showPrevious = () => {
        setCurrentImage((current) => (current - 1 + galleryImages.length) % galleryImages.length)
    }

    const showNext = () => {
        setCurrentImage((current) => (current + 1) % galleryImages.length)
    }

    return (
        <section className="py-12 md:py-14 bg-white border-t border-black/10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className={sectionTitleClass}>Conheça Nossa Estrutura</h2>

                <div
                    className="relative rounded-lg overflow-hidden border border-black/10 h-[300px] md:h-[420px] bg-black"
                    role="region"
                    aria-label="Galeria de fotos da Campagnaro Truck Center"
                    aria-live="polite"
                >
                    <img
                        src={galleryImages[currentImage].src}
                        alt={galleryImages[currentImage].alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                    />

                    <button
                        type="button"
                        onClick={showPrevious}
                        aria-label="Foto anterior"
                        title="Foto anterior"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 inline-flex items-center justify-center rounded-full bg-black/65 text-white hover:bg-primary transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        type="button"
                        onClick={showNext}
                        aria-label="Próxima foto"
                        title="Próxima foto"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 inline-flex items-center justify-center rounded-full bg-black/65 text-white hover:bg-primary transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-3 bg-black/55">
                        {galleryImages.map((image, index) => (
                            <button
                                key={image.src}
                                type="button"
                                onClick={() => setCurrentImage(index)}
                                aria-label={`Exibir foto ${index + 1}`}
                                aria-current={index === currentImage ? 'true' : undefined}
                                className={`w-2 h-2 rounded-full transition-colors ${index === currentImage ? 'bg-primary' : 'bg-white/70 hover:bg-white'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Location = () => {
    return (
        <section id="localizacao" className="py-12 md:py-14 bg-white border-t border-black/10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className={sectionTitleClass}>Onde Estamos</h2>

                <div className="rounded-lg overflow-hidden border border-black/10 h-[300px] md:h-[420px]">
                    <iframe
                        title="Localização da Campagnaro Truck Center em Vacaria"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5571596226796!2d-50.9438441!3d-28.522968400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951e439bd08a155d%3A0xeeafe97199d37eb7!2sCampagnaro%20Truck%20Center!5e0!3m2!1spt-BR!2sbr!4v1765371720189!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}