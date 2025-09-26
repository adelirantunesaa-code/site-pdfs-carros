
export interface PDF {
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
  totalAvaliacoes?: number;
  biografia?: string;
  topicos?: string[];
  preview?: string;
}

export const todosOsPdfs: PDF[] = [
  {
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
  {
    id: 2,
    titulo: 'Motor: Funcionamento e Manutenção',
    descricao: 'Tudo sobre o coração do seu veículo - funcionamento, peças e manutenção',
    preco: 39.90,
    avaliacao: 4.9,
    totalAvaliacoes: 180,
    paginas: 180,
    autor: 'Maria Santos',
    categoria: 'Mecânica Básica',
    capa: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop'
  },
  {
    id: 3,
    titulo: 'Sistema de Transmissão Explicado',
    descricao: 'Câmbio manual, automático e CVT - funcionamento e diagnóstico',
    preco: 34.90,
    avaliacao: 4.7,
    paginas: 150,
    totalAvaliacoes: 98,
    autor: 'Carlos Oliveira',
    categoria: 'Mecânica Básica',
    capa: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=400&fit=crop'
  },
  {
    id: 4,
    titulo: 'Elétrica Automotiva Moderna',
    descricao: 'Sistema elétrico completo - bateria, alternador, chicotes e módulos',
    preco: 44.90,
    avaliacao: 4.9,
    paginas: 200,
    autor: 'Pedro Costa',
    categoria: 'Elétrica Automotiva',
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
    categoria: 'Elétrica Automotiva',
    capa: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=400&fit=crop'
  },
  {
    id: 6,
    titulo: 'Diagnóstico Avançado de Falhas',
    descricao: 'Técnicas profissionais para identificar e solucionar problemas complexos',
    preco: 54.90,
    avaliacao: 4.9,
    paginas: 220,
    autor: 'Roberto Ferreira',
    totalAvaliacoes: 150,
    categoria: 'Diagnóstico de Problemas',
    capa: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=400&fit=crop'
  },
  {
    id: 7,
    titulo: 'Manual Completo do Fusca',
    descricao: 'Guia definitivo para manutenção e restauração do Volkswagen Fusca',
    preco: 39.90,
    categoria: 'Manual de Proprietários',
    carro: 'Fusca',
    autor: 'Especialista Fusca',
    paginas: 250,
    avaliacao: 4.9,
    totalAvaliacoes: 215,
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
    categoria: 'Elétrica Automotiva',
    carro: 'Fusca',
    capa: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=400&fit=crop'
  },
  {
    id: 9,
    titulo: 'Gol G1 ao G8 - Manual Técnico',
    descricao: 'Todas as gerações do Gol em um manual técnico completo',
    preco: 44.90,
    avaliacao: 4.8,
    paginas: 300,
    autor: 'VW Especialista',
    categoria: 'Manual de Proprietários',
    carro: 'Gol',
    capa: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=400&fit=crop'
  },
  {
    id: 10,
    titulo: 'Toyota Corolla - Manutenção Preventiva',
    descricao: 'Guia completo de manutenção preventiva para todas as gerações do Corolla',
    preco: 49.90,
    avaliacao: 4.9,
    paginas: 200,
    autor: 'Toyota Expert',
    categoria: 'Manual de Proprietários',
    carro: 'Corolla',
    capa: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop'
  }
];

export const categorias = [
  'Mecânica Básica',
  'Preparação de Motores',
  'Elétrica Automotiva',
  'Suspensão e Freios',
  'Diagnóstico de Problemas',
  'Manual de Proprietários',
  'Cuidados e Economia',
  'Vendas e Negócios'
];

export const carros = [
  'Fusca', 'Gol', 'Uno', 'Corolla', 'Civic', 'Hilux', 'Onix', 'Ka'
];
