import Link from 'next/link'
import { Car, ArrowLeft, Wrench, Zap, Settings, Search, FileText, Heart, DollarSign } from 'lucide-react'

const nichos = [
  {
    id: 'mecanica-basica',
    titulo: 'Mecânica Básica',
    descricao: 'Fundamentos essenciais para entender seu veículo',
    icone: Wrench,
    cor: 'from-blue-500 to-cyan-600',
    totalPdfs: 12
  },
  {
    id: 'preparacao-motores',
    titulo: 'Preparação de Motores',
    descricao: 'Técnicas avançadas para potencializar seu motor',
    icone: Settings,
    cor: 'from-red-500 to-orange-600',
    totalPdfs: 8
  },
  {
    id: 'eletrica-automotiva',
    titulo: 'Elétrica Automotiva',
    descricao: 'Sistema elétrico e eletrônica veicular',
    icone: Zap,
    cor: 'from-yellow-500 to-amber-600',
    totalPdfs: 15
  },
  {
    id: 'suspensao-freios',
    titulo: 'Suspensão e Freios',
    descricao: 'Segurança e conforto do seu veículo',
    icone: Car,
    cor: 'from-green-500 to-emerald-600',
    totalPdfs: 6
  },
  {
    id: 'diagnostico-problemas',
    titulo: 'Diagnóstico de Problemas',
    descricao: 'Identifique e solucione falhas rapidamente',
    icone: Search,
    cor: 'from-purple-500 to-violet-600',
    totalPdfs: 10
  },
  {
    id: 'manual-proprietarios',
    titulo: 'Manual de Proprietários',
    descricao: 'Guias completos para seu modelo de carro',
    icone: FileText,
    cor: 'from-indigo-500 to-blue-600',
    totalPdfs: 25
  },
  {
    id: 'cuidados-economia',
    titulo: 'Cuidados e Economia',
    descricao: 'Dicas para economizar e manter seu carro',
    icone: Heart,
    cor: 'from-pink-500 to-rose-600',
    totalPdfs: 9
  },
  {
    id: 'vendas-negocios',
    titulo: 'Vendas e Negócios',
    descricao: 'Como comprar, vender e negociar veículos',
    icone: DollarSign,
    cor: 'from-teal-500 to-cyan-600',
    totalPdfs: 7
  }
]

export default function NichosPage() {
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Todas as Categorias
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore nossa biblioteca completa de conhecimento automotivo organizada por especialidades
          </p>
        </div>
      </section>

      {/* Nichos Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Categorias Especializadas
            </h2>
            <p className="text-gray-600">
              {nichos.length} categorias com {nichos.reduce((acc, nicho) => acc + nicho.totalPdfs, 0)} PDFs disponíveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {nichos.map((nicho) => {
              const IconeComponent = nicho.icone
              return (
                <Link 
                  key={nicho.id} 
                  href={`/nicho/${nicho.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full">
                    <div className={`bg-gradient-to-r ${nicho.cor} p-4 rounded-xl mb-4 w-fit`}>
                      <IconeComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {nicho.titulo}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {nicho.descricao}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                        {nicho.totalPdfs} PDFs
                      </span>
                      <span className="text-blue-600 font-medium group-hover:text-blue-800">
                        Ver todos →
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Explore também nossos manuais organizados por modelo de veículo
          </p>
          <Link 
            href="/carros" 
            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Ver por Modelo de Carro
          </Link>
        </div>
      </section>
    </div>
  )
}