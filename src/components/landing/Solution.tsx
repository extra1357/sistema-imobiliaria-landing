'use client';

import { Building2, Users, DollarSign, Globe, MessageSquare, BarChart3, CheckCircle2, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Gestão completa de imóveis',
    description: 'Cadastro rápido, fotos ilimitadas, localização no mapa, compartilhamento fácil.',
    highlight: 'Organize tudo'
  },
  {
    icon: Users,
    title: 'Funil profissional de leads',
    description: 'Acompanhe cada contato do primeiro interesse até o fechamento. Nada se perde.',
    highlight: 'Controle total'
  },
  {
    icon: DollarSign,
    title: 'Controle automático de comissões',
    description: 'Cálculo preciso, histórico completo, relatórios prontos. Sem erros, sem conflitos.',
    highlight: 'Transparência'
  },
  {
    icon: Globe,
    title: 'Site com SEO local integrado',
    description: 'Seu site aparece no Google da sua região. Leads diretos, sem intermediários.',
    highlight: 'Presença digital'
  },
  {
    icon: MessageSquare,
    title: 'Integração direta com WhatsApp',
    description: 'Atenda pelo WhatsApp, mas registre tudo no sistema. Histórico sempre acessível.',
    highlight: 'Praticidade'
  },
  {
    icon: BarChart3,
    title: 'Relatórios estratégicos',
    description: 'Veja o que está funcionando, onde estão os gargalos, tome decisões com dados.',
    highlight: 'Inteligência'
  }
];

export default function Solution() {
  return (
    <section id="solucao" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">A solução completa</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nosso sistema para imobiliárias pequenas oferece
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Não é apenas um software. É a{' '}
            <strong className="text-gray-900">estrutura completa</strong> que sua imobiliária precisa para crescer de forma organizada e previsível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4">
                    {feature.highlight}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-2 mt-4 text-sm text-green-600 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    Incluído
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 lg:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="relative max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Tudo em uma única plataforma
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Pare de usar 5 ferramentas diferentes. Tenha gestão, CRM, site e controles em um só lugar. 
              <strong className="text-white"> Simplicidade e poder juntos.</strong>
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Sem instalação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Acesso de qualquer lugar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Backup automático</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Atualizações contínuas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
