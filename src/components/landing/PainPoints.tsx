'use client';

import { AlertCircle, TrendingDown, MessageCircleOff, FileX } from 'lucide-react';

const painPoints = [
  {
    icon: MessageCircleOff,
    title: 'Leads perdidos no WhatsApp',
    description: 'Conversas misturadas, sem organização. Cliente interessado some e você nem lembra.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: FileX,
    title: 'Comissões sem controle',
    description: 'Planilhas confusas, erros de cálculo, corretores reclamando. Dor de cabeça todo mês.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: TrendingDown,
    title: 'Dependência total de portais',
    description: 'Pagando caro e ainda assim competindo com 50 imobiliárias pelo mesmo cliente.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: AlertCircle,
    title: 'Site que não gera contatos',
    description: 'Bonito, mas parado. Sem posicionamento no Google, sem leads próprios.',
    color: 'from-purple-500 to-purple-600'
  }
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
            A realidade de 90% das imobiliárias pequenas
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Você sente que sua imobiliária...
          </h2>
          <p className="text-xl text-gray-600">
            Se você se identificou com algum desses problemas, o problema não é falta de imóveis.{' '}
            <strong className="text-gray-900">É falta de organização estratégica.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {painPoints.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-red-200">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${pain.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {pain.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {pain.description}
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-sm text-red-600 font-semibold">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    Problema crítico
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                A boa notícia?
              </h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                Todos esses problemas podem ser resolvidos com{' '}
                <strong className="text-white">organização e tecnologia certa</strong>.
                Não com mais trabalho. Com mais estrutura.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#solucao" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl">
                Ver a solução
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
