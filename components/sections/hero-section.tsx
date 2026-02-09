"use client"
import Image from "next/image"

export function HeroSection() {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-brand-beige">
      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-brand-brown leading-tight text-balance mb-6">
              Você não precisa ser a Doutora Blogueira para agendar pacientes todos os dias na internet.
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-brand-brown/80 leading-relaxed mb-8 max-w-2xl lg:max-w-none">
              Tudo o que você precisa fazer é postar os vídeos certos, com a estratégia que converte.
            </p>
            
            <button
              onClick={scrollToOffer}
              className="bg-brand-brown text-brand-cream hover:bg-brand-brown/90 font-sans text-lg px-8 py-6 rounded-lg"
              type="button"
            >
              Quero Meu Agente VEP
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[26rem] lg:w-full lg:h-auto lg:max-w-lg mx-auto">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Thayná - Agente VEP"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-terracotta/20 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-terracotta/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}