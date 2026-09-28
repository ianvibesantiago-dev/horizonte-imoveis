// Conteúdo do site — mesmo do Figma (Horizonte Imóveis — Site). Editar aqui atualiza todas as seções.

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80`;

export const company = {
  name: "Horizonte",
  tagline: "Imóveis de alto padrão",
  creci: "CRECI 12.345-J",
  address: "Rua Oscar Freire, 900 — Jardins, São Paulo",
  phone: "(11) 3060-2000",
  whatsapp: "551130602000",
  email: "contato@horizonte.com.br",
} as const;

export const whatsappUrl = (msg = "Olá! Gostaria de falar com um consultor da Horizonte.") =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(msg)}`;

export const nav = [
  { href: "#imoveis", label: "Comprar" },
  { href: "#curadoria", label: "Nosso jeito" },
  { href: "#bairros", label: "Bairros" },
  { href: "#anunciar", label: "Anunciar" },
] as const;

export const images = {
  hero: unsplash("1600585154340-be6161a56a0c"),
  interior: unsplash("1600607687939-ce8a6c25118c"),
  testimonial: unsplash("1600210492486-724fe5c67fb0"),
} as const;

export const stats = [
  { prefix: "R$ ", value: 2.4, decimals: 1, suffix: " bi", label: "em imóveis negociados" },
  { prefix: "", value: 1200, decimals: 0, suffix: "+", label: "famílias atendidas" },
  { prefix: "", value: 20, decimals: 0, suffix: " anos", label: "de mercado de luxo" },
  { prefix: "", value: 48, decimals: 0, suffix: "h", label: "para a primeira visita" },
] as const;

export const neighborhoods = ["Jardins", "Itaim Bibi", "Vila Nova Conceição", "Alto de Pinheiros"] as const;
export type Neighborhood = (typeof neighborhoods)[number];
export const propertyTypes = ["Apartamento", "Cobertura", "Casa"] as const;
export type PropertyType = (typeof propertyTypes)[number];

export type Property = {
  slug: string;
  title: string;
  tag: string;
  type: PropertyType;
  neighborhood: Neighborhood;
  suites: number;
  area: number;
  parking: number;
  price: number;
  image: string;
};

export const properties: Property[] = [
  { slug: "residencia-alameda", title: "Residência Alameda", tag: "Lançamento", type: "Casa", neighborhood: "Jardins", suites: 4, area: 420, parking: 4, price: 8_900_000, image: unsplash("1613490493576-7fde63acd811") },
  { slug: "cobertura-ibirapuera", title: "Cobertura Ibirapuera", tag: "Exclusivo", type: "Cobertura", neighborhood: "Vila Nova Conceição", suites: 3, area: 380, parking: 5, price: 12_500_000, image: unsplash("1512917774080-9991f1c4c750") },
  { slug: "casa-jardim-europa", title: "Casa Jardim Europa", tag: "Pronto para morar", type: "Casa", neighborhood: "Alto de Pinheiros", suites: 5, area: 760, parking: 6, price: 15_800_000, image: unsplash("1613977257363-707ba9348227") },
  { slug: "edificio-horto", title: "Edifício Horto", tag: "Off-market", type: "Apartamento", neighborhood: "Itaim Bibi", suites: 3, area: 280, parking: 3, price: 6_400_000, image: unsplash("1600596542815-ffad4c1539a9") },
  { slug: "villa-oscar-freire", title: "Villa Oscar Freire", tag: "Novo", type: "Apartamento", neighborhood: "Jardins", suites: 4, area: 340, parking: 4, price: 9_750_000, image: unsplash("1600566753190-17f0baa2a6c3") },
  { slug: "cobertura-faria-lima", title: "Cobertura Faria Lima", tag: "Vista livre", type: "Cobertura", neighborhood: "Itaim Bibi", suites: 4, area: 510, parking: 6, price: 18_200_000, image: unsplash("1580587771525-78b9dba3b914") },
];

export const neighborhoodTiles: { name: Neighborhood; image: string }[] = [
  { name: "Jardins", image: unsplash("1543059080-f9b1272213d5") },
  { name: "Itaim Bibi", image: unsplash("1554168848-228452c09d60") },
  { name: "Vila Nova Conceição", image: unsplash("1580587771525-78b9dba3b914") },
  { name: "Alto de Pinheiros", image: unsplash("1600566753190-17f0baa2a6c3") },
];

export const pillars = [
  { title: "Consultor dedicado", description: "Uma pessoa acompanha você do primeiro café à escritura." },
  { title: "Off-market", description: "Acesso a imóveis que não estão nos portais." },
  { title: "Assessoria jurídica", description: "Due diligence completa antes de qualquer proposta." },
] as const;

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);
