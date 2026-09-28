import { formatPrice, whatsappUrl, type Property } from "@/content/site";
import { ImageReveal } from "@/components/motion/ImageReveal";

// Espelha o componente "PropertyCard" do Figma.
export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  const { title, tag, neighborhood, suites, area, parking, price, image } = property;
  return (
    <article className="group flex flex-col gap-4">
      <div className="relative">
        <ImageReveal
          src={image}
          alt={`${title}, ${neighborhood}`}
          sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 90vw"
          frameClassName="aspect-[4/3] rounded-sm"
          className="transition-transform duration-[1.2s] ease-[var(--ease-luxe)] group-hover:scale-105"
          delay={(index % 3) * 0.12}
        />
        <span className="label absolute top-4 left-4 bg-canvas px-3 py-1.5 text-night">{tag}</span>
      </div>
      <p className="overline text-bronze">{neighborhood} · São Paulo</p>
      <h3 className="display-m">
        <a href={whatsappUrl(`Olá! Tenho interesse no imóvel ${title} (${neighborhood}).`)} target="_blank" rel="noopener" className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
          {title}
        </a>
      </h3>
      <p className="text-sm text-ink-soft">
        {suites} suítes <span aria-hidden>·</span> {area} m² <span aria-hidden>·</span> {parking} vagas
      </p>
      <p className="border-t border-sand pt-4 text-xl font-medium">{formatPrice(price)}</p>
    </article>
  );
}
