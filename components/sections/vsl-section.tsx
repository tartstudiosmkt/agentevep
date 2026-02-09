export function VSLSection() {
  return (
    <section className="bg-brand-beige py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="font-sans text-lg md:text-xl text-brand-brown/80 max-w-3xl mx-auto">
            Neste vídeo de 5 minutos, eu mostro a tela do meu celular criando um roteiro estratégico em menos de 30 segundos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-brand-terracotta/30 shadow-xl bg-brand-brown/5">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button
                type="button"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-brown flex items-center justify-center hover:bg-brand-brown/90 transition-colors shadow-lg group"
                aria-label="Reproduzir vídeo de vendas"
              >
                <span className="text-brand-cream text-3xl md:text-4xl ml-1 group-hover:scale-110 transition-transform">
                  ▶
                </span>
              </button>

              <p className="mt-6 font-sans text-brand-brown/60 text-sm md:text-base text-center px-4">
                [SEU VÍDEO DE VENDAS (VSL) SERÁ INSERIDO AQUI]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
