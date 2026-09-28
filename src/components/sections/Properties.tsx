import { properties } from "@/content/site";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { Reveal } from "@/components/motion/Reveal";
import type { Filters } from "@/components/sections/SearchForm";

function applyFilters(f: Filters) {
  return properties.filter(
    (p) =>
      (!f.bairro || p.neighborhood === f.bairro) &&
      (!f.tipo || p.type === f.tipo) &&
      (!f.suites || p.suites >= Number(f.suites)) &&
      (!f.preco || p.price <= Number(f.preco)),
  );
}

export function Properties({ filters, showAll = false }: { filters: Filters; showAll?: boolean }) {
  const filtered = Object.values(filters).some(Boolean);
  const list = filtered ? applyFilters(filters) : showAll ? properties : properties.slice(0, 3);

  return (
    <section id="imoveis" aria-labelledby="imoveis-title" className="container-page flex scroll-mt-24 flex-col gap-12 pb-28 lg:pb-40">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal className="flex flex-col gap-4">
          <p className="overline text-bronze">{filtered ? "Resultado da busca" : "Destaques"}</p>
          <h2 id="imoveis-title" className="display-l">
            {filtered ? `${list.length} ${list.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}` : "Seleção da semana"}
          </h2>
        </Reveal>
        {(filtered || !showAll) && (
          <a href={filtered ? "/#imoveis" : "/?todos=1#imoveis"} className="label w-fit border-b border-night pb-1 transition-colors hover:border-bronze hover:text-bronze">
            {filtered ? "Limpar filtros" : "Ver todos os imóveis"}
          </a>
        )}
      </div>

      {list.length > 0 ? (
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <PropertyCard key={p.slug} property={p} index={i} />
          ))}
        </div>
      ) : (
        <p className="display-m border-y border-line py-16 text-center text-ink-soft">
          Nenhum imóvel com esses filtros — mas temos opções <em className="text-bronze">off-market</em>. Fale com um consultor.
        </p>
      )}
    </section>
  );
}
