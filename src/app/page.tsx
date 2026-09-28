import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Properties } from "@/components/sections/Properties";
import { Curation } from "@/components/sections/Curation";
import { Neighborhoods } from "@/components/sections/Neighborhoods";
import { Testimonial } from "@/components/sections/Testimonial";
import { SellCta } from "@/components/sections/SellCta";
import { Footer } from "@/components/sections/Footer";
import type { Filters } from "@/components/sections/SearchForm";

const pick = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) || undefined;

export default async function Home(props: PageProps<"/">) {
  const sp = await props.searchParams;
  const filters: Filters = { bairro: pick(sp.bairro), tipo: pick(sp.tipo), suites: pick(sp.suites), preco: pick(sp.preco) };

  return (
    <>
      <Header />
      <main>
        <Hero filters={filters} />
        <Manifesto />
        <Properties filters={filters} showAll={pick(sp.todos) === "1"} />
        <Curation />
        <Neighborhoods />
        <Testimonial />
        <SellCta />
      </main>
      <Footer />
    </>
  );
}
