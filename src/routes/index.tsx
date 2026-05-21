import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar,
  Mail,
  MessageCircle,
  Check,
  ChevronDown,
  Sparkles,
  Zap,
  Target,
  Rocket,
  Search,
  Palette,
  Code2,
  Send,
  Quote,
  Menu,
  X,
  ArrowRight,
  TrendingDown,
  EyeOff,
  ShieldAlert,
  Clock,
} from "lucide-react";
import logo from "@/assets/zenoni-logo.svg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Zenoni Agency — Landing pages qui convertissent vos visiteurs en clients" },
      {
        name: "description",
        content:
          "Zenoni Agency conçoit des landing pages premium orientées conversion pour TPE/PME, startups et SaaS. Design glassmorphique, performance, résultats. Réservez votre appel découverte.",
      },
      { property: "og:title", content: "Zenoni Agency — Landing pages qui convertissent" },
      {
        property: "og:description",
        content:
          "Des sites one-page premium qui transforment vos visiteurs en clients. Design moderne, performance, conversion.",
      },
    ],
  }),
});

const CAL_URL = "https://cal.com/ilan-b-zenoni-agency/appel?overlayCalendar=true";
const MAIL = "admin@zenoni.agency";
const WHATSAPP = "https://wa.me/41792272134";

function Orbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="orb orb-a"
        style={{
          top: "-10%",
          left: "-10%",
          width: 520,
          height: 520,
          background: "radial-gradient(circle, #d54545 0%, transparent 70%)",
        }}
      />
      <div
        className="orb orb-b"
        style={{
          top: "20%",
          right: "-15%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, #7a1fff 0%, transparent 70%)",
        }}
      />
      <div
        className="orb orb-c"
        style={{
          bottom: "-15%",
          left: "30%",
          width: 560,
          height: 560,
          background: "radial-gradient(circle, #ff4d8a 0%, transparent 70%)",
        }}
      />
      <div
        className="orb orb-a"
        style={{
          top: "60%",
          left: "-5%",
          width: 420,
          height: 420,
          background: "radial-gradient(circle, #1a4dff 0%, transparent 70%)",
          animationDelay: "-8s",
        }}
      />
      <div className="noise" />
    </div>
  );
}

function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d54545]/60";
  const styles =
    variant === "primary"
      ? "bg-[#d54545] text-white shadow-[0_8px_30px_-4px_rgba(213,69,69,0.55)] hover:shadow-[0_12px_40px_-4px_rgba(213,69,69,0.75)] hover:-translate-y-0.5 hover:bg-[#e25555]"
      : "glass text-white hover:bg-white/10";
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#probleme", label: "Pourquoi nous" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#portfolio", label: "Réalisations" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
      <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-5">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="Zenoni Agency" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <CTAButton href={CAL_URL} icon={Calendar}>
            Réserver un appel
          </CTAButton>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-full glass p-2 text-white"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="glass mt-2 rounded-2xl p-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/80"
              >
                {l.label}
              </a>
            ))}
            <CTAButton href={CAL_URL} icon={Calendar} className="mt-2 justify-center">
              Réserver un appel
            </CTAButton>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/85">
          <Sparkles className="h-3.5 w-3.5 text-[#d54545]" />
          Landing pages premium · Conversion-first
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Une landing page qui transforme
          <br />
          vos visiteurs en{" "}
          <span className="relative inline-block">
            <span className="text-zenoni">clients</span>
            <span
              className="absolute -inset-2 -z-10 rounded-3xl blur-2xl"
              style={{ background: "rgba(213,69,69,0.35)" }}
            />
          </span>
          .
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
          Zenoni Agency conçoit des sites one-page premium pour TPE/PME, startups et SaaS.
          Design moderne, message percutant, performance — pensés pour convertir dès la première
          seconde.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton href={CAL_URL} icon={Calendar}>
            Réserver un appel découverte
          </CTAButton>
          <CTAButton href="#portfolio" variant="ghost" icon={ArrowRight}>
            Voir les réalisations
          </CTAButton>
        </div>

        {/* Hero mock card */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="glass-strong rounded-3xl p-3 sm:p-4">
            <div className="rounded-2xl bg-black/40 p-1.5">
              <div className="flex items-center gap-1.5 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-[10px] text-white/50">votre-site.com</span>
              </div>
              <div className="grid gap-4 rounded-xl bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:grid-cols-3 sm:p-10">
                <div className="sm:col-span-2 text-left">
                  <div className="h-3 w-24 rounded-full bg-white/15" />
                  <div className="mt-4 h-8 w-full rounded-md bg-white/20" />
                  <div className="mt-2 h-8 w-4/5 rounded-md bg-white/15" />
                  <div className="mt-5 h-3 w-3/4 rounded-full bg-white/10" />
                  <div className="mt-2 h-3 w-2/3 rounded-full bg-white/10" />
                  <div className="mt-6 flex gap-2">
                    <div className="h-9 w-32 rounded-full bg-[#d54545]" />
                    <div className="h-9 w-28 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="glass-red rounded-xl p-4">
                  <div className="h-2 w-12 rounded-full bg-white/30" />
                  <div className="mt-3 h-6 w-16 rounded bg-white/80" />
                  <div className="mt-2 h-2 w-20 rounded-full bg-white/20" />
                  <div className="mt-4 grid grid-cols-3 gap-1.5">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-6 rounded bg-white/10" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute -inset-10 -z-10 rounded-[3rem] blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(213,69,69,0.35), transparent 70%)",
            }}
          />
        </div>

        {/* Trust stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6">
          {[
            { v: "+250%", l: "Conversions moyennes" },
            { v: "< 2s", l: "Temps de chargement" },
            { v: "100%", l: "Sur-mesure" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl px-4 py-5">
              <div className="text-2xl font-bold text-white sm:text-3xl">{s.v}</div>
              <div className="mt-1 text-xs text-white/60 sm:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    {
      icon: EyeOff,
      title: "Invisible en ligne",
      desc: "Sans site, vos prospects ne vous trouvent pas. Vos concurrents, eux, prennent toute la place.",
    },
    {
      icon: ShieldAlert,
      title: "Crédibilité en chute",
      desc: "Un site daté ou amateur fait fuir 75% des visiteurs en moins de 5 secondes.",
    },
    {
      icon: TrendingDown,
      title: "Prospects qui s'évaporent",
      desc: "Chaque visiteur perdu est un client qui va directement chez le concurrent d'à côté.",
    },
    {
      icon: Clock,
      title: "Temps & énergie gaspillés",
      desc: "Sans outil qui convertit 24/7, vous courez après chaque lead manuellement.",
    },
  ];
  return (
    <section id="probleme" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/85">
            <ShieldAlert className="h-3.5 w-3.5 text-[#d54545]" />
            Le vrai coût de l'inaction
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Pas de site (ou un mauvais site) ?<br />
            <span className="text-zenoni">Ça vous coûte plus cher que vous ne pensez.</span>
          </h2>
          <p className="mt-5 text-white/70">
            En 2026, votre site est votre premier commercial. S'il est absent, lent ou
            mal-foutu, c'est votre chiffre d'affaires qui en paie le prix.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="glass group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="glass-red inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                <p.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const plans = [
    {
      name: "Essentiel",
      price: "899",
      tag: "Pour démarrer fort",
      icon: Zap,
      features: [
        "Landing page one-page sur-mesure",
        "Design responsive premium",
        "Optimisation SEO de base",
        "Formulaire de contact",
        "Mise en ligne incluse",
        "Livraison en 7 jours",
      ],
      featured: false,
    },
    {
      name: "Pro",
      price: "1'690",
      tag: "Le plus populaire",
      icon: Target,
      features: [
        "Tout de l'offre Essentiel",
        "Copywriting orienté conversion",
        "Animations & micro-interactions",
        "Intégration analytics & pixel",
        "Connexion Calendly / CRM",
        "2 cycles de révisions",
        "Support 30 jours",
      ],
      featured: true,
    },
    {
      name: "Sur-mesure",
      price: "Sur devis",
      tag: "Projets ambitieux",
      icon: Rocket,
      features: [
        "Tout de l'offre Pro",
        "Multi-pages / espace membre",
        "Intégrations backend avancées",
        "Stratégie de conversion dédiée",
        "A/B testing & itérations",
        "Support prioritaire",
      ],
      featured: false,
    },
  ];
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/85">
            <Sparkles className="h-3.5 w-3.5 text-[#d54545]" />
            Nos offres
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Une formule pour chaque ambition
          </h2>
          <p className="mt-5 text-white/70">
            Des prix clairs, un livrable premium, aucun frais caché. Vous savez exactement ce
            que vous payez et ce que vous obtenez.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                p.featured ? "glass-strong ring-1 ring-[#d54545]/50" : "glass"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#d54545] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-[#d54545]/40">
                  {p.tag}
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="glass-red inline-flex h-11 w-11 items-center justify-center rounded-xl">
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{p.name}</h3>
              </div>
              {!p.featured && (
                <div className="mt-1 text-xs text-white/55">{p.tag}</div>
              )}
              <div className="mt-6 flex items-baseline gap-1">
                {p.price !== "Sur devis" && (
                  <span className="text-sm text-white/60">CHF</span>
                )}
                <span className="text-4xl font-bold text-white">{p.price}</span>
                {p.price !== "Sur devis" && (
                  <span className="text-sm text-white/60">.-</span>
                )}
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d54545]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <CTAButton
                href={CAL_URL}
                variant={p.featured ? "primary" : "ghost"}
                icon={Calendar}
                className="mt-7 w-full justify-center"
              >
                Réserver un appel
              </CTAButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      icon: Search,
      title: "Découverte",
      desc: "Appel stratégique pour comprendre votre business, votre cible et vos objectifs de conversion.",
      d: "Jour 1",
    },
    {
      icon: Palette,
      title: "Design",
      desc: "Maquette sur-mesure avec direction artistique alignée à votre marque. Validation rapide.",
      d: "Jour 2-3",
    },
    {
      icon: Code2,
      title: "Développement",
      desc: "Intégration premium, responsive, performante. Animations, SEO et tracking inclus.",
      d: "Jour 4-6",
    },
    {
      icon: Send,
      title: "Mise en ligne",
      desc: "Déploiement, connexion à votre domaine, formation rapide. Vous êtes opérationnel.",
      d: "Jour 7",
    },
  ];
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/85">
            <Rocket className="h-3.5 w-3.5 text-[#d54545]" />
            Notre process
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            De l'idée au lancement en{" "}
            <span className="text-zenoni">7 jours</span>
          </h2>
          <p className="mt-5 text-white/70">
            Un process carré, transparent et rapide. Vous savez où on en est à chaque étape.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="glass relative rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-5xl font-bold text-white/10">0{i + 1}</span>
                <div className="glass-red inline-flex h-11 w-11 items-center justify-center rounded-xl">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
              <div className="mt-1 text-xs font-medium text-[#d54545]">{s.d}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      name: "Lumen Studio",
      sector: "Studio créatif",
      colors: ["#d54545", "#1a1a2e"],
    },
    {
      name: "Nova SaaS",
      sector: "Logiciel B2B",
      colors: ["#7a1fff", "#0f0f23"],
    },
    {
      name: "Maison Verde",
      sector: "Restaurant",
      colors: ["#34a853", "#1c1c1c"],
    },
    {
      name: "Atlas Coaching",
      sector: "Coach business",
      colors: ["#ff8a3d", "#1e1e1e"],
    },
    {
      name: "Pulse Fitness",
      sector: "Salle de sport",
      colors: ["#d54545", "#0a0a0a"],
    },
    {
      name: "Wave Studio",
      sector: "Agence digitale",
      colors: ["#1a4dff", "#0f0f23"],
    },
  ];
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/85">
            <Target className="h-3.5 w-3.5 text-[#d54545]" />
            Réalisations
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Des projets qui convertissent
          </h2>
          <p className="mt-5 text-white/70">
            Un aperçu des landing pages livrées récemment. Chaque projet est pensé pour les
            objectifs business du client.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.name}
              className="glass group overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="relative h-48 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})`,
                }}
              >
                <div className="absolute inset-0 opacity-30 mix-blend-overlay [background:radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3">
                  <div className="h-2 w-16 rounded-full bg-white/40" />
                  <div className="mt-2 h-3 w-3/4 rounded-full bg-white/60" />
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-semibold text-white">{p.name}</h3>
                  <div className="text-xs text-white/55">{p.sector}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-[#d54545]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      q: "Site livré en une semaine, design ultra-propre. On a doublé nos demandes de devis en 1 mois.",
      n: "Sophie M.",
      r: "Fondatrice, Atelier Marbre",
    },
    {
      q: "Ilan a compris notre positionnement dès le premier appel. La landing convertit mieux que tout ce qu'on avait avant.",
      n: "Julien K.",
      r: "CEO, FlowDesk SaaS",
    },
    {
      q: "Travail premium, communication carrée, prix honnête. Je recommande sans hésiter Zenoni.",
      n: "Camille R.",
      r: "Coach business",
    },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/85">
            <Quote className="h-3.5 w-3.5 text-[#d54545]" />
            Ils nous ont fait confiance
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {t.map((x) => (
            <div key={x.n} className="glass rounded-3xl p-7">
              <Quote className="h-7 w-7 text-[#d54545]" />
              <p className="mt-4 text-base leading-relaxed text-white/85">"{x.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="glass-red flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
                  {x.n.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{x.n}</div>
                  <div className="text-xs text-white/55">{x.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Combien de temps pour livrer ma landing page ?",
      a: "En moyenne 7 jours ouvrés pour les formules Essentiel et Pro, à partir de la validation du brief. Les projets sur-mesure prennent généralement 2 à 4 semaines selon la complexité.",
    },
    {
      q: "Je n'ai ni logo ni contenu, c'est un problème ?",
      a: "Non. On vous guide sur le copywriting, la structure et l'identité visuelle. Pour le logo, on peut travailler avec ce que vous avez ou vous orienter vers un designer partenaire.",
    },
    {
      q: "Le site est-il vraiment optimisé pour convertir ?",
      a: "Oui. Chaque section, chaque CTA, chaque mot est pensé pour guider votre visiteur vers l'action. On s'appuie sur les bonnes pratiques de copywriting et de design conversion-first.",
    },
    {
      q: "Puis-je modifier mon site moi-même après la livraison ?",
      a: "Oui, on vous remet un site facile à éditer (textes, images, prix) via une interface simple. On forme aussi votre équipe en 30 minutes lors de la mise en ligne.",
    },
    {
      q: "Quels sont les frais cachés ?",
      a: "Aucun. Le prix inclut design, développement, mise en ligne et 30 jours de support. L'hébergement et le nom de domaine restent à votre charge (~10 CHF/mois).",
    },
    {
      q: "Et si je ne suis pas satisfait ?",
      a: "Toutes les formules incluent des cycles de révisions. On ne livre pas tant que vous n'êtes pas pleinement satisfait du résultat.",
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/85">
            <Sparkles className="h-3.5 w-3.5 text-[#d54545]" />
            FAQ
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Vos questions, nos réponses
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const open = openIdx === i;
            return (
              <div key={it.q} className="glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {it.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#d54545] transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-white/70">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-14">
          <div
            className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: "rgba(213,69,69,0.45)" }}
          />
          <div className="relative">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/85">
              <Calendar className="h-3.5 w-3.5 text-[#d54545]" />
              Prêt à passer à l'action ?
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Réservez votre appel découverte
              <br />
              <span className="text-zenoni">gratuit & sans engagement.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              30 minutes pour comprendre votre projet, vos objectifs et voir si on peut vous
              aider. Pas de blabla, pas de pression.
            </p>

            <div className="mt-9 flex justify-center">
              <CTAButton href={CAL_URL} icon={Calendar}>
                Réserver mon appel
              </CTAButton>
            </div>

            <div className="mx-auto mt-10 flex max-w-md items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-wider text-white/45">
                ou contactez-nous
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${MAIL}`}
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-white transition-all hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-[#d54545]" />
                {MAIL}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-white transition-all hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 text-[#d54545]" />
                WhatsApp : 079 227 21 34
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative pt-10 pb-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass rounded-3xl p-8">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
            <div className="max-w-sm">
              <img src={logo} alt="Zenoni Agency" className="h-9 w-auto" />
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Landing pages premium pour entreprises ambitieuses. Design, conversion,
                résultats.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 text-sm sm:gap-16">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/45">
                  Navigation
                </div>
                <ul className="mt-3 space-y-2">
                  <li><a href="#services" className="text-white/75 hover:text-white">Services</a></li>
                  <li><a href="#process" className="text-white/75 hover:text-white">Process</a></li>
                  <li><a href="#portfolio" className="text-white/75 hover:text-white">Réalisations</a></li>
                  <li><a href="#faq" className="text-white/75 hover:text-white">FAQ</a></li>
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/45">
                  Contact
                </div>
                <ul className="mt-3 space-y-2">
                  <li><a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white">Réserver un appel</a></li>
                  <li><a href={`mailto:${MAIL}`} className="text-white/75 hover:text-white">{MAIL}</a></li>
                  <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white">WhatsApp</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
            <div className="text-xs text-white/50">
              © {new Date().getFullYear()} Zenoni Agency. Tous droits réservés.
            </div>
            <div className="text-xs text-white/50">Conçu avec passion en Suisse 🇨🇭</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Orbs />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Problem />
          <Services />
          <Process />
          <Portfolio />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
