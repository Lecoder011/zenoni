import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Création de Landing Page Vaud & Suisse Romande | Zenoni Agency" },
      { name: "description", content: "Zenoni Agency conçoit des landing pages premium orientées conversion pour TPE/PME et startups dans le canton de Vaud et toute la Suisse romande. Design sobre, performance maximale. Livraison en 2 à 4 semaines." },
      { name: "keywords", content: "création landing page Vaud, agence web Lausanne, landing page conversion Suisse romande, création site internet PME Vaud, agence web Vaud, site internet professionnel Suisse" },
      { name: "geo.region", content: "CH-VD" },
      { name: "geo.placename", content: "Vaud, Suisse" },
      { name: "author", content: "Zenoni Agency" },
      { property: "og:title", content: "Zenoni Agency — Landing Pages Premium | Vaud, Suisse Romande" },
      { property: "og:description", content: "Des landing pages sur-mesure qui transforment vos visiteurs en clients. Agence web basée dans le canton de Vaud, au service des entreprises de Suisse romande." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://zenoni.agency" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@ZenoniAgency" },
      { name: "twitter:title", content: "Zenoni Agency — Landing Pages Premium | Vaud" },
      { name: "twitter:description", content: "Landing pages premium pour PME et startups en Suisse romande. Conversion-first, livraison 2-4 semaines." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c15eea2a-8de1-4972-bb22-e84a35d0e8da/id-preview-07aa38c1--5cbb0020-a855-495a-a198-ffd2eb09b3b9.lovable.app-1779424546919.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c15eea2a-8de1-4972-bb22-e84a35d0e8da/id-preview-07aa38c1--5cbb0020-a855-495a-a198-ffd2eb09b3b9.lovable.app-1779424546919.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "canonical", href: "https://zenoni.agency" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Zenoni Agency",
          "description": "Agence de création de landing pages premium pour PME et startups en Suisse romande, canton de Vaud.",
          "url": "https://zenoni.agency",
          "email": "admin@zenoni.agency",
          "telephone": "+41792272134",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Vaud",
            "addressCountry": "CH"
          },
          "areaServed": ["Vaud", "Lausanne", "Genève", "Fribourg", "Suisse romande"],
          "serviceType": ["Création de landing page", "Agence web", "Développement site internet"],
          "priceRange": "CHF 1500 - CHF 6000"
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
