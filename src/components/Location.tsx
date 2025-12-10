export const Location = () => {
    return (
        <section className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-primary mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-accent after:rounded">
                    Onde Estamos
                </h2>

                <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                    <iframe
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
