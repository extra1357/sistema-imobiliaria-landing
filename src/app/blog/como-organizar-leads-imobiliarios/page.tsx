import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Organizar Leads Imobiliários sem Perder Vendas [Guia 2026]',
  description: 'Aprenda a organizar leads imobiliários de forma profissional, aumente sua taxa de conversão em até 47% e pare de perder oportunidades no WhatsApp. Guia completo com framework prático.',
  keywords: [
    'organizar leads imobiliários',
    'gestão de leads imobiliária',
    'funil de vendas imobiliário',
    'crm para imobiliária',
    'follow-up imobiliário',
    'converter leads imobiliários'
  ],
  authors: [{ name: 'Equipe Sistema Imobiliária' }],
  openGraph: {
    title: 'Como Organizar Leads Imobiliários sem Perder Vendas | Guia 2026',
    description: 'Framework completo: aumente conversão em 47%. Pare de perder leads no WhatsApp.',
    url: 'https://sistema-imobiliaria-landing1.vercel.app/blog/como-organizar-leads-imobiliarios',
    type: 'article',
    publishedTime: '2026-02-14T00:00:00Z',
    authors: ['Equipe Sistema Imobiliária'],
    locale: 'pt_BR',
    siteName: 'Sistema Imobiliária',
    images: [{
      url: '/og-blog-leads.jpg',
      width: 1200,
      height: 630,
      alt: 'Como Organizar Leads Imobiliários - Guia Completo'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Como Organizar Leads Imobiliários [Guia 2026]',
    description: '+47% conversão | Framework prático | WhatsApp integrado',
    images: ['/og-blog-leads.jpg']
  },
  alternates: {
    canonical: 'https://sistema-imobiliaria-landing1.vercel.app/blog/como-organizar-leads-imobiliarios'
  },
  robots: {
    index: true,
    follow: true
  }
};

// Schema.org - Article
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Como Organizar Leads Imobiliários sem Perder Vendas",
  "description": "Guia completo sobre organização de leads imobiliários com framework que aumenta conversão em 47%",
  "image": "/og-blog-leads.jpg",
  "datePublished": "2026-02-14T00:00:00Z",
  "dateModified": "2026-02-14T00:00:00Z",
  "author": {
    "@type": "Organization",
    "name": "Sistema Imobiliária"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Sistema Imobiliária",
    "logo": {
      "@type": "ImageObject",
      "url": "/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://sistema-imobiliaria-landing1.vercel.app/blog/como-organizar-leads-imobiliarios"
  },
  "keywords": "leads imobiliários, crm imobiliário, gestão de leads, funil de vendas"
};

// Schema.org - HowTo
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Organizar Leads Imobiliários",
  "description": "Framework passo a passo para organizar leads imobiliários e aumentar conversão em 47%",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Capture TODOS os Leads",
      "text": "Registre todo contato que demonstra interesse, independente da origem (WhatsApp, ligação, portal)",
      "url": "https://sistema-imobiliaria-landing1.vercel.app/blog/como-organizar-leads-imobiliarios#passo-1"
    },
    {
      "@type": "HowToStep",
      "name": "Classifique por Temperatura",
      "text": "Separe leads quentes (prontos para fechar) de leads frios (pesquisando)",
      "url": "https://sistema-imobiliaria-landing1.vercel.app/blog/como-organizar-leads-imobiliarios#passo-2"
    }
  ],
  "totalTime": "PT30M"
};

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <article className="min-h-screen bg-white">
        <header className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-blue-200 mb-4" aria-label="Breadcrumb">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span>Gestão de Leads</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Como Organizar Leads Imobiliários sem Perder Vendas
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              O guia definitivo para transformar conversas do WhatsApp em vendas reais. 
              Aumente sua taxa de conversão em até 47%.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>Por Equipe Sistema Imobiliária</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <time dateTime="2026-02-14">14 de fevereiro, 2026</time>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <aside className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 rounded-r-lg" role="alert">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h2 className="font-bold text-gray-900 mb-2">Você está perdendo dinheiro agora</h2>
                <p className="text-gray-700">
                  Segundo pesquisa, <strong>68% dos leads imobiliários são perdidos por falta de follow-up organizado</strong>. 
                  Se você não tem um sistema claro de gestão de leads, está literalmente jogando dinheiro fora.
                </p>
              </div>
            </div>
          </aside>

          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="problema">
              O Problema: Leads Perdidos no Caos
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Você conhece essa situação? Um cliente manda mensagem no WhatsApp interessado em um apartamento. 
              Você responde. Ele some. Três semanas depois, ele volta. Você já nem lembra direito do que ele queria. 
              Ele percebe. Perde a confiança. Compra com outro corretor.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Esse cenário acontece <strong>todos os dias</strong> em imobiliárias pequenas. O problema não é falta de leads. 
              É falta de organização. Quando você mistura tudo no WhatsApp, sem registro, sem histórico, sem processo, 
              você está condenado a perder oportunidades.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4">Sinais de que você está perdendo leads:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1" aria-hidden="true">✗</span>
                  <span>Cliente retorna e você não lembra do contexto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1" aria-hidden="true">✗</span>
                  <span>Não sabe quantos leads você tem ativos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1" aria-hidden="true">✗</span>
                  <span>Perde follow-ups importantes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1" aria-hidden="true">✗</span>
                  <span>Não consegue medir sua taxa de conversão</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="solucao">
              A Solução: Funil Organizado de Leads
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A boa notícia? Você não precisa de um CRM complexo e caro. Você precisa de um <strong>processo claro</strong>. 
              Aqui está o framework que aumentou a conversão de nossos clientes em 47%:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4" id="passo-1">
              Passo 1: Capture TODOS os Leads
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Todo contato que demonstra interesse precisa ser registrado. Não importa se veio do WhatsApp, 
              ligação, visita ou portal. <strong>Tudo precisa entrar no sistema</strong>.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" aria-hidden="true" />
                Informações mínimas para capturar:
              </h4>
              <ul className="space-y-2 ml-7">
                <li>Nome completo</li>
                <li>Telefone (WhatsApp)</li>
                <li>Interesse (compra/aluguel)</li>
                <li>Tipo de imóvel</li>
                <li>Orçamento aproximado</li>
                <li>Origem do lead</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4" id="passo-2">
              Passo 2: Classifique por Temperatura
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Nem todo lead é igual. Alguns estão prontos para fechar. Outros só estão "dando uma olhada". 
              Classificar por temperatura te ajuda a priorizar.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6" id="conclusao">
              Conclusão
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Organizar leads não é luxo. É <strong>obrigação de qualquer imobiliária que quer crescer</strong>. 
              Você não precisa de um sistema complexo. Precisa de um sistema <strong>que funcione</strong>.
            </p>

          </div>

          <aside className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white mt-16">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Quer organizar seus leads de forma profissional?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Nosso sistema já vem com funil de vendas configurado, follow-ups automáticos e 
                integração com WhatsApp. Você só precisa começar a usar.
              </p>
              <Link 
                href="/sistema-para-imobiliaria" 
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
                aria-label="Conhecer o sistema para gestão de leads imobiliários"
              >
                Conhecer o Sistema
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
