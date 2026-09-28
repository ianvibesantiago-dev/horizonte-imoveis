import { neighborhoods, propertyTypes } from "@/content/site";

export type Filters = { bairro?: string; tipo?: string; suites?: string; preco?: string };

const prices = [
  { value: "", label: "Qualquer valor" },
  { value: "8000000", label: "Até R$ 8 mi" },
  { value: "12000000", label: "Até R$ 12 mi" },
  { value: "20000000", label: "Até R$ 20 mi" },
];

const fields = [
  { name: "bairro", label: "Localização", options: [{ value: "", label: "Todos os bairros" }, ...neighborhoods.map((n) => ({ value: n, label: n }))] },
  { name: "tipo", label: "Tipo", options: [{ value: "", label: "Todos os tipos" }, ...propertyTypes.map((t) => ({ value: t, label: t }))] },
  { name: "suites", label: "Suítes", options: [{ value: "", label: "Qualquer" }, ...[3, 4, 5].map((n) => ({ value: String(n), label: `${n}+` }))] },
  { name: "preco", label: "Faixa de preço", options: prices },
] as const;

/**
 * Busca funcional sem JavaScript: um <form method="get"> que filtra a lista de imóveis
 * via query string (?bairro=Jardins…) e rola até a seção #imoveis.
 */
export function SearchForm({ filters }: { filters: Filters }) {
  return (
    <form action="/#imoveis" method="get" role="search" aria-label="Buscar imóveis" className="grid bg-surface text-night shadow-2xl sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_auto]">
      {fields.map((f) => (
        <label key={f.name} className="flex flex-col gap-2 border-b border-line px-6 py-5 lg:border-r lg:border-b-0 lg:px-8">
          <span className="overline text-bronze">{f.label}</span>
          <select name={f.name} defaultValue={filters[f.name] ?? ""} className="-ml-1 cursor-pointer bg-transparent text-base outline-none">
            {f.options.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </label>
      ))}
      <button type="submit" className="label bg-night px-10 py-5 text-canvas transition-colors duration-500 hover:bg-bronze sm:col-span-2 lg:col-span-1">
        Buscar
      </button>
    </form>
  );
}
