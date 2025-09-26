'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Car, ArrowLeft, Download, Star, Clock, FileText, Shield, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Dados mockados dos PDFs
const todosOsPdfs = {
  1: {
    id: 1,
    titulo: 'Fundamentos da Mecânica Automotiva',
    descricao: 'Guia completo sobre os princípios básicos da mecânica de veículos. Este manual aborda desde conceitos fundamentais até técnicas avançadas de diagnóstico e reparo.',
    preco: 29.90,
    avaliacao: 4.8,
    totalAvaliacoes: 127,
    paginas: 120,
    autor: 'João Silva',
    biografia: 'Mecânico com 15 anos de experiência e instrutor técnico',
    capa: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=600&fit=crop',
    categoria: 'Mecânica Básica',
    topicos: [
      'Princípios básicos do motor',
      'Sistema de combustível',
      'Sistema de arrefecimento',
      'Transmissão e embreagem',
      'Diagnóstico de problemas comuns'
    ],
    preview: 'Este manual foi desenvolvido para iniciantes e profissionais que desejam aprofundar seus conhecimentos em mecânica automotiva...'
  },
  2: {
    id: 2,
    titulo: 'Motor: Funcionamento e Manutenção',
    descricao: 'Tudo sobre o coração do seu veículo - funcionamento, peças e manutenção',
    preco: 39.90,
    avaliacao: 4.9,
    totalAvaliacoes: 89,
    paginas: 180,
    autor: 'Maria Santos',
    biografia: 'Engenheira mecânica especializada em motores automotivos',
    capa: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop',
    categoria: 'Mecânica Básica',
    topicos: [
      'Ciclo Otto e Diesel',
      'Componentes internos do motor',
      'Sistema de lubrificação',
      'Manutenção preventiva',
      'Preparação e modificações'
    ],
    preview: 'Um guia completo sobre motores automotivos, desde o funcionamento básico até técnicas avançadas...'
  }
}

export default function PdfPage({ params }: { params: { id: string } }) {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [processandoCompra, setProcessandoCompra] = useState(false)
  
  const pdf = todosOsPdfs[parseInt(params.id) as keyof typeof todosOsPdfs]

  if (!pdf) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">PDF não encontrado</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Voltar ao início
          </Link>
        </div>
      </div>
    )
  }

  const handleCompra = async () => {
    if (!email || !nome) {
      alert('Por favor, preencha todos os campos')
      return
    }

    setProcessandoCompra(true)
    
    // Simular processamento de pagamento
    setTimeout(() => {
      alert('Compra realizada com sucesso! Você receberá o link de download por email.')
      setProcessandoCompra(false)
    }, 2000)
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Breadcrumb */}
              <div className="text-sm text-gray-500 mb-4">
                <Link href="/" className="hover:text-blue-600">Início</Link>
                <span className="mx-2">›</span>
                <span>{pdf.categoria}</span>
                <span className="mx-2">›</span>
                <span className="text-gray-900">{pdf.titulo}</span>
              </div>

              {/* Título e Avaliação */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {pdf.titulo}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(pdf.avaliacao) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-lg font-semibold text-gray-900 ml-2">
                    {pdf.avaliacao}
                  </span>
                  <span className="text-gray-500">
                    ({pdf.totalAvaliacoes} avaliações)
                  </span>
                </div>
              </div>

              {/* Autor */}
              <div className="flex items-center space-x-3 mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{pdf.autor}</h3>
                  <p className="text-gray-600 text-sm">{pdf.biografia}</p>
                </div>
              </div>

              {/* Descrição */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre este manual</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {pdf.descricao}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {pdf.preview}
                </p>
              </div>

              {/* Tópicos Abordados */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">O que você vai aprender</h2>
                <ul className="space-y-3">
                  {pdf.topicos.map((topico, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-green-100 p-1 rounded-full mt-1">
                        <Award className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{topico}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Garantias */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-2" />
                  Garantias incluídas
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Download imediato após a compra</li>
                  <li>• Acesso vitalício ao material</li>
                  <li>• Suporte técnico por email</li>
                  <li>• Garantia de satisfação de 7 dias</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar de Compra */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              {/* Capa do PDF */}
              <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden mb-6">
                <img 
                  src={pdf.capa} 
                  alt={pdf.titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Informações do PDF */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Páginas:</span>
                  <span className="font-semibold">{pdf.paginas}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Categoria:</span>
                  <span className="font-semibold">{pdf.categoria}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Formato:</span>
                  <span className="font-semibold">PDF Digital</span>
                </div>
              </div>

              {/* Preço */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  R$ {pdf.preco.toFixed(2).replace('.', ',')}
                </div>
                <p className="text-sm text-gray-600">Pagamento único • Acesso vitalício</p>
              </div>

              {/* Formulário de Compra */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Seu nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <Button 
                  onClick={handleCompra}
                  disabled={processandoCompra}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
                >
                  {processandoCompra ? (
                    'Processando...'
                  ) : (
                    <>
                      <Download className="h-5 w-5 mr-2" />
                      Comprar Agora
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Pagamento seguro via Stripe • Garantia de 7 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}