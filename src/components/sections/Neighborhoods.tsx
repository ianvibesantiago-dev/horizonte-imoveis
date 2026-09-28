import Image from "next/image";
import { neighborhoodTiles, properties } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function Neighborhoods() {
  return (
    <section id="bairros" aria-labelledby="bairros-title" className="container-page flex scroll-mt-20 flex-col gap-12 py-28 lg:py-40">
      <Reveal className="flex flex-col gap-4">
        <p className="overline text-bronze">Onde atuamos</p>
        <h2 id="bairros-title" className="display-l">Os endereços mais desejados.</h2>
      </Reveal>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
        {neighborhoodTiles.map((n, i) => {
          const count = properties.filter((p) => p.neighborhood === n.name).length;
          return (
            <Reveal as="li" key={n.name} delay={i * 0.1}>
              <a
                href={`/?bairro=${encodeURIComponent(n.name)}#imoveis`}
                className={`group relative isolate flex flex-col justify-end overflow-hidden rounded-sm p-8 text-canvas ${i % 2 ? "h-[380px] lg:h-[440px]" : "h-[380px] lg:h-[520px]"}`}
              >
                <Image src={n.image} alt="" fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="-z-20 object-cover transition-transform duration-[1.4s] ease-[var(--ease-luxe)] group-hover:scale-110" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night/90 via-night/20 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
                <span className="overline opacity-70">{count} {count === 1 ? "imóvel" : "imóveis"}</span>
                <span className="display-m mt-2 flex items-center justify-between gap-4">
                  {n.name}
                  <span aria-hidden className="translate-x-[-8px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">→</span>
                </span>
              </a>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
