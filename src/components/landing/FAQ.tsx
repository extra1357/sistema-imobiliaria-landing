'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quanto tempo leva para implementar?',
    answer: 'A implementação completa leva em média 7 dias. Isso inclui: configuração do sistema, migração de dados (se necessário), personalização do seu site, treinamento da equipe e ajustes finais. Você conta com suporte direto durante todo o processo.'
  },
  {
    question: 'Preciso ter conhecimento técnico?',
    answer: 'Não. O sistema foi desenvolvido para ser intuitivo e fácil de usar. Qualquer pessoa que usa WhatsApp e navegador consegue operar sem dificuldade. Além disso, oferecemos treinamento completo para você e sua equipe.'
  },
  {
    question: 'Como funciona o suporte?',
    answer: 'Suporte direto via WhatsApp em horário comercial (9h às 18h, seg-sex). Respondemos em minutos, não em dias. Para questões técnicas urgentes, temos canal prioritário. Você nunca fica desamparado.'
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim, sem qualquer burocracia. Não temos contrato de fidelidade. Se decidir cancelar, seus dados ficam disponíveis por 30 dias para exportação. Transparência total.'
  },
  {
    question: 'Meus dados ficam seguros?',
    answer: 'Sim. Utilizamos certificado SSL, criptografia de dados, backup diário automático e conformidade total com a LGPD. Seus dados são seus e estão protegidos.'
  },
  {
    question: 'O site realmente aparece no Google?',
    answer: 'Sim. O site já vem com estrutura de SEO otimizada: schema markup, meta tags, sitemap, URLs amigáveis e velocidade de carregamento rápida. Complementando com conteúdo local (seu blog), os resultados aparecem em 30-60 dias.'
  },
  {
    question: 'Funciona para qualquer região?',
    answer: 'Sim. O sistema funciona para imobiliárias de qualquer cidade do Brasil. O SEO local é configurado especificamente para sua região, aumentando suas chances de aparecer para clientes da sua área.'
  },
  {
    question: 'Quantos usuários posso cadastrar?',
    answer: 'No plano padrão, você pode cadastrar até 10 usuários (corretores e equipe administrativa). Se precisar de mais, temos planos personalizados.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Perguntas frequentes
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dúvidas? Temos as respostas.
          </h2>
          <p className="text-xl text-gray-600">
            Tudo que você precisa saber antes de tomar sua decisão
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden hover:border-blue-200 transition-colors">
                <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-bold text-lg text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-100">
          <p className="text-lg text-gray-700 mb-4">
            Não encontrou sua resposta?
          </p>
          <a href="https://wa.me/5511976661297?text=Tenho%20uma%20dúvida" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
