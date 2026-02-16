import { Metadata } from 'next';
import Hero from '@/components/landing/Hero';
import PainPoints from '@/components/landing/PainPoints';
import Solution from '@/components/landing/Solution';
import Differentials from '@/components/landing/Differentials';
import Benefits from '@/components/landing/Benefits';
import Proof from '@/components/landing/Proof';
import Pricing from '@/components/landing/Pricing';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';

// ✅ META TAGS COMPLETAS
export const metadata: Metadata = {
  title: 'Sistema para Imobiliária Pequena | CRM + Gestão + Site | R$ 297/mês',
  description: 'Plataforma completa para imobiliárias: CRM, gestão de imóveis, controle de comissões e site com SEO. 47+ clientes, 4.8★, implantação em 7 dias. Teste grátis 7 dias.',
  keywords: [
    'sistema para imobiliária pequena',
    'crm imobiliário',
    'software para imobiliária',
    'gestão de leads imobiliários',
    'controle de comissões imobiliária',
    'site para imobiliária com seo'
  ],
  authors: [{ name: 'Sistema Imobiliária' }],
  openGraph: {
    title: 'Sistema para Imobiliária Pequena | Organize e Cresça',
    description: 'CRM + Gestão + Site otimizado. 47+ clientes, nota 4.8★. Implantação em 7 dias. R$ 297/mês sem fidelidade.',
    url: 'https://sistema-imobiliaria-landing1.vercel.app/sistema-para-imobiliaria',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Sistema Imobiliária',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Sistema para Imobiliária Pequena - Dashboard'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistema para Imobiliária | R$ 297/mês',
    description: 'CRM + Gestão + Site | 47+ clientes | 4.8★',
    images: ['/og-image.jpg']
  },
  alternates: {
    canonical: 'https://sistema-imobiliaria-landing1.vercel.app/sistema-para-imobiliaria'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

// ✅ SCHEMA.ORG - SoftwareApplication
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Sistema para Imobiliária Pequena",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Cloud",
  "description": "Plataforma completa de gestão para imobiliárias pequenas: CRM, gestão de imóveis, controle de comissões e site otimizado.",
  "offers": {
    "@type": "Offer",
    "price": "297.00",
    "priceCurrency": "BRL",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://sistema-imobiliaria-landing1.vercel.app/sistema-para-imobiliaria"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "provider": {
    "@type": "Organization",
    "name": "Sistema Imobiliária",
    "url": "https://sistema-imobiliaria-landing1.vercel.app"
  }
};

// ✅ SCHEMA.ORG - Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sistema Imobiliária",
  "url": "https://sistema-imobiliaria-landing1.vercel.app",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-97666-1297",
    "contactType": "Customer Service",
    "availableLanguage": "Portuguese"
  }
};

// ✅ SCHEMA.ORG - Reviews
const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Sistema para Imobiliária Pequena",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "47"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Carlos Mendes"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Em 3 meses dobramos nossos leads próprios. Não dependemos mais só dos portais."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Mariana Silva"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Finalmente tenho controle real das comissões. Zero erro, zero discussão."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Roberto Alves"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "O atendimento é diferenciado. Implantação foi rápida e sem estresse."
    }
  ]
};

export default function SistemaParaImobiliaria() {
  return (
    <>
      {/* ✅ Schemas JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <main className="min-h-screen bg-white">
        <Hero />
        <PainPoints />
        <Solution />
        <Differentials />
        <Benefits />
        <Proof />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
