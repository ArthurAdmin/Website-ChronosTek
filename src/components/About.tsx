'use client';

import { useState } from 'react';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const benefits = [
    {
      title: 'Crescimento',
      subtitle: 'Receita Estável',
    },
    {
      title: 'Retenção',
      subtitle: 'Clientes Fidelizados',
    },
    {
      title: 'Previsão',
      subtitle: 'Planejamento Estratégico',
    },
    {
      title: 'Escala',
      subtitle: 'Crescimento Sustentável',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              Sobre a <span className="gradient-text">ChronosTek</span>
            </h2>
            <p className="text-base sm:text-lg text-cyber-textMuted mb-4 sm:mb-6">
              A Chronos Tek é uma plataforma SaaS que ajuda sua empresa a crescer com previsibilidade,
              reduzir cancelamentos e aumentar a receita recorrente.
            </p>
            <p className="text-base sm:text-lg text-cyber-textMuted mb-6 sm:mb-8">
              Transformamos dados em decisões estratégicas. Nossa plataforma monitora as métricas mais 
              importantes do seu negócio, identifica riscos antes que eles se tornem problemas e ajuda 
              você a construir uma base de clientes mais sólida e lucrativa.
            </p>

            {/* Benefits - Mobile Carousel */}
            <div className="md:hidden">
              <div className="relative overflow-hidden px-2">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-1"
                    >
                      <div className="cyber-card p-4 sm:p-6 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-cyber-blue mb-2">{benefit.title}</div>
                        <div className="text-cyber-textMuted">{benefit.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-cyber-dark/80 rounded-full flex items-center justify-center text-white hover:bg-cyber-blue/20 transition-colors touch-manipulation"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-cyber-dark/80 rounded-full flex items-center justify-center text-white hover:bg-cyber-blue/20 transition-colors touch-manipulation"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index 
                        ? 'bg-cyber-blue w-6' 
                        : 'bg-cyber-textMuted/30 hover:bg-cyber-textMuted/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Benefits - Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 xl:gap-8 gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-cyber-blue mb-2">{benefit.title}</div>
                  <div className="text-cyber-textMuted">{benefit.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="cyber-card p-6 sm:p-8 glow-border">
              <div className="flex flex-col items-center justify-center mb-3 sm:mb-4">
                <img 
                  src="/ChronosTekLogo.png" 
                  alt="ChronosTek Logo" 
                  className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-3 sm:mb-4">Nossa Missão</h3>
              <p className="text-cyber-textMuted text-center mb-4 sm:mb-6">
                Capacitar empresas a alcançar crescimento sustentável através de inteligência 
                de dados e estratégias de retenção comprovadas.
              </p>
              <div className="flex justify-center gap-3 sm:gap-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-cyber-blue"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-cyber-blue/50"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-cyber-blue/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
