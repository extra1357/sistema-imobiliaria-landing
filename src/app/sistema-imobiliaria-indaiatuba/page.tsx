import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Building2, Users, Smartphone, CheckCircle2, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sistema para Imobiliária em Indaiatuba | Gestão Completa + SEO Local',
  description: 'Sistema completo para imobiliárias de Indaiatuba: gestão de imóveis, CRM, site otimizado para Google. Profissionalize sua operação.',
  keywords: ['sistema para imobiliária indaiatuba', 'crm imobiliário indaiatuba', 'software imobiliário indaiatuba']
};

export default function SistemaImobiliariaIndaiatuba() {
  return (
    <main className="min-h-screen bg-white">
      
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30 mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Indaiatuba, São Paulo</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Sistema para Imobiliária em Indaiatuba
              </h1>
              
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Plataforma completa desenvolvida para imobiliárias de Indaiatuba: 
                gestão de imóveis, CRM profissional, site otimizado para Google e controle de comissões.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-100">250k+ habitantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-100">Alto crescimento</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5511999999999?text=Quero%20conhecer%20o%20sistema%20em%20Indaiatuba" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                  <Smartphone className="w-5 h-5" />
                  Falar com Especialista
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-20 h-20 mx-auto mb-4 text-blue-300" />
                    <h3 className="text-2xl font-bold mb-2">Indaiatuba, SP</h3>
                    <p className="text-blue-200">Cidade em expansão</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por que imobiliárias de Indaiatuba escolhem nosso sistema?
            </h2>
            <p className="text-xl text-gray-600">
              Indaiatuba é uma das cidades que mais cresce no interior de SP
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'SEO Local Otimizado',
                description: 'Apareça quando buscarem "imóveis em Indaiatuba", "apartamentos Indaiatuba", "casas à venda".'
              },
              {
                icon: Building2,
                title: 'Gestão Escalável',
                description: 'Sistema que cresce junto com o mercado aquecido de Indaiatuba.'
              },
              {
                icon: TrendingUp,
                title: 'Suporte Regional',
                description: 'Conhecemos a região de Campinas e o potencial de Indaiatuba.'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pronto para organizar sua imobiliária em Indaiatuba?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Aproveite o crescimento da cidade com um sistema profissional.
          </p>

          <a href="https://wa.me/5511999999999?text=Quero%20agendar%20demonstração%20em%20Indaiatuba" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all">
            <Smartphone className="w-6 h-6" />
            Agendar Demonstração
          </a>
        </div>
      </section>

      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Indaiatuba</span>
          </div>
        </div>
      </div>
    </main>
  );
}
