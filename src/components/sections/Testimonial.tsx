import { images } from "@/content/site";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonial() {
  return (
    <section aria-label="Depoimento de cliente" className="relative isolate overflow-hidden text-canvas">
      <ImageReveal src={images.testimonial} alt="" sizes="100vw" frameClassName="!absolute inset-0 -z-20" parallax={10} />
      <div className="absolute inset-0 -z-10 bg-night/85" />
      <figure className="container-page flex flex-col items-center gap-10 py-32 text-center lg:py-44">
        <Reveal><p className="label tracking-[0.5em] text-bronze" aria-label="5 de 5 estrelas">★ ★ ★ ★ ★</p></Reveal>
        <Reveal delay={0.1}>
          <blockquote className="display-l max-w-5xl italic">
            “Encontraram em três semanas a casa que procurávamos havia dois anos. E sem nos mostrar nada que não fizesse
            sentido.”
          </blockquote>
        </Reveal>
        <Reveal delay={0.2}><figcaption className="overline opacity-80">Marina e Rodrigo Albuquerque — Jardim Europa</figcaption></Reveal>
      </figure>
    </section>
  );
}
