
import Link from 'next/link'
import Image from 'next/image'
import { Car, Wrench, Zap, Settings, Search, FileText, Heart, DollarSign } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const nichos = [
  {
    id: 'mecanica-basica',
    titulo: 'Mecânica Básica',
    descricao: 'Fundamentos essenciais para entender seu veículo',
    icone: Wrench,
    cor: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'preparacao-motores',
    titulo: 'Preparação de Motores',
    descricao: 'Técnicas avançadas para potencializar seu motor',
    icone: Settings,
    cor: 'from-red-500 to-orange-600'
  },
  {
    id: 'eletrica-automotiva',
    titulo: 'Elétrica Automotiva',
    descricao: 'Sistema elétrico e eletrônica veicular',
    icone: Zap,
    cor: 'from-yellow-500 to-amber-600'
  },
  {
    id: 'suspensao-freios',
    titulo: 'Suspensão e Freios',
    descricao: 'Segurança e conforto do seu veículo',
    icone: Car,
    cor: 'from-green-500 to-emerald-600'
  },
  {
    id: 'diagnostico-problemas',
    titulo: 'Diagnóstico de Problemas',
    descricao: 'Identifique e solucione falhas rapidamente',
    icone: Search,
    cor: 'from-purple-500 to-violet-600'
  },
  {
    id: 'manual-proprietarios',
    titulo: 'Manual de Proprietários',
    descricao: 'Guias completos para seu modelo de carro',
    icone: FileText,
    cor: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'cuidados-economia',
    titulo: 'Cuidados e Economia',
    descricao: 'Dicas para economizar e manter seu carro',
    icone: Heart,
    cor: 'from-pink-500 to-rose-600'
  },
  {
    id: 'vendas-negocios',
    titulo: 'Vendas e Negócios',
    descricao: 'Como comprar, vender e negociar veículos',
    icone: DollarSign,
    cor: 'from-teal-500 to-cyan-600'
  }
]

const carrosPopulares = [
  { nome: 'Volkswagen Fusca', slug: 'fusca', vendas: '2.3M+' },
  { nome: 'Volkswagen Gol', slug: 'gol', vendas: '1.8M+' },
  { nome: 'Fiat Uno', slug: 'uno', vendas: '1.5M+' },
  { nome: 'Toyota Corolla', slug: 'corolla', vendas: '1.2M+' },
  { nome: 'Honda Civic', slug: 'civic', vendas: '980K+' },
  { nome: 'Toyota Hilux', slug: 'hilux', vendas: '850K+' },
  { nome: 'Chevrolet Onix', slug: 'onix', vendas: '750K+' },
  { nome: 'Ford Ka', slug: 'ka', vendas: '680K+' }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-3">
              {siteConfig.logoUrl ? (
                <Image src={siteConfig.logoUrl} alt="AutoBook Logo" width={50} height={50} className="rounded-xl" />
              ) : (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                  <Car className="h-8 w-8 text-white" />
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AutoBook
                </h1>
                <p className="text-sm text-gray-600">PDFs Automotivos Profissionais</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Início
              </Link>
              <Link href="/nichos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Categorias
              </Link>
              <Link href="/carros" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Por Modelo
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            dangerouslySetInnerHTML={{ __html: siteConfig.heroTitle.replace(/\n/g, '<br />') }}
          />
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/nichos" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explorar Categorias
            </Link>
            <Link 
              href="/carros" 
              className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              Ver por Modelo
            </Link>
          </div>
        </div>
      </section>

      {/* Nichos Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Categorias Especializadas
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre exatamente o que precisa com nossa organização por especialidades técnicas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {nicho.titulo}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {nicho.descricao}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Carros Populares Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Modelos Mais Procurados
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Manuais específicos para os carros mais populares do Brasil
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {carrosPopulares.map((carro) => (
              <Link 
                key={carro.slug} 
                href={`/carro/${carro.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <Car className="h-8 w-8 text-blue-600" />
                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {carro.vendas}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {carro.nome}
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Manuais e guias especializados
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Pronto para Expandir seu Conhecimento?
          </h3>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Junte-se a milhares de profissionais e entusiastas que já transformaram 
            sua relação com a mecânica automotiva através dos nossos materiais especializados.
          </p>
          <Link 
            href="/nichos" 
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Começar Agora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold">AutoBook</h4>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                A maior plataforma de conteúdo técnico automotivo do Brasil. 
                Materiais profissionais para quem leva a sério o conhecimento sobre veículos.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Categorias</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/nicho/mecanica-basica" className="hover:text-white transition-colors">Mecânica Básica</Link></li>
                <li><Link href="/nicho/eletrica-automotiva" className="hover:text-white transition-colors">Elétrica</Link></li>
                <li><Link href="/nicho/diagnostico-problemas" className="hover:text-white transition-colors">Diagnóstico</Link></li>
                <li><Link href="/nicho/preparacao-motores" className="hover:text-white transition-colors">Preparação</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Modelos</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/carro/fusca" className="hover:text-white transition-colors">Fusca</Link></li>
                <li><Link href="/carro/gol" className="hover:text-white transition-colors">Gol</Link></li>
                <li><Link href="/carro/corolla" className="hover:text-white transition-colors">Corolla</Link></li>
                <li><Link href="/carro/civic" className="hover:text-white transition-colors">Civic</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoBook. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
