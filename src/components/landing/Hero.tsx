'use client';

import { useState } from 'react';
import { Building2, TrendingUp, Users, Smartphone } from 'lucide-react';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Usado por 47+ imobiliárias</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Sistema para Imobiliária Pequena:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Organize, Gere Leads e Cresça
              </span>{' '}
              com Estrutura
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed">
              Plataforma completa com gestão de imóveis, controle de leads, comissões e site otimizado para Google. 
              <strong className="text-white"> Tudo em um só lugar.</strong>
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-blue-200"><strong className="text-white">4.8/5</strong> • 47 avaliações</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/5511976661297?text=Quero%20agendar%20demonstração" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                <Smartphone className="w-5 h-5" />
                Agendar Demonstração
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Grátis</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="bg-blue-950/50 rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-blue-700/30">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-900/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <TrendingUp className="w-3 h-3 text-green-400" />
                    </div>
                    <p className="text-2xl font-bold">47</p>
                    <p className="text-xs text-blue-300">Leads ativos</p>
                  </div>
                  <div className="bg-blue-900/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      <TrendingUp className="w-3 h-3 text-green-400" />
                    </div>
                    <p className="text-2xl font-bold">124</p>
                    <p className="text-xs text-blue-300">Imóveis</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-blue-900/30 rounded-lg p-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600" />
                      <div className="flex-1">
                        <div className="h-2 bg-blue-700/50 rounded w-3/4 mb-2" />
                        <div className="h-2 bg-blue-700/30 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">+32% vendas</div>
            <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">100% cloud</div>
          </div>
        </div>
      </div>

      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setIsVideoPlaying(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsVideoPlaying(false)} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors">✕</button>
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
    </section>
  );
}
