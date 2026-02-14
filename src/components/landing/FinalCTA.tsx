'use client';

import { Smartphone, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Decisão estratégica</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Você tem duas opções agora
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-12 text-left">
            
            <div className="bg-white/5 backdrop-blur-sm border-2 border-red-400/30 rounded-2xl p-8">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">Continuar como está</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Leads continuam se perdendo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Desorganização persiste</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Dependência total de portais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Crescimento limitado</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-green-400/50 rounded-2xl p-8 relative">
              <div className="absolute -top-3 -right-3 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                Recomendado
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-300">Organizar e crescer</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Todos os leads registrados</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Operação profissional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Leads próprios crescendo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Crescimento previsível</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-2xl lg:text-3xl text-blue-100 font-medium mb-8">
            A escolha é sua. Mas lembre-se:{' '}
            <strong className="text-white">cada dia de desorganização é uma oportunidade perdida.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="https://wa.me/5511976661297?text=Quero%20agendar%20demonstração" className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200">
              <Smartphone className="w-6 h-6" />
              Agendar Demonstração Estratégica
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>Demonstração gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>Resposta em minutos</span>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700/30 pt-12 mt-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">47+</p>
              <p className="text-blue-200">Imobiliárias organizadas</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">4.8★</p>
              <p className="text-blue-200">Avaliação média</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">7 dias</p>
              <p className="text-blue-200">Para estar operando</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-blue-100">
          <p className="text-lg">
            Feito com dedicação para imobiliárias que querem crescer{' '}
            <span className="text-white font-semibold">🏗️</span>
          </p>
        </div>
      </div>
    </section>
  );
}
