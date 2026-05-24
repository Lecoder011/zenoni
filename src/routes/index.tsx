import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  Mail,
  MessageCircle,
  Check,
  ChevronDown,
  Sparkles,
  Target,
  Rocket,
  Search,
  Palette,
  Code2,
  Send,
  Menu,
  X,
  ArrowRight,
  TrendingDown,
  EyeOff,
  ShieldAlert,
  Clock,
  ArrowUpRight,
  Server,
  Lock,
  Globe,
} from "lucide-react";
import logo from "@/assets/zenoni-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Zenoni Agency — Landing pages qui convertissent en 2-4 semaines" },
      {
        name: "description",
        content:
          "Zenoni Agency conçoit des landing pages premium orientées conversion pour TPE/PME, startups et SaaS. Livraison en 2 à 4 semaines. Réservez votre appel découverte.",
      },
      { property: "og:title", content: "Zenoni Agency — Landing pages qui convertissent" },
      {
        property: "og:description",
        content:
          "Des sites one-page premium qui transforment vos visiteurs en clients.",
      },
    ],
  }),
});

const CAL_URL = "https://cal.com/ilan-b-zenoni-agency/appel?overlayCalendar=true";
const MAIL = "admin@zenoni.agency";
const WHATSAPP = "https://wa.me/41792272134";

/* ============== Intro loader ============== */
function Intro() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 3500);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[100] intro-fade-out pointer-events-none">
      <div className="absolute inset-0 bg-[#0e0e12] intro-curtain">
        <div className="absolute inset-0 bg-grid-fine opacity-20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="intro-logo flex items-baseline gap-2">
            <span className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
              Zenoni
            </span>
            <span className="h-2 w-2 rounded-full bg-[#d54545] animate-pulse" />
          </div>
          <div className="mt-3 text-[10px] uppercase tracking-[0.4em] text-white/50 intro-logo">
            Agency
          </div>
          <div className="mt-8 h-px w-48 overflow-hidden bg-white/10">
            <div className="h-full w-full bg-[#d54545] intro-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== Reveal on scroll ============== */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ============== Primitives ============== */
function CTA({
  href,
  children,
  variant = "primary",
  className = "",
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#d54545]/40";
  const styles =
    variant === "primary"
      ? "cta-primary"
      : variant === "dark"
      ? "cta-dark"
      : "bg-transparent text-[#15151a] border border-[#15151a]/15 transition-all duration-300 hover:border-[#15151a]/35 hover:bg-[#15151a]/[0.04] hover:-translate-y-0.5";
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {Icon && <Icon className="relative z-10 h-4 w-4" />}
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 -mr-1 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#15151a]/12 bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#15151a]/70">
      <span className="h-1.5 w-1.5 rounded-full bg-[#d54545]" />
      {children}
    </div>
  );
}

/* ============== Header ============== */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#probleme", label: "Le constat" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-5 transition-all duration-300">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full pl-4 pr-2 sm:pl-5 sm:pr-2.5 py-2 transition-all duration-300 ${
          scrolled ? "nav-glass-strong" : "nav-glass"
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Zenoni Agency" className="h-7 w-7 rounded-md" />
          <span className="text-base font-bold tracking-tight text-[#15151a]">
            Zenoni
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <CTA href={CAL_URL} variant="dark" icon={Calendar}>
            Réserver un appel
          </CTA>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-full border border-[#15151a]/15 bg-white/40 p-2 text-[#15151a]"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl nav-glass-strong rounded-2xl p-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="nav-link justify-start"
              >
                {l.label}
              </a>
            ))}
            <CTA href={CAL_URL} variant="dark" icon={Calendar} className="mt-2 justify-center">
              Réserver un appel
            </CTA>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ============== Hero ============== */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Background pattern + accents */}
      <div className="absolute inset-0 bg-grid mask-fade" />
      <div
        className="accent-blur"
        style={{
          top: -120,
          right: -80,
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(213,69,69,0.22), transparent 70%)",
        }}
      />
      <div
        className="accent-blur"
        style={{
          bottom: -160,
          left: -120,
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(120,140,200,0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <div className="animate-fade-up [animation-delay:200ms]">
          <Eyebrow>Agence web · Suisse</Eyebrow>
        </div>
        <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-[#15151a] sm:text-7xl lg:text-[5.5rem] animate-fade-up [animation-delay:350ms]">
          Des sites qui transforment
          <br />
          vos visiteurs en{" "}
          <span className="relative inline-block">
            <span className="shimmer-text">clients.</span>
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base text-[#15151a]/65 sm:text-lg animate-fade-up [animation-delay:500ms]">
          Zenoni Agency conçoit des landing pages premium pour TPE/PME, startups et SaaS.
          Design sobre, message clair, performance — pensés pour convertir.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up [animation-delay:650ms]">
          <CTA href={CAL_URL} icon={Calendar}>
            Réserver un appel découverte
          </CTA>
          <CTA href="#services" variant="ghost">
            Voir les offres
          </CTA>
        </div>

        {/* Hero mock — styled, no float animation */}
        <div className="relative mx-auto mt-20 max-w-4xl animate-scale-in [animation-delay:800ms]">
          {/* Decorative floating cards behind */}
          <div className="pointer-events-none absolute -left-6 -top-6 hidden sm:block rotate-[-6deg]">
            <div className="surface rounded-2xl px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-[#d54545]/15 flex items-center justify-center">
                  <Sparkles className="h-3.5 w-3.5 text-[#d54545]" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-[#15151a]/50">Conversion</div>
                  <div className="text-sm font-bold text-[#15151a]">+128%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-4 -bottom-6 hidden sm:block rotate-[5deg]">
            <div className="surface rounded-2xl px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-[#15151a] flex items-center justify-center">
                  <Rocket className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-[#15151a]/50">Performance</div>
                  <div className="text-sm font-bold text-[#15151a]">98/100</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-frame rounded-3xl p-3 sm:p-4">
            <div className="rounded-2xl bg-gradient-to-br from-[#15151a] via-[#1a1a22] to-[#0e0e12] p-1.5 shadow-inner overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <div className="ml-3 inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/70">
                  <Lock className="h-2.5 w-2.5" />
                  votre-site.com
                </div>
              </div>
              <div className="relative grid gap-4 rounded-xl p-6 sm:grid-cols-3 sm:p-10">
                {/* subtle dot pattern inside */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#d54545]/30 blur-3xl" />
                <div className="relative sm:col-span-2 text-left">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d54545]" />
                    Landing premium
                  </div>
                  <div className="mt-4 h-8 w-full rounded-md bg-gradient-to-r from-white/40 to-white/10" />
                  <div className="mt-2 h-8 w-4/5 rounded-md bg-gradient-to-r from-white/25 to-white/5" />
                  <div className="mt-5 h-3 w-3/4 rounded-full bg-white/12" />
                  <div className="mt-2 h-3 w-2/3 rounded-full bg-white/12" />
                  <div className="mt-6 flex gap-2">
                    <div className="h-9 w-32 rounded-full bg-[#d54545] shadow-[0_10px_24px_-8px_rgba(213,69,69,0.7)]" />
                    <div className="h-9 w-28 rounded-full border border-white/20 bg-white/5" />
                  </div>
                </div>
                <div className="relative rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-wider text-white/50">Conversion</div>
                    <TrendingDown className="h-3 w-3 rotate-180 text-[#d54545]" />
                  </div>
                  <div className="mt-2 text-2xl font-bold text-white">12.4%</div>
                  <div className="mt-1 text-[10px] text-emerald-400">+4.2% ce mois</div>
                  <div className="mt-4 flex items-end gap-1 h-12">
                    {[40, 55, 45, 70, 60, 85, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-[#d54545]/30 to-[#d54545]"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6">
          {[
            { v: "2–4 sem.", l: "Délai de livraison" },
            { v: "< 2s", l: "Temps de chargement" },
            { v: "100%", l: "Sur-mesure" },
          ].map((s, i) => (
            <div
              key={s.l}
              className="reveal surface rounded-2xl px-4 py-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-2xl font-bold text-[#15151a] sm:text-3xl">{s.v}</div>
              <div className="mt-1 text-xs text-[#15151a]/55 sm:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== Marquee ============== */
function Marquee() {
  const items = [
    { label: "Landing pages", style: "" },
    { label: "Conversion-first", style: "dark" },
    { label: "Design sobre", style: "" },
    { label: "Performance", style: "red" },
    { label: "SEO inclus", style: "" },
    { label: "Sur-mesure", style: "dark" },
    { label: "Made in Suisse 🇨🇭", style: "" },
    { label: "2–4 semaines", style: "red" },
  ];
  const row = [...items, ...items];
  return (
    <section className="relative border-y border-[#15151a]/8 bg-white/50 py-8 overflow-hidden">
      <div className="absolute inset-0 bg-diag opacity-50" />
      <div className="relative marquee-track flex animate-marquee whitespace-nowrap gap-3 will-change-transform">
        {row.map((w, i) => (
          <div key={i} className={`marquee-pill ${w.style}`}>
            {w.label}
            <Sparkles className="h-3.5 w-3.5 opacity-70" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============== Problem ============== */
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
      desc: "Chaque visiteur perdu est un client qui part directement chez le concurrent.",
    },
    {
      icon: Clock,
      title: "Temps gaspillé",
      desc: "Sans outil qui convertit 24/7, vous courez après chaque lead manuellement.",
    },
  ];
  return (
    <section id="probleme" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-fine opacity-60 mask-fade" />
      <div
        className="accent-blur"
        style={{ top: 40, left: -120, width: 360, height: 360, background: "radial-gradient(circle, rgba(213,69,69,0.14), transparent 70%)" }}
      />
      <div
        className="accent-blur"
        style={{ bottom: 40, right: -120, width: 380, height: 380, background: "radial-gradient(circle, rgba(120,140,200,0.16), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center reveal">
          <Eyebrow>Le constat</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#15151a] sm:text-5xl">
            Pas de site (ou un mauvais site)
            <br />
            <span className="text-zenoni">vous coûte plus cher que vous ne pensez.</span>
          </h2>
          <p className="mt-5 text-[#15151a]/65">
            En 2026, votre site est votre premier commercial. S'il est absent, lent ou
            mal-foutu, c'est votre chiffre d'affaires qui en paie le prix.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="reveal surface group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#15151a]/15 hover:shadow-md"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#15151a] text-white transition-colors group-hover:bg-[#d54545]">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#15151a]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#15151a]/60">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== Services ============== */
function Services() {
  const plans = [
    {
      name: "Landing page",
      price: "1'500",
      tag: "L'essentiel",
      sub: "Le site qui transforme. Sans abonnement.",
      icon: Target,
      features: [
        "Landing page one-page sur-mesure",
        "Design responsive premium",
        "Copywriting orienté conversion",
        "Optimisation SEO de base",
        "Animations & micro-interactions",
        "Mise en ligne incluse",
        "Livraison en 2 à 4 semaines",
      ],
      featured: false,
    },
    {
      name: "Landing + Suivi 12 mois",
      price: "6'000",
      tag: "Le plus complet",
      sub: "Votre site + un partenaire à vos côtés toute l'année.",
      icon: Rocket,
      features: [
        "Tout de l'offre Landing page",
        "Accompagnement sur 12 mois",
        "Disponibilité pour les modifications",
        "1 point mensuel : ce qui marche, ce qu'on améliore",
        "Itérations basées sur les données",
        "Support prioritaire",
      ],
      featured: true,
    },
  ];
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white/60">
      <div className="absolute inset-0 bg-grid opacity-60 mask-fade" />
      <div
        className="accent-blur"
        style={{ top: -80, right: -100, width: 420, height: 420, background: "radial-gradient(circle, rgba(213,69,69,0.18), transparent 70%)" }}
      />
      <div
        className="accent-blur"
        style={{ bottom: -100, left: -120, width: 460, height: 460, background: "radial-gradient(circle, rgba(120,140,200,0.16), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center reveal">
          <Eyebrow>Nos offres</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#15151a] sm:text-5xl">
            Deux formules, un seul objectif :<br />
            <span className="text-zenoni">vous faire gagner des clients.</span>
          </h2>
          <p className="mt-5 text-[#15151a]/65">
            Prix de départ clairs, livrables premium, aucun frais caché. Les deux formules
            peuvent inclure la gestion technique : hébergement, sécurité et nom de domaine.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                p.featured
                  ? "bg-[#15151a] text-white shadow-2xl shadow-black/20"
                  : "surface hover:shadow-md"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {p.featured && (
                <div className="absolute -top-3 left-8 rounded-full bg-[#d54545] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-[#d54545]/30">
                  {p.tag}
                </div>
              )}
              <div className="flex items-center gap-3">
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    p.featured ? "bg-white/10 text-white" : "bg-[#15151a] text-white"
                  }`}
                >
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${p.featured ? "text-white" : "text-[#15151a]"}`}>
                    {p.name}
                  </h3>
                  <div className={`text-xs ${p.featured ? "text-white/55" : "text-[#15151a]/55"}`}>
                    {p.sub}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className={`text-xs uppercase tracking-wider ${p.featured ? "text-white/55" : "text-[#15151a]/55"}`}>
                  À partir de
                </span>
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className={`text-5xl font-bold ${p.featured ? "text-white" : "text-[#15151a]"}`}>
                  {p.price}
                </span>
                <span className={`text-sm ${p.featured ? "text-white/60" : "text-[#15151a]/60"}`}>
                  CHF
                </span>
              </div>
              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2.5 text-sm ${
                      p.featured ? "text-white/85" : "text-[#15151a]/80"
                    }`}
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d54545]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <CTA
                href={CAL_URL}
                variant={p.featured ? "primary" : "dark"}
                icon={Calendar}
                className="mt-8 w-full justify-center"
              >
                Réserver un appel
              </CTA>
            </div>
          ))}
        </div>

        {/* Add-on technique */}
        <div className="reveal mt-8 rounded-2xl border border-dashed border-[#15151a]/20 bg-white/70 p-6 sm:p-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d54545]/10 text-[#d54545]">
                <Server className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#15151a]">
                  Gestion technique disponible sur les deux formules
                </div>
                <p className="mt-1 text-sm text-[#15151a]/65">
                  Hébergement, sécurité et connexion du nom de domaine pris en charge.
                  Vous ne touchez à rien.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-[#15151a]/70">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#15151a]/[0.04] px-3 py-1">
                    <Server className="h-3 w-3" /> Hébergement
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#15151a]/[0.04] px-3 py-1">
                    <Lock className="h-3 w-3" /> Sécurité
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#15151a]/[0.04] px-3 py-1">
                    <Globe className="h-3 w-3" /> Nom de domaine
                  </span>
                </div>
              </div>
            </div>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#15151a] hover:text-[#d54545]"
            >
              Discuter du tarif <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== Process ============== */
function Process() {
  const steps = [
    {
      icon: Search,
      title: "Découverte",
      desc: "Appel stratégique pour comprendre votre business, votre cible et vos objectifs.",
      d: "Semaine 1",
    },
    {
      icon: Palette,
      title: "Design",
      desc: "Maquette sur-mesure avec direction artistique alignée à votre marque.",
      d: "Semaine 1-2",
    },
    {
      icon: Code2,
      title: "Développement",
      desc: "Intégration premium, responsive, performante. Animations, SEO et tracking inclus.",
      d: "Semaine 2-3",
    },
    {
      icon: Send,
      title: "Mise en ligne",
      desc: "Déploiement, connexion à votre domaine, formation rapide. Vous êtes opérationnel.",
      d: "Semaine 3-4",
    },
  ];
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots opacity-40 mask-fade" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center reveal">
          <Eyebrow>Le process</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#15151a] sm:text-5xl">
            De l'idée au lancement en{" "}
            <span className="text-zenoni">2 à 4 semaines</span>
          </h2>
          <p className="mt-5 text-[#15151a]/65">
            Un process carré, transparent et rapide. Vous savez où on en est à chaque étape.
          </p>
        </div>

        <div className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden lg:block">
            <div className="mx-12 h-px bg-gradient-to-r from-transparent via-[#15151a]/15 to-transparent" />
          </div>
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="surface group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div
                  className="pointer-events-none absolute -top-2 -right-2 select-none text-7xl font-black leading-none text-transparent"
                  style={{
                    WebkitTextStroke: "1.5px rgba(213,69,69,0.35)",
                  }}
                >
                  0{i + 1}
                </div>
                <div className="relative flex items-center justify-between">
                  <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[#d54545] px-3 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(213,69,69,0.6)]">
                    Étape 0{i + 1}
                  </span>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#15151a] text-white transition-colors group-hover:bg-[#d54545]">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="relative mt-4 text-lg font-semibold text-[#15151a]">{s.title}</h3>
                <div className="relative mt-1 text-xs font-semibold uppercase tracking-wider text-[#d54545]">
                  {s.d}
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-[#15151a]/65">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== FAQ ============== */
function FAQ() {
  const items = [
    {
      q: "Combien de temps pour livrer ma landing page ?",
      a: "Entre 2 et 4 semaines à partir de la validation du brief, selon la complexité et la rapidité des allers-retours.",
    },
    {
      q: "Je n'ai ni logo ni contenu, c'est un problème ?",
      a: "Non. On vous guide sur le copywriting, la structure et l'identité visuelle. Pour le logo, on peut travailler avec ce que vous avez ou vous orienter vers un designer partenaire.",
    },
    {
      q: "Le site est-il vraiment optimisé pour convertir ?",
      a: "Oui. Chaque section, chaque CTA, chaque mot est pensé pour guider votre visiteur vers l'action, en s'appuyant sur les bonnes pratiques de copywriting et de design conversion-first.",
    },
    {
      q: "Quelle est la différence entre les deux offres ?",
      a: "L'offre à 1'500 CHF, c'est la création du site, sans suivi. L'offre à 6'000 CHF, c'est le site + un accompagnement sur 12 mois : je reste à votre disposition pour les modifications et on fait un point chaque mois pour voir ce qui marche et améliorer ce qui peut l'être.",
    },
    {
      q: "Pouvez-vous gérer l'hébergement et le nom de domaine ?",
      a: "Oui, sur les deux formules. On peut prendre en charge l'hébergement, la sécurité et la connexion du nom de domaine. Tarif à discuter selon vos besoins.",
    },
    {
      q: "Et si je ne suis pas satisfait ?",
      a: "Les formules incluent des cycles de révisions. On ne livre pas tant que vous n'êtes pas pleinement satisfait du résultat.",
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-fine opacity-50 mask-fade" />
      <div
        className="accent-blur"
        style={{ top: 100, right: -100, width: 360, height: 360, background: "radial-gradient(circle, rgba(213,69,69,0.12), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-3xl px-5">
        <div className="text-center reveal">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#15151a] sm:text-5xl">
            Vos questions, nos réponses
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const open = openIdx === i;
            return (
              <div
                key={it.q}
                className="reveal surface overflow-hidden rounded-2xl"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-[#15151a] sm:text-base">
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
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[#15151a]/70">
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

/* ============== Final CTA ============== */
function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-[#0e0e12] p-10 text-center text-white shadow-2xl sm:p-16">
          <div className="absolute inset-0 bg-grid-fine opacity-[0.08]" />
          <div
            className="accent-blur"
            style={{
              top: -100,
              left: "50%",
              transform: "translateX(-50%)",
              width: 360,
              height: 360,
              background: "radial-gradient(circle, rgba(213,69,69,0.5), transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d54545]" />
              Prêt à passer à l'action
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
              Réservez votre appel découverte
              <br />
              <span className="text-zenoni">gratuit & sans engagement.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/65">
              30 minutes pour comprendre votre projet, vos objectifs et voir si on peut vous
              aider. Pas de blabla, pas de pression.
            </p>

            <div className="mt-9 flex justify-center">
              <CTA href={CAL_URL} icon={Calendar}>
                Réserver mon appel
              </CTA>
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
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white transition-all hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-[#d54545]" />
                {MAIL}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white transition-all hover:bg-white/10"
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

/* ============== Footer ============== */
function Footer() {
  return (
    <footer className="relative pt-10 pb-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="surface rounded-3xl p-8">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
            <div className="max-w-sm">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Zenoni Agency" className="h-8 w-8 rounded-md" />
                <span className="text-base font-bold tracking-tight text-[#15151a]">
                  Zenoni
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#15151a]/60">
                Landing pages premium pour entreprises ambitieuses. Design, conversion,
                résultats.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 text-sm sm:gap-16">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#15151a]/45">
                  Navigation
                </div>
                <ul className="mt-3 space-y-2">
                  <li><a href="#services" className="text-[#15151a]/75 hover:text-[#15151a]">Services</a></li>
                  <li><a href="#process" className="text-[#15151a]/75 hover:text-[#15151a]">Process</a></li>
                  <li><a href="#faq" className="text-[#15151a]/75 hover:text-[#15151a]">FAQ</a></li>
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#15151a]/45">
                  Contact
                </div>
                <ul className="mt-3 space-y-2">
                  <li><a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="text-[#15151a]/75 hover:text-[#15151a]">Réserver un appel</a></li>
                  <li><a href={`mailto:${MAIL}`} className="text-[#15151a]/75 hover:text-[#15151a]">{MAIL}</a></li>
                  <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-[#15151a]/75 hover:text-[#15151a]">WhatsApp</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#15151a]/10 pt-6 sm:flex-row">
            <div className="text-xs text-[#15151a]/50">
              © {new Date().getFullYear()} Zenoni Agency. Tous droits réservés.
            </div>
            <div className="text-xs text-[#15151a]/50">🇨🇭</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Intro />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Services />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
