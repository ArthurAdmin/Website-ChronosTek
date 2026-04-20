'use client';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-24 lg:pt-28 overflow-visible">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-darkSecondary to-cyber-dark" />
      <div className="absolute inset-0 bg-glow-pattern" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-2.5 py-1 lg:px-4 lg:py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 mb-16 xl:mb-20">
          <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse mr-2"></span>
          <span className="text-cyber-blue text-xs lg:text-sm font-medium whitespace-nowrap">Plataforma de Monitoramento e Gestão para Empresas</span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Crescimento Estruturado
          <span className="block gradient-text">e Previsível</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyber-textMuted max-w-3xl mx-auto mb-4 sm:mb-6">
          A ChronosTek ajuda sua empresa a crescer com previsibilidade, reduzir cancelamentos e aumentar a receita recorrente.
          Combinamos tecnologia, dados e inteligência estratégica para garantir estabilidade, escalabilidade 
          e evolução contínua para o seu negócio.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button 
            onClick={() => window.open('https://wa.me/5521969946426?text=Ola,%20gostaria%20de%20comecar', '_blank')}
            className="btn-primary btn-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto inline-block text-center"
          >
            Começar Agora
          </button>
        </div>

      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-cyber-dark to-transparent" />
    </section>
  );
}
