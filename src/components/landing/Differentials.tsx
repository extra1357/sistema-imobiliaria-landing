'use client';

import { Target, Shield, Zap, Heart } from 'lucide-react';

export default function Differentials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Desenvolvido por quem{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              atua no mercado imobiliário
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Não é um software genérico adaptado. É uma estrutura pensada{' '}
            <strong className="text-gray-900">especificamente para a realidade de imobiliárias pequenas</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Target className="w-20 h-20 mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">Foco Total em Imobiliárias Pequenas</h3>
                  <p className="text-blue-100 text-lg">
                    Sabemos exatamente os desafios, limitações e oportunidades do seu segmento.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border-2 border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Agilidade</p>
                  <p className="text-xl font-bold text-gray-900">10x mais rápido</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Shield,
                title: 'Sem complexidade desnecessária',
                description: 'Nada de funcionalidades que você nunca vai usar. Apenas o essencial que gera resultado.'
              },
              {
                icon: Heart,
                title: 'Feito para ser usado',
                description: 'Interface intuitiva. Seu time aprende em minutos, não em semanas de treinamento.'
              },
              {
                icon: Zap,
                title: 'Implementação que funciona',
                description: 'Implantação assistida em 7 dias. Suporte direto via WhatsApp sempre que precisar.'
              },
              {
                icon: Target,
                title: 'Preço justo',
                description: 'Valor acessível pensado para quem está crescendo. Sem taxas escondidas ou surpresas.'
              }
            ].map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-100">
          <p className="text-2xl font-bold text-gray-900 mb-4">
            Feito por quem conhece. Testado por quem usa. Aprovado por quem cresce.
          </p>
          <p className="text-lg text-gray-600">
            Mais de 47 imobiliárias já organizaram suas operações e aumentaram seus resultados.
          </p>
        </div>
      </div>
    </section>
  );
}
