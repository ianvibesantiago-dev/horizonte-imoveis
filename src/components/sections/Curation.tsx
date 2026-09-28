import { images, pillars, whatsappUrl } from "@/content/site";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function Curation() {
  return (
    <section id="curadoria" aria-labelledby="curadoria-title" className="grid scroll-mt-20 bg-sand lg:grid-cols-[minmax(0,620px)_1fr]">
      <ImageReveal src={images.interior} alt="Sala de estar ampla com janelas do piso ao teto" sizes="(min-width:1024px) 45vw, 100vw" frameClassName="min-h-[420px] lg:min-h-[760px]" parallax={8} />
      <div className="flex flex-col justify-center gap-8 px-6 py-20 md:px-12 lg:px-24 lg:py-32">
        <Reveal className="flex flex-col gap-6">
          <p className="overline text-bronze">Nosso jeito</p>
          <h2 id="curadoria-title" className="display-l">
            <em>Curadoria,</em>
            <br />
            não catálogo.
          </h2>
          <p className="max-w-lg text-lg text-ink-soft">
            Visitamos cada imóvel antes de apresentá-lo. Você recebe poucas opções — as certas.
          </p>
        </Reveal>
        <ul>
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={0.1 + i * 0.1} className="grid gap-2 border-t border-night/20 py-6 sm:grid-cols-[240px_1fr] sm:gap-8">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="text-ink-soft">{p.description}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.4}>
          <Button href={whatsappUrl("Olá! Quero agendar uma conversa com um consultor.")} target="_blank" rel="noopener">
            Agendar conversa
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
