'use client';

import { Check, Smartphone, Calendar, Zap } from 'lucide-react';

const includedFeatures = [
  'Gestão completa de imóveis',
  'CRM e funil de leads',
  'Controle de comissões',
  'Site otimizado para Google',
  'Integração com WhatsApp',
  'Relatórios estratégicos',
  'Implantação assistida',
  'Treinamento completo',
  'Suporte direto via WhatsApp',
  'Atualizações contínuas',
  'Backup automático',
  'SSL e segurança'
];

const bonuses = [
  {
    title: 'Consultoria de SEO Local',
    value: 'R$ 997',
    description: 'Configuração inicial para rankear na sua região'
  },
  {
    title: 'Templates de E-mail Marketing',
    value: 'R$ 497',
    description: 'Sequências prontas para nutrir leads'
  },
  {
    title: 'Guia de Captação Digital',
    value: 'R$ 297',
    description: 'Estratégias para captar mais imóveis online'
  }
];

export default function Pricing() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Investimento acessível
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Plano pensado para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              imobiliárias em crescimento
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Preço justo. Sem taxas escondidas. Sem pegadinhas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border-2 border-blue-200 overflow-hidden">
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 lg:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
              </div>

              <div className="relative">
                <h3 className="text-3xl font-bold mb-4">Plano Completo</h3>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-2xl opacity-75 line-through">R$ 497</span>
                  <span className="text-6xl lg:text-7xl font-bold">R$ 297</span>
                  <span className="text-xl opacity-90">/mês</span>
                </div>
                <p className="text-blue-100 text-lg">
                  Sem contrato de fidelidade • Cancele quando quiser
                </p>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              
              <div className="mb-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Tudo incluído:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {includedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10 p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-200">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-yellow-600" />
                  <h4 className="text-xl font-bold text-gray-900">Bônus Exclusivos (R$ 1.791 em valor)</h4>
                </div>
                <div className="space-y-3">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {bonus.title} <span className="text-sm text-green-600">(Valor: {bonus.value})</span>
                        </p>
                        <p className="text-sm text-gray-600">{bonus.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <a href="https://wa.me/5511976661297?text=Quero%20contratar%20o%20sistema" className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                  <Smartphone className="w-6 h-6" />
                  Quero Contratar Agora
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Via WhatsApp</span>
                </a>

                <a href="#" className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-5 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200">
                  <Calendar className="w-5 h-5" />
                  Ou Agendar Demonstração
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid sm:grid-cols-3 gap-6 text-center text-sm">
                  <div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold text-gray-900">Garantia 7 dias</p>
                    <p className="text-gray-600">Não gostou? Devolvemos</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold text-gray-900">Implantação em 7 dias</p>
                    <p className="text-gray-600">Suporte total</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold text-gray-900">Sem fidelidade</p>
                    <p className="text-gray-600">Cancele quando quiser</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Bônus exclusivos válidos por tempo limitado
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
