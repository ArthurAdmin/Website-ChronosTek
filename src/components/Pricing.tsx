'use client';

import { useState } from 'react';

export default function Pricing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const plans = [
    {
      name: 'Starter',
      originalPrice: 'R$ 89,90',
      price: 'R$ 59,90',
      period: '/mês',
      description: 'Ideal para autônomos e microempresas',
      features: [
        '1 funil de vendas',
        'Leads e negócios ilimitados',
        'Dashboard básico',
        'Campos padrão',
        '1 usuário',
        'Exportação CSV',
      ],
      highlight: false,
    },
    {
      name: 'Professional',
      originalPrice: 'R$ 199,90',
      price: 'R$ 149,90',
      period: '/mês',
      description: 'Ideal para PMEs em crescimento',
      features: [
        'Funis ilimitados',
        'Campos personalizados',
        'Dashboard configurável',
        'Relatórios completos',
        'Automações simples',
        'Integrações',
        'Até 5 usuários',
        'Suporte prioritário',
      ],
      highlight: false,
    },
    {
      name: 'Business',
      originalPrice: 'R$ 299,90',
      price: 'R$ 249,90',
      period: '/mês',
      description: 'Ideal para times estruturados',
      features: [
        'Tudo do plano PRO',
        'Identidade visual personalizada',
        'Automações avançadas',
        'Relatórios avançados por vendedor',
        'Receita prevista',
        'Usuários ilimitados',
        'Customização sob demanda',
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      originalPrice: '',
      price: 'Sob consulta',
      period: '',
      description: 'Sob consulta',
      features: [
        'SLA',
        'Analista dedicado',
        'Customizações profundas',
        'Implementação assistida',
        'Suporte 24/7',
      ],
      highlight: false,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <section id="pricing" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-cyber-darkSecondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Planos <span className="gradient-text">Flexíveis</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-cyber-textMuted max-w-3xl mx-auto">
            Escolha o plano ideal para as necessidades da sua empresa. 
            Todos os planos incluem suporte técnico especializado.
          </p>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`cyber-card card-hover p-8 flex flex-col ${
                plan.highlight ? 'border-cyber-blue/50 glow-blue' : ''
              }`}
            >
              {plan.highlight && (
                <div className="text-center mb-4">
                  <span className="bg-cyber-blue text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              
              {plan.name === 'Professional' && (
                <div className="text-center mb-4">
                  <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    ★ RECOMENDADO
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-cyber-textMuted mb-4">{plan.description}</p>
              
              <div className="mb-6">
                {plan.originalPrice && plan.originalPrice !== '' && (
                  <div className="mb-1">
                    <span className="text-lg text-cyber-textMuted line-through decoration-2 decoration-red-500/70">
                      {plan.originalPrice}
                    </span>
                  </div>
                )}
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-cyber-textMuted">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-cyber-text">
                    <svg className="w-5 h-5 text-cyber-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  onClick={() => window.open('https://wa.me/5521969946426', '_blank')}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.highlight
                      ? 'btn-primary btn-glow'
                      : 'btn-secondary'
                  }`}
                >
                  {plan.price === 'Sob consulta' ? 'Falar com Especialista' : 'Assinar Plano'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className={`cyber-card card-hover p-8 flex flex-col ${plan.highlight ? 'border-cyber-blue/50 glow-blue' : ''}`}>
                    {plan.highlight && (
                      <div className="text-center mb-4">
                        <span className="bg-cyber-blue text-white text-sm font-semibold px-3 py-1 rounded-full">
                          Mais Popular
                        </span>
                      </div>
                    )}
                    
                    {plan.name === 'Professional' && (
                      <div className="text-center mb-4">
                        <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                          ★ RECOMENDADO
                        </span>
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-cyber-textMuted mb-4">{plan.description}</p>
                    
                    <div className="mb-6">
                      {plan.originalPrice && plan.originalPrice !== '' && (
                        <div className="mb-1">
                          <span className="text-lg text-cyber-textMuted line-through decoration-2 decoration-red-500/70">
                            {plan.originalPrice}
                          </span>
                        </div>
                      )}
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-cyber-textMuted">{plan.period}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-cyber-text">
                          <svg className="w-5 h-5 text-cyber-blue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <button
                        onClick={() => window.open('https://wa.me/5521969946426', '_blank')}
                        className={`w-full py-3 rounded-lg font-semibold transition-all ${
                          plan.highlight
                            ? 'btn-primary btn-glow'
                            : 'btn-secondary'
                        }`}
                      >
                        {plan.price === 'Sob consulta' ? 'Falar com Especialista' : 'Assinar Plano'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 bg-cyber-dark/80 rounded-full flex items-center justify-center text-white hover:bg-cyber-blue/20 transition-colors touch-manipulation"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 bg-cyber-dark/80 rounded-full flex items-center justify-center text-white hover:bg-cyber-blue/20 transition-colors touch-manipulation"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-cyber-blue w-8' 
                    : 'bg-cyber-textMuted/30 hover:bg-cyber-textMuted/50'
                }`}
                aria-label={`Go to plan ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
