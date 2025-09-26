
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Car, ArrowLeft, Download, Star, Award, Loader } from 'lucide-react'; // Adicionado Loader
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Definindo a interface do PDF para tipagem
interface PDF {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  categoria: string;
  autor: string;
  paginas: number;
  capa?: string;
  carro?: string;
  avaliacao?: number;
}

export default function PdfPage({ params }: { params: { id: string } }) {
  const [pdf, setPdf] = useState<PDF | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [processandoCompra, setProcessandoCompra] = useState(false);

  useEffect(() => {
    if (params.id) {
      setLoading(true);
      fetch('/api/pdfs')
        .then(res => res.json())
        .then((allPdfs: PDF[]) => {
          const foundPdf = allPdfs.find(p => p.id === parseInt(params.id));
          setPdf(foundPdf || null);
        })
        .finally(() => setLoading(false));
    }
  }, [params.id]);

  const handleCompra = async () => {
    if (!email || !nome) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    if (!pdf) return;

    setProcessandoCompra(true);
    
    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: pdf }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('Erro ao criar pagamento:', data.error);
        alert('Ocorreu um erro ao processar o pagamento.');
      }
    } catch (error) {
      console.error('Erro ao criar pagamento:', error);
      alert('Ocorreu um erro ao processar o pagamento.');
    } finally {
      setProcessandoCompra(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader className="animate-spin h-10 w-10 text-blue-600" />
        <span className="ml-4 text-lg text-gray-700">Carregando detalhes do PDF...</span>
      </div>
    );
  }

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
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {pdf.titulo}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre este manual</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {pdf.descricao}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              {pdf.capa && (
                <div className="aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden mb-6">
                  <img 
                    src={pdf.capa} 
                    alt={pdf.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Páginas:</span>
                  <span className="font-semibold">{pdf.paginas}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Categoria:</span>
                  <span className="font-semibold">{pdf.categoria}</span>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  R$ {pdf.preco.toFixed(2).replace('.', ',')}
                </div>
              </div>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
