
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
    id: 3,
    titulo: 'Motor: Funcionamento e Manutenção',
    descricao: 'Tudo sobre o coração do seu veículo - funcionamento, peças e manutenção',
    preco: 39.90,
    avaliacao: 4.9,
    totalAvaliacoes: 180,
    paginas: 180,
    autor: 'Maria Santos',
    categoria: 'Preparação de Motores',
    capa: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop'
  },
  {
    id: 4,
    titulo: 'Sistema de Transmissão Explicado',
    descricao: 'Câmbio manual, automático e CVT - funcionamento e diagnóstico',
    preco: 34.90,
    avaliacao: 4.7,
    paginas: 150,
    totalAvaliacoes: 98,
    autor: 'Carlos Pereira',
    categoria: 'Mecânica Básica',
    capa: 'https://images.unsplash.com/photo-1563729993-2965313a964a?w=300&h=400&fit=crop'
  },
  {
    id: 5,
    titulo: 'Diagnóstico Avançado de Falhas',
    descricao: 'Técnicas profissionais para identificar e solucionar problemas complexos',
    preco: 54.90,
    avaliacao: 4.9,
    paginas: 220,
    autor: 'Roberto Ferreira',
    totalAvaliacoes: 150,
    categoria: 'Diagnóstico de Problemas',
    capa: 'https://images.unsplash.com/photo-1504222405929-23d24245c345?w=300&h=400&fit=crop'
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
