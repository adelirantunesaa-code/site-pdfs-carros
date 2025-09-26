
'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

// Tipos
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

interface SiteConfig {
  logoUrl: string;
  heroTitle: string;
  heroDescription: string;
}

// Estado inicial para os formulários
const initialPdfFormState: Omit<PDF, 'id'> = {
  titulo: '',
  descricao: '',
  preco: 0,
  categoria: '',
  autor: '',
  paginas: 0,
  capa: '',
  carro: '',
  avaliacao: 0,
};

const initialSiteConfigState: SiteConfig = {
  logoUrl: '',
  heroTitle: '',
  heroDescription: '',
};

export default function AdminSecretPage() {
  const [pdfs, setPdfs] = useState<PDF[]>([]);
  const [pdfFormData, setPdfFormData] = useState<Omit<PDF, 'id'> | PDF>(initialPdfFormState);
  const [isEditingPdf, setIsEditingPdf] = useState(false);

  const [siteConfig, setSiteConfig] = useState<SiteConfig>(initialSiteConfigState);

  // Carregar dados iniciais
  useEffect(() => {
    fetch('/api/pdfs')
      .then(res => res.json())
      .then(data => setPdfs(data));

    fetch('/api/config')
      .then(res => res.json())
      .then(data => setSiteConfig(data));
  }, []);

  // Handlers para o formulário de PDF
  const handlePdfInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const parsedValue = ['preco', 'paginas', 'avaliacao'].includes(name) ? parseFloat(value) : value;
    setPdfFormData(prev => ({ ...prev, [name]: parsedValue }));
  };

  const handlePdfFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const url = '/api/pdfs';
    const method = isEditingPdf ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pdfFormData),
    });
    const result = await res.json();

    if (isEditingPdf) {
      setPdfs(pdfs.map(p => p.id === result.id ? result : p));
    } else {
      setPdfs([...pdfs, result]);
    }

    setIsEditingPdf(false);
    setPdfFormData(initialPdfFormState);
  };

  const handleEditPdf = (pdf: PDF) => {
    setIsEditingPdf(true);
    setPdfFormData(pdf);
  };

  const handleCancelEditPdf = () => {
    setIsEditingPdf(false);
    setPdfFormData(initialPdfFormState);
  };

  const handleDeletePdf = async (id: number) => {
    if (confirm('Tem certeza que deseja excluir este PDF?')) {
      await fetch('/api/pdfs', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      setPdfs(pdfs.filter(p => p.id !== id));
    }
  };

  // Handlers para o formulário de Configuração do Site
  const handleSiteConfigChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSiteConfig(prev => ({ ...prev, [name]: value }));
  };

  const handleSiteConfigSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch('/api/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(siteConfig),
    });
    alert('Configurações do site atualizadas com sucesso!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Gerenciamento de Conteúdo</h1>

      {/* Gerenciamento de Conteúdo Global */}
      <div className="mb-8 p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Conteúdo Global</h2>
        <form onSubmit={handleSiteConfigSubmit} className="space-y-4">
          <input type="text" name="logoUrl" placeholder="URL do Logo" value={siteConfig.logoUrl} onChange={handleSiteConfigChange} className="w-full p-2 border rounded" />
          <input type="text" name="heroTitle" placeholder="Título da Página Inicial" value={siteConfig.heroTitle} onChange={handleSiteConfigChange} className="w-full p-2 border rounded" />
          <textarea name="heroDescription" placeholder="Descrição da Página Inicial" value={siteConfig.heroDescription} onChange={handleSiteConfigChange} className="w-full p-2 border rounded" />
          <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Salvar Conteúdo Global
          </button>
        </form>
      </div>

      {/* Gerenciamento de PDFs */}
      <div className="mb-8 p-6 border rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">{isEditingPdf ? 'Editar PDF' : 'Adicionar Novo PDF'}</h2>
        <form onSubmit={handlePdfFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="titulo" placeholder="Título" value={pdfFormData.titulo} onChange={handlePdfInputChange} className="w-full p-2 border rounded" required />
          <input type="number" name="preco" placeholder="Preço" value={pdfFormData.preco} onChange={handlePdfInputChange} className="w-full p-2 border rounded" required />
          <input type="text" name="categoria" placeholder="Categoria" value={pdfFormData.categoria} onChange={handlePdfInputChange} className="w-full p-2 border rounded" required />
          <input type="text" name="autor" placeholder="Autor" value={pdfFormData.autor} onChange={handlePdfInputChange} className="w-full p-2 border rounded" required />
          <input type="number" name="paginas" placeholder="Páginas" value={pdfFormData.paginas} onChange={handlePdfInputChange} className="w-full p-2 border rounded" required />
          <input type="text" name="carro" placeholder="Carro (opcional)" value={pdfFormData.carro || ''} onChange={handlePdfInputChange} className="w-full p-2 border rounded" />
          <input type="number" step="0.1" name="avaliacao" placeholder="Avaliação (opcional)" value={pdfFormData.avaliacao || 0} onChange={handlePdfInputChange} className="w-full p-2 border rounded" />
          <input type="text" name="capa" placeholder="URL da Capa" value={pdfFormData.capa || ''} onChange={handlePdfInputChange} className="w-full p-2 border rounded md:col-span-2" />
          <textarea name="descricao" placeholder="Descrição" value={pdfFormData.descricao} onChange={handlePdfInputChange} className="w-full p-2 border rounded md:col-span-2" required />
          
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {isEditingPdf ? 'Salvar Alterações' : 'Adicionar PDF'}
            </button>
            {isEditingPdf && (
              <button type="button" onClick={handleCancelEditPdf} className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                Cancelar Edição
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Lista de PDFs Existentes */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">PDFs Cadastrados</h2>
        <div className="space-y-4">
          {pdfs.map(pdf => (
            <div key={pdf.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className='flex-grow'>
                <span className='font-semibold text-lg text-gray-800'>{pdf.titulo}</span>
                <p className='text-sm text-gray-600'>{pdf.categoria} / {pdf.carro || 'N/A'}</p>
              </div>
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <button onClick={() => handleEditPdf(pdf)} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                  Editar
                </button>
                <button onClick={() => handleDeletePdf(pdf.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium">
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
