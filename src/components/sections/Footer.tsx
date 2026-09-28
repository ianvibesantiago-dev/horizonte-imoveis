import { company, nav } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-night text-canvas">
      <div className="container-page grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] lg:py-24">
        <div className="flex flex-col gap-4">
          <p className="font-display text-3xl tracking-[0.35em]">HORIZONTE</p>
          <p className="max-w-xs opacity-70">
            Imóveis de alto padrão em São Paulo desde 2006. {company.creci}.
          </p>
        </div>
        <FooterCol title="Imóveis">
          {nav.map((l) => (
            <li key={l.href}><a href={l.href} className="opacity-80 hover:opacity-100">{l.label}</a></li>
          ))}
        </FooterCol>
        <FooterCol title="Empresa">
          {["Sobre", "Consultores", "Imprensa", "Carreiras"].map((l) => (
            <li key={l} className="opacity-80">{l}</li>
          ))}
        </FooterCol>
        <FooterCol title="Contato">
          <li className="opacity-80">{company.address}</li>
          <li><a href={`tel:+55${company.phone.replace(/\D/g, "")}`} className="opacity-80 hover:opacity-100">{company.phone}</a></li>
          <li><a href={`mailto:${company.email}`} className="opacity-80 hover:opacity-100">{company.email}</a></li>
        </FooterCol>
      </div>
      <p className="container-page border-t border-canvas/10 py-6 text-sm opacity-50">
        © {year} Horizonte Imóveis · Política de privacidade
      </p>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="overline text-bronze">{title}</h2>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}
