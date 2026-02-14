'use client';

import { TrendingUp, Award, Users, Target, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Organiza sua operação',
    before: 'Informação espalhada, processos confusos, retrabalho constante',
    after: 'Tudo centralizado, fluxos claros, time alinhado',
    metric: '+64% eficiência operacional'
  },
  {
    icon: Award,
    title: 'Profissionaliza sua marca',
    before: 'Imagem amadora, desconfiança do cliente, dificuldade em competir',
    after: 'Credibilidade, confiança, diferenciação no mercado',
    metric: '+45% na percepção de valor'
  },
  {
    icon: Users,
    title: 'Gera mais oportunidades',
    before: 'Dependente de portais, leads caros, baixa conversão',
    after: 'Leads próprios, custo menor, conversão maior',
    metric: '+127% em leads qualificados'
  },
  {
    icon: TrendingUp,
    title: 'Reduz dependência de portais',
    before: 'Refém de plataformas, sem controle, margens apertadas',
    after: 'Autonomia comercial, marca própria, margem melhor',
    metric: '-58% custo de aquisição'
  },
  {
    icon: Clock,
    title: 'Aumenta previsibilidade',
    before: 'Vendas imprevisíveis, gestão no escuro, decisões sem base',
    after: 'Dados claros, tendências visíveis, planejamento possível',
    metric: '+82% previsibilidade de vendas'
  },
  {
    icon: Shield,
    title: 'Diminui estresse operacional',
    before: 'Apagar incêndios, esquecimentos, conflitos internos',
    after: 'Processos automatizados, histórico acessível, transparência',
    metric: '+91% satisfação da equipe'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Resultados comprovados
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Com o sistema você não só organiza.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Você cresce.
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Veja a transformação que nossos clientes experimentaram
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200">
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 pt-2">
                    {benefit.title}
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      <strong className="text-gray-700">Antes:</strong> {benefit.before}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      <strong>Agora:</strong> {benefit.after}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-bold text-gray-900">
                      {benefit.metric}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            <div className="text-center lg:text-left">
              <p className="text-5xl lg:text-6xl font-bold mb-2">47+</p>
              <p className="text-blue-100 text-lg">Imobiliárias usando</p>
            </div>

            <div className="text-center lg:text-left lg:border-l lg:border-r border-blue-400/30 lg:px-8">
              <p className="text-5xl lg:text-6xl font-bold mb-2">3.2K+</p>
              <p className="text-blue-100 text-lg">Imóveis gerenciados</p>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-5xl lg:text-6xl font-bold mb-2">4.8★</p>
              <p className="text-blue-100 text-lg">Avaliação média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
