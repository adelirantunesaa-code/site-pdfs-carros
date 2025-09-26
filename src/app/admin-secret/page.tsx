'use client'

import { useState, useEffect } from 'react'
import { Car, Plus, Edit, Trash2, Eye, Upload, Save, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

interface PDF {
  id: number
  titulo: string
  descricao: string
  preco: number
  categoria: string
  carro?: string
  autor: string
  paginas: number
  arquivo?: string
  capa?: string
}

const categorias = [
  'Mecânica Básica',
  'Preparação de Motores',
  'Elétrica Automotiva',
  'Suspensão e Freios',
  'Diagnóstico de Problemas',
  'Manual de Proprietários',
  'Cuidados e Economia',
  'Vendas e Negócios'
]

const carros = [
  'Fusca', 'Gol', 'Uno', 'Corolla', 'Civic', 'Hilux', 'Onix', 'Ka'
]

export default function AdminPanel() {
  const [autenticado, setAutenticado] = useState(false)
  const [senha, setSenha] = useState('')
  const [pdfs, setPdfs] = useState<PDF[]>([])
  const [editandoPdf, setEditandoPdf] = useState<PDF | null>(null)
  const [modalAberto, setModalAberto] = useState(false)

  // Dados mockados iniciais
  useEffect(() => {
    setPdfs([
      {
        id: 1,
        titulo: 'Fundamentos da Mecânica Automotiva',
        descricao: 'Guia completo sobre os princípios básicos da mecânica de veículos',
        preco: 29.90,
        categoria: 'Mecânica Básica',
        autor: 'João Silva',
        paginas: 120,
        capa: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=400&fit=crop'
      },
      {
        id: 2,
        titulo: 'Manual Completo do Fusca',
        descricao: 'Guia definitivo para manutenção e restauração do Volkswagen Fusca',
        preco: 39.90,
        categoria: 'Manual de Proprietários',
        carro: 'Fusca',
        autor: 'Especialista Fusca',
        paginas: 250,
        capa: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=400&fit=crop'
      }
    ])
  }, [])

  const handleLogin = () => {
    // Senha simples para demonstração
    if (senha === 'autobook2024') {
      setAutenticado(true)
    } else {
      alert('Senha incorreta!')
    }
  }

  const handleSalvarPdf = () => {
    if (!editandoPdf) return

    if (editandoPdf.id === 0) {
      // Novo PDF
      const novoId = Math.max(...pdfs.map(p => p.id)) + 1
      setPdfs([...pdfs, { ...editandoPdf, id: novoId }])
    } else {
      // Editar PDF existente
      setPdfs(pdfs.map(p => p.id === editandoPdf.id ? editandoPdf : p))
    }

    setEditandoPdf(null)
    setModalAberto(false)
  }

  const handleExcluirPdf = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este PDF?')) {
      setPdfs(pdfs.filter(p => p.id !== id))
    }
  }

  const handleNovoPdf = () => {
    setEditandoPdf({
      id: 0,
      titulo: '',
      descricao: '',
      preco: 0,
      categoria: '',
      autor: '',
      paginas: 0
    })
    setModalAberto(true)
  }

  const handleEditarPdf = (pdf: PDF) => {
    setEditandoPdf({ ...pdf })
    setModalAberto(true)
  }

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl w-fit mx-auto mb-4">
              <Car className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
            <p className="text-gray-600">AutoBook - Acesso Restrito</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="senha">Senha de Acesso</Label>
              <Input
                id="senha"
                type="password"
                placeholder="Digite a senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                className="mt-1"
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Entrar
            </Button>
          </div>
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
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AutoBook Admin</h1>
                <p className="text-sm text-gray-600">Painel Administrativo</p>
              </div>
            </div>
            <Button 
              onClick={() => setAutenticado(false)}
              variant="outline"
            >
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600">{pdfs.length}</div>
              <div className="text-sm text-gray-600">PDFs Cadastrados</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">
                R$ {pdfs.reduce((acc, pdf) => acc + pdf.preco, 0).toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">Valor Total</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-600">
                {new Set(pdfs.map(p => p.categoria)).size}
              </div>
              <div className="text-sm text-gray-600">Categorias</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-orange-600">
                {pdfs.filter(p => p.carro).length}
              </div>
              <div className="text-sm text-gray-600">Por Modelo</div>
            </CardContent>
          </Card>
        </div>

        {/* Ações */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Gerenciar PDFs</h2>
          <Button onClick={handleNovoPdf} className="bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Novo PDF
          </Button>
        </div>

        {/* Lista de PDFs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    PDF
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categoria
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preço
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Páginas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pdfs.map((pdf) => (
                  <tr key={pdf.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12">
                          {pdf.capa ? (
                            <img className="h-12 w-12 rounded-lg object-cover" src={pdf.capa} alt="" />
                          ) : (
                            <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                              <Car className="h-6 w-6 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{pdf.titulo}</div>
                          <div className="text-sm text-gray-500">{pdf.autor}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {pdf.categoria}
                      </span>
                      {pdf.carro && (
                        <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {pdf.carro}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      R$ {pdf.preco.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {pdf.paginas}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditarPdf(pdf)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleExcluirPdf(pdf.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal de Edição */}
        <Dialog open={modalAberto} onOpenChange={setModalAberto}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editandoPdf?.id === 0 ? 'Novo PDF' : 'Editar PDF'}
              </DialogTitle>
            </DialogHeader>
            
            {editandoPdf && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="titulo">Título</Label>
                    <Input
                      id="titulo"
                      value={editandoPdf.titulo}
                      onChange={(e) => setEditandoPdf({...editandoPdf, titulo: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="autor">Autor</Label>
                    <Input
                      id="autor"
                      value={editandoPdf.autor}
                      onChange={(e) => setEditandoPdf({...editandoPdf, autor: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea
                    id="descricao"
                    value={editandoPdf.descricao}
                    onChange={(e) => setEditandoPdf({...editandoPdf, descricao: e.target.value})}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="preco">Preço (R$)</Label>
                    <Input
                      id="preco"
                      type="number"
                      step="0.01"
                      value={editandoPdf.preco}
                      onChange={(e) => setEditandoPdf({...editandoPdf, preco: parseFloat(e.target.value) || 0})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="paginas">Páginas</Label>
                    <Input
                      id="paginas"
                      type="number"
                      value={editandoPdf.paginas}
                      onChange={(e) => setEditandoPdf({...editandoPdf, paginas: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  <div>
                    <Label>Categoria</Label>
                    <Select 
                      value={editandoPdf.categoria} 
                      onValueChange={(value) => setEditandoPdf({...editandoPdf, categoria: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        {categorias.map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Carro (opcional)</Label>
                    <Select 
                      value={editandoPdf.carro || ''} 
                      onValueChange={(value) => setEditandoPdf({...editandoPdf, carro: value || undefined})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Nenhum</SelectItem>
                        {carros.map(carro => (
                          <SelectItem key={carro} value={carro}>{carro}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="capa">URL da Capa</Label>
                    <Input
                      id="capa"
                      value={editandoPdf.capa || ''}
                      onChange={(e) => setEditandoPdf({...editandoPdf, capa: e.target.value})}
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setModalAberto(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleSalvarPdf}>
                    <Save className="h-4 w-4 mr-2" />
                    Salvar
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}