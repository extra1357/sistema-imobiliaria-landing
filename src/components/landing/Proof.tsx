'use client';

import { Quote, Star, Building2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'Diretor',
    company: 'Mendes Imóveis',
    location: 'Osasco, SP',
    photo: 'CM',
    rating: 5,
    text: 'Em 3 meses dobramos nossos leads próprios. Não dependemos mais só dos portais. O sistema organizou tudo que estava caótico.',
    metric: '+118% leads próprios',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Mariana Silva',
    role: 'Proprietária',
    company: 'Silva & Associados',
    location: 'Indaiatuba, SP',
    photo: 'MS',
    rating: 5,
    text: 'Finalmente tenho controle real das comissões. Zero erro, zero discussão. A equipe adora a transparência.',
    metric: 'Zero erros em 6 meses',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'Roberto Alves',
    role: 'Gerente Comercial',
    company: 'Alves Negócios Imobiliários',
    location: 'Salto, SP',
    photo: 'RA',
    rating: 5,
    text: 'O atendimento é diferenciado. Quando preciso, resposta em minutos. Implantação foi rápida e sem estresse.',
    metric: 'Implantado em 5 dias',
    color: 'from-purple-500 to-purple-600'
  }
];

export default function Proof() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Sistema comprovado
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Já está funcionando.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Agora é sua vez.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-100">
              
              <Quote className="w-10 h-10 text-blue-200 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-lg mb-6">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-gray-900">
                  {testimonial.metric}
                </span>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold`}>
                  {testimonial.photo}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Tecnologia de ponta</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Sistema já em funcionamento
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Não é promessa. É realidade. Arquitetura moderna, performance otimizada, SEO estruturado. 
              <strong className="text-white"> Pronto para usar hoje.</strong>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '<2s', label: 'Tempo de carga' },
            { value: '24/7', label: 'Disponibilidade' },
            { value: 'LGPD', label: 'Compliance' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
