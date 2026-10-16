export type Imovel = {
  slug: string;
  nome: string;
  cidade: string;
  estado: "MG" | "ES" | "SP";
  tipo: "Casa" | "Cobertura" | "Casa de campo";
  preco: number;
  area: number;
  suites: number;
  vagas: number;
  imagem: string | null;
  descricao: string;
  disponivelNoSite: boolean;
};

export const imoveis: Imovel[] = [
  {
    slug: "villa-serra-dourada",
    nome: "Villa Serra Dourada",
    cidade: "Nova Lima",
    estado: "MG",
    tipo: "Casa",
    preco: 8950000,
    area: 620,
    suites: 5,
    vagas: 6,
    imagem: "/imoveis/villa-serra-dourada/entrada-varanda.webp",
    descricao: "Arquitetura contemporânea em harmonia com as montanhas.",
    disponivelNoSite: true,
  },
  {
    slug: "casa-lagoa-prime",
    nome: "Casa Lagoa Prime",
    cidade: "Lagoa Santa",
    estado: "MG",
    tipo: "Casa",
    preco: 4250000,
    area: 410,
    suites: 4,
    vagas: 4,
    imagem: "/imoveis/casa-lagoa-prime/fachada.webp",
    descricao: "Leveza, sofisticação e integração com a natureza.",
    disponivelNoSite: true,
  },
  {
    slug: "penthouse-mirante-do-vale",
    nome: "Penthouse Mirante do Vale",
    cidade: "Belo Horizonte",
    estado: "MG",
    tipo: "Cobertura",
    preco: 6900000,
    area: 480,
    suites: 4,
    vagas: 5,
    imagem: "/imoveis/penthouse-mirante-do-vale/fachada.webp",
    descricao: "Uma experiência exclusiva acima da paisagem urbana.",
    disponivelNoSite: true,
  },
  {
    slug: "reserva-das-acacias",
    nome: "Reserva das Acácias",
    cidade: "Brumadinho",
    estado: "MG",
    tipo: "Casa de campo",
    preco: 5350000,
    area: 540,
    suites: 5,
    vagas: 6,
    imagem: null,
    descricao: "Um refúgio de arquitetura autoral e tranquilidade.",
    disponivelNoSite: false,
  },
  {
    slug: "maison-cote-verte",
    nome: "Maison Côte Verte",
    cidade: "Vitória",
    estado: "ES",
    tipo: "Casa",
    preco: 7250000,
    area: 520,
    suites: 5,
    vagas: 4,
    imagem: null,
    descricao: "Design contemporâneo, luminosidade e elegância.",
    disponivelNoSite: false,
  },
  {
    slug: "estancia-vale-do-sol",
    nome: "Estância Vale do Sol",
    cidade: "Campos do Jordão",
    estado: "SP",
    tipo: "Casa de campo",
    preco: 6100000,
    area: 470,
    suites: 4,
    vagas: 5,
    imagem: null,
    descricao: "O encontro entre arquitetura serrana e conforto.",
    disponivelNoSite: false,
  },
];

export const formatarPreco = (valor: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(valor);




