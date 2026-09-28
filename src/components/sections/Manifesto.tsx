import { stats } from "@/content/site";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";

export function Manifesto() {
  return (
    <section aria-label="Sobre a Horizonte" className="container-page flex flex-col items-center gap-20 py-28 lg:py-40">
      <Reveal>
        <p className="display-l max-w-5xl text-center text-balance">
          Há vinte anos, conectamos famílias aos imóveis mais exclusivos de São Paulo —{" "}
          <em className="text-bronze">com discrição, curadoria</em> e atenção a cada detalhe.
        </p>
      </Reveal>
      <dl className="grid w-full grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="flex flex-col-reverse items-center gap-2 border-t border-night py-8 text-center">
            <dt className="overline text-ink-soft">{s.label}</dt>
            <dd className="display-l">
              <Counter to={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
