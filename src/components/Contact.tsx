'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess(false);
    
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError(data.message || 'Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (err) {
      setError('Erro ao enviar mensagem. Tente novamente.');
      console.error('Erro ao enviar email:', err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cyber-darkSecondary">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-cyber-textMuted max-w-2xl md:max-w-3xl mx-auto">
            Pronto para transformar seu negócio? Fale com nossos especialistas e descubra 
            como acelerar seu crescimento com previsibilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Informações de Contato</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-cyber-blue/10 flex items-center justify-center text-cyber-blue mr-3 sm:mr-4 flex-shrink-0 touch-manipulation">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-cyber-textMuted text-sm sm:text-base">chronostecch@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-cyber-blue/10 flex items-center justify-center text-cyber-blue mr-3 sm:mr-4 flex-shrink-0 touch-manipulation">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Telefone</h4>
                  <p className="text-cyber-textMuted text-sm sm:text-base">+55 (21)96994-6426</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-cyber-blue/10 flex items-center justify-center text-cyber-blue mr-3 sm:mr-4 flex-shrink-0 touch-manipulation">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Atendimento</h4>
                  <p className="text-cyber-textMuted text-sm sm:text-base">Atendimento Nacional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="cyber-card p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Envie uma Mensagem</h3>
<form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cyber-text mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 sm:px-4 py-3 sm:py-3 min-h-[48px] sm:min-h-[auto] bg-cyber-dark border border-cyber-border rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors text-base"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cyber-text mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-3 sm:py-3 min-h-[48px] sm:min-h-[auto] bg-cyber-dark border border-cyber-border rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors text-base"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-cyber-text mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 sm:px-4 py-3 sm:py-3 min-h-[48px] sm:min-h-[auto] bg-cyber-dark border border-cyber-border rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors text-base"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cyber-text mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-3 sm:py-3 min-h-[120px] sm:min-h-[auto] bg-cyber-dark border border-cyber-border rounded-lg text-white focus:outline-none focus:border-cyber-blue transition-colors resize-none text-base"
                  placeholder="Como podemos ajudar?"
                />
              </div>
{success && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
              
              {error && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary btn-glow py-4 min-h-[56px] text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
