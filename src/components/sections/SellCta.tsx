import { whatsappUrl } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function SellCta() {
  return (
    <section id="anunciar" aria-labelledby="anunciar-title" className="container-page flex scroll-mt-20 flex-col justify-between gap-10 py-24 lg:flex-row lg:items-end lg:py-32">
      <Reveal className="flex flex-col gap-4">
        <p className="overline text-bronze">Proprietário?</p>
        <h2 id="anunciar-title" className="display-l">
          Seu imóvel merece
          <br />
          <em>o comprador certo.</em>
        </h2>
      </Reveal>
      <Reveal delay={0.15} className="flex flex-wrap gap-4">
        <Button variant="outline" href={whatsappUrl("Olá! Quero uma avaliação do meu imóvel.")} target="_blank" rel="noopener">
          Avaliar meu imóvel
        </Button>
        <Button href={whatsappUrl("Olá! Quero anunciar meu imóvel com a Horizonte.")} target="_blank" rel="noopener">
          Anunciar com a Horizonte
        </Button>
      </Reveal>
    </section>
  );
}
