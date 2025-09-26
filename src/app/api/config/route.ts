
import { NextResponse, NextRequest } from 'next/server';
import { kv } from '@vercel/kv';
import { siteConfig as initialSiteConfig, SiteConfig } from '@/lib/site-config'; // Usado para o seed inicial

const CONFIG_KEY = 'site_config';

// Função para garantir que os dados iniciais existam no KV
async function seedInitialData() {
  const config = await kv.get<SiteConfig>(CONFIG_KEY);
  if (!config) {
    await kv.set(CONFIG_KEY, initialSiteConfig);
  }
}

// GET - Obter a configuração do site
export async function GET() {
  await seedInitialData();
  const config = await kv.get<SiteConfig>(CONFIG_KEY);
  return NextResponse.json(config);
}

// POST - Atualizar a configuração do site
export async function POST(req: NextRequest) {
  const newConfig: SiteConfig = await req.json();
  
  // Aqui, você pode querer validar os dados de newConfig antes de salvar

  await kv.set(CONFIG_KEY, newConfig);
  
  return NextResponse.json(newConfig, { status: 200 }); // Status 200 OK para atualização
}
