import Link from 'next/link'
import { Car, ArrowLeft, Download, Star, Clock, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Dados mockados dos PDFs por carro
const pdfsPorCarro = {
  'fusca': [
    {
      id: 7,
      titulo: 'Manual Completo do Fusca',
      descricao: 'Guia definitivo para manutenção e restauração do Volkswagen Fusca',
      preco: 39.90,
      avaliacao: 4.9,
      paginas: 250,
      autor: 'Especialista Fusca',
      capa: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=400&fit=crop'
    },
    {
      id: 8,
      titulo: 'Elétrica do Fusca Simplificada',
      descricao: 'Sistema elétrico do Fusca explicado de forma simples e prática',
      preco: 24.90,
      avaliacao: 4.7,
      paginas: 120,
      autor: 'João Elétrica',
      capa: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=400&fit=crop'
    }
  ],
  'gol': [
    {
      id: 9,
      titulo: 'Gol G1 ao G8 - Manual Técnico',
      descricao: 'Todas as gerações do Gol em um manual técnico completo',
      preco: 44.90,
      avaliacao: 4.8,
      paginas: 300,
      autor: 'VW Especialista',
      capa: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=400&fit=crop'
    }
  ],
  'corolla': [
    {
      id: 10,
      titulo: 'Toyota Corolla - Manutenção Preventiva',
      descricao: 'Guia completo de manutenção preventiva para todas as gerações do Corolla',
      preco: 49.90,
      avaliacao: 4.9,
      paginas: 200,
      autor: 'Toyota Expert',
      capa: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop'
    }
  ]
}

const carrosInfo = {
  'fusca': {
    nome: 'Volkswagen Fusca',
    descricao: 'O carro mais icônico do Brasil - manuais e guias especializados',
    anos: '1959-1996',
    vendas: '2.3M+',
    cor: 'from-blue-500 to-cyan-600'
  },
  'gol': {
    nome: 'Volkswagen Gol',
    descricao: 'O popular da Volkswagen - todas as gerações e versões',
    anos: '1980-presente',
    vendas: '1.8M+',
    cor: 'from-green-500 to-emerald-600'
  },
  'uno': {
    nome: 'Fiat Uno',
    descricao: 'O compacto italiano que conquistou o Brasil',
    anos: '1984-presente',
    vendas: '1.5M+',
    cor: 'from-red-500 to-orange-600'
  },
  'corolla': {
    nome: 'Toyota Corolla',
    descricao: 'Confiabilidade japonesa em todas as gerações',
    anos: '1993-presente',
    vendas: '1.2M+',
    cor: 'from-purple-500 to-violet-600'
  },
  'civic': {
    nome: 'Honda Civic',
    descricao: 'O sedan esportivo da Honda no Brasil',
    anos: '1992-presente',
    vendas: '980K+',
    cor: 'from-indigo-500 to-blue-600'
  },
  'hilux': {
    nome: 'Toyota Hilux',
    descricao: 'A picape mais resistente do mercado brasileiro',
    anos: '1997-presente',
    vendas: '850K+',
    cor: 'from-yellow-500 to-amber-600'
  },
  'onix': {
    nome: 'Chevrolet Onix',
    descricao: 'O hatch moderno da Chevrolet',
    anos: '2012-presente',
    vendas: '750K+',
    cor: 'from-pink-500 to-rose-600'
  },
  'ka': {
    nome: 'Ford Ka',
    descricao: 'O compacto urbano da Ford',
    anos: '1997-presente',
    vendas: '680K+',
    cor: 'from-teal-500 to-cyan-600'
  }
}

export default function CarroPage({ params }: { params: { slug: string } }) {
  const carro = carrosInfo[params.slug as keyof typeof carrosInfo]
  const pdfs = pdfsPorCarro[params.slug as keyof typeof pdfsPorCarro] || []

  if (!carro) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Modelo não encontrado</h1>
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
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r ${carro.cor}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {carro.nome}
              </h1>
              <p className="text-xl text-white/90 mb-4">
                {carro.descricao}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-white/80">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Anos: {carro.anos}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>Vendas: {carro.vendas}</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <Car className="h-24 w-24 text-white mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* PDFs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Manuais Disponíveis
            </h2>
            <p className="text-gray-600">
              {pdfs.length} materiais específicos para o {carro.nome}
            </p>
          </div>

          {pdfs.length === 0 ? (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Em breve manuais específicos
              </h3>
              <p className="text-gray-600 mb-6">
                Estamos preparando materiais técnicos específicos para o {carro.nome}
              </p>
              <Link href="/">
                <Button>Explorar outros modelos</Button>
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