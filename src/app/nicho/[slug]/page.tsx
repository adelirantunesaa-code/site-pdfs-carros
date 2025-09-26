import Link from 'next/link'
import { Car, ArrowLeft, Download, Star, Clock, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Dados mockados dos PDFs por nicho
const pdfsPorNicho = {
  'mecanica-basica': [
    {
      id: 1,
      titulo: 'Fundamentos da Mecânica Automotiva',
      descricao: 'Guia completo sobre os princípios básicos da mecânica de veículos',
      preco: 29.90,
      avaliacao: 4.8,
      paginas: 120,
      autor: 'João Silva',
      capa: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=400&fit=crop'
    },
    {
      id: 2,
      titulo: 'Motor: Funcionamento e Manutenção',
      descricao: 'Tudo sobre o coração do seu veículo - funcionamento, peças e manutenção',
      preco: 39.90,
      avaliacao: 4.9,
      paginas: 180,
      autor: 'Maria Santos',
      capa: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop'
    },
    {
      id: 3,
      titulo: 'Sistema de Transmissão Explicado',
      descricao: 'Câmbio manual, automático e CVT - funcionamento e diagnóstico',
      preco: 34.90,
      avaliacao: 4.7,
      paginas: 150,
      autor: 'Carlos Oliveira',
      capa: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=400&fit=crop'
    }
  ],
  'eletrica-automotiva': [
    {
      id: 4,
      titulo: 'Elétrica Automotiva Moderna',
      descricao: 'Sistema elétrico completo - bateria, alternador, chicotes e módulos',
      preco: 44.90,
      avaliacao: 4.9,
      paginas: 200,
      autor: 'Pedro Costa',
      capa: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=400&fit=crop'
    },
    {
      id: 5,
      titulo: 'Diagnóstico Elétrico com Scanner',
      descricao: 'Como usar scanners e multímetros para diagnóstico elétrico preciso',
      preco: 49.90,
      avaliacao: 4.8,
      paginas: 160,
      autor: 'Ana Lima',
      capa: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=400&fit=crop'
    }
  ],
  'diagnostico-problemas': [
    {
      id: 6,
      titulo: 'Diagnóstico Automotivo Avançado',
      descricao: 'Técnicas profissionais para identificar e solucionar problemas complexos',
      preco: 54.90,
      avaliacao: 4.9,
      paginas: 220,
      autor: 'Roberto Ferreira',
      capa: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=400&fit=crop'
    }
  ]
}

const nichosInfo = {
  'mecanica-basica': {
    titulo: 'Mecânica Básica',
    descricao: 'Fundamentos essenciais para entender e trabalhar com veículos',
    cor: 'from-blue-500 to-cyan-600'
  },
  'eletrica-automotiva': {
    titulo: 'Elétrica Automotiva',
    descricao: 'Sistema elétrico e eletrônica veicular moderna',
    cor: 'from-yellow-500 to-amber-600'
  },
  'diagnostico-problemas': {
    titulo: 'Diagnóstico de Problemas',
    descricao: 'Técnicas avançadas para identificar e solucionar falhas',
    cor: 'from-purple-500 to-violet-600'
  },
  'preparacao-motores': {
    titulo: 'Preparação de Motores',
    descricao: 'Técnicas avançadas para potencializar seu motor',
    cor: 'from-red-500 to-orange-600'
  },
  'suspensao-freios': {
    titulo: 'Suspensão e Freios',
    descricao: 'Segurança e conforto do seu veículo',
    cor: 'from-green-500 to-emerald-600'
  },
  'manual-proprietarios': {
    titulo: 'Manual de Proprietários',
    descricao: 'Guias completos para seu modelo de carro',
    cor: 'from-indigo-500 to-blue-600'
  },
  'cuidados-economia': {
    titulo: 'Cuidados e Economia',
    descricao: 'Dicas para economizar e manter seu carro',
    cor: 'from-pink-500 to-rose-600'
  },
  'vendas-negocios': {
    titulo: 'Vendas e Negócios',
    descricao: 'Como comprar, vender e negociar veículos',
    cor: 'from-teal-500 to-cyan-600'
  }
}

export default function NichoPage({ params }: { params: { slug: string } }) {
  const nicho = nichosInfo[params.slug as keyof typeof nichosInfo]
  const pdfs = pdfsPorNicho[params.slug as keyof typeof pdfsPorNicho] || []

  if (!nicho) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Categoria não encontrada</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Voltar ao início
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AutoBook</span>
            </Link>
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r ${nicho.cor}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {nicho.titulo}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {nicho.descricao}
          </p>
        </div>
      </section>

      {/* PDFs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              PDFs Disponíveis
            </h2>
            <p className="text-gray-600">
              {pdfs.length} materiais encontrados nesta categoria
            </p>
          </div>

          {pdfs.length === 0 ? (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Em breve novos conteúdos
              </h3>
              <p className="text-gray-600 mb-6">
                Estamos preparando materiais incríveis para esta categoria
              </p>
              <Link href="/">
                <Button>Explorar outras categorias</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pdfs.map((pdf) => (
                <div key={pdf.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                    <img 
                      src={pdf.capa} 
                      alt={pdf.titulo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">{pdf.avaliacao}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {pdf.titulo}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {pdf.descricao}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>Por {pdf.autor}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{pdf.paginas} páginas</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-600">
                        R$ {pdf.preco.toFixed(2).replace('.', ',')}
                      </div>
                      <Link href={`/pdf/${pdf.id}`}>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <Download className="h-4 w-4 mr-2" />
                          Comprar
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}