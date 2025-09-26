
import { NextResponse, NextRequest } from 'next/server';
import { kv } from '@vercel/kv';
import { todosOsPdfs as initialPdfs, PDF } from '@/lib/mock-data'; // Usado para o seed inicial

const PDFS_KEY = 'all_pdfs';

// Função para garantir que os dados iniciais existam no KV
async function seedInitialData() {
  const pdfs = await kv.get<PDF[]>(PDFS_KEY);
  if (!pdfs || pdfs.length === 0) {
    await kv.set(PDFS_KEY, initialPdfs);
  }
}

// GET - Listar todos os PDFs
export async function GET() {
  await seedInitialData();
  const pdfs = await kv.get<PDF[]>(PDFS_KEY);
  return NextResponse.json(pdfs);
}

// POST - Adicionar um novo PDF
export async function POST(req: NextRequest) {
  const newPdfData: Omit<PDF, 'id'> = await req.json();
  const allPdfs = await kv.get<PDF[]>(PDFS_KEY) || [];

  const newId = allPdfs.length > 0 ? Math.max(...allPdfs.map(p => p.id)) + 1 : 1;
  const pdfToAdd: PDF = { ...newPdfData, id: newId };

  const updatedPdfs = [...allPdfs, pdfToAdd];
  await kv.set(PDFS_KEY, updatedPdfs);

  return NextResponse.json(pdfToAdd, { status: 201 });
}

// PUT - Atualizar um PDF existente
export async function PUT(req: NextRequest) {
  const updatedPdf: PDF = await req.json();
  const allPdfs = await kv.get<PDF[]>(PDFS_KEY) || [];

  const index = allPdfs.findIndex(p => p.id === updatedPdf.id);
  if (index === -1) {
    return NextResponse.json({ message: 'PDF não encontrado' }, { status: 404 });
  }

  const updatedPdfs = [...allPdfs];
  updatedPdfs[index] = updatedPdf;
  
  await kv.set(PDFS_KEY, updatedPdfs);

  return NextResponse.json(updatedPdf);
}

// DELETE - Excluir um PDF
export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  if (!id) {
    return NextResponse.json({ message: 'ID do PDF não fornecido' }, { status: 400 });
  }

  const allPdfs = await kv.get<PDF[]>(PDFS_KEY) || [];
  const updatedPdfs = allPdfs.filter(p => p.id !== id);

  if (allPdfs.length === updatedPdfs.length) {
    return NextResponse.json({ message: 'PDF não encontrado' }, { status: 404 });
  }

  await kv.set(PDFS_KEY, updatedPdfs);

  return NextResponse.json({ message: 'PDF excluído com sucesso' });
}
