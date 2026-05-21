# Landing page Zenoni Agency

Site one-page orienté conversion, ambiance glassmorphisme avec orbes colorés flous et accents rouges #D54545, fond sombre premium.

## Identité visuelle

- **Couleur signature** : #D54545 (rouge Zenoni)
- **Palette** : fond anthracite/noir profond, orbes flous (rouge #D54545, magenta, violet, bleu nuit) en arrière-plan, surfaces en verre translucide (backdrop-blur, bordures 1px blanches à faible opacité, reflets subtils)
- **Typographie** : sans-serif moderne (Inter / Space Grotesk) — titres serrés et impactants, corps lisible
- **Logo** : SVG fourni, intégré dans le header et le footer
- **Cible** : TPE/PME + startups/SaaS (ton pro mais accessible)

## Structure de la page (sections dans l'ordre)

1. **Header glass sticky** — logo Zenoni à gauche, nav ancres (Services, Process, Portfolio, FAQ), bouton CTA "Réserver un appel" à droite
2. **Hero** — titre fort ("Une landing page qui transforme vos visiteurs en clients"), sous-titre, deux CTA (réserver un appel / voir les réalisations), carte glass flottante en mockup, orbes flous animés en arrière-plan
3. **Le problème** — "Pourquoi ne pas avoir de site (ou en avoir un mauvais) vous coûte cher" : 3-4 cartes glass listant les douleurs (perte de crédibilité, prospects perdus, mauvaise première impression, concurrence qui prend l'avantage) avec stats marquantes
4. **Services / Offres tarifaires** — 3 formules en cartes glass (ex: Essentiel / Pro / Sur-mesure) avec prix, inclus, CTA par carte
5. **Process en étapes** — 4 étapes numérotées en timeline glass (Découverte → Design → Développement → Mise en ligne)
6. **Portfolio / Réalisations** — grille de 3-6 projets en cartes glass avec aperçu, nom client, secteur (placeholders élégants pour l'instant)
7. **Témoignages** — 2-3 cartes glass avec citation, nom, entreprise
8. **FAQ** — accordéon glass avec 5-6 questions fréquentes
9. **Contact / CTA final** — gros bloc glass centré avec les trois options de contact :
   - Bouton principal "Réserver un appel" → https://cal.com/ilan-b-zenoni-agency/appel?overlayCalendar=true
   - Bouton email → admin@zenoni.agency
   - Bouton WhatsApp → 0792272134
10. **Footer** — logo, mentions, liens rapides, coordonnées

## Conversion

- CTA "Réserver un appel" présent dans : header, hero, fin de chaque section clé, bloc contact final
- Les boutons email et WhatsApp utilisent `mailto:` et `https://wa.me/41792272134`
- Aucun formulaire backend nécessaire → pas besoin de Lovable Cloud pour cette V1

## Détails techniques

- Stack : React + Tailwind + shadcn (déjà en place après scaffold)
- Tokens design dans `index.css` : variables HSL pour rouge Zenoni, surfaces glass, orbes
- Composants glass réutilisables (GlassCard, GlassButton)
- Orbes animés via CSS pur (animations lentes type float/pulse)
- Logo SVG copié dans `src/assets/zenoni-logo.svg`
- Responsive mobile-first, nav burger sur mobile
- Smooth scroll sur les ancres
- SEO : title "Zenoni Agency — Landing pages qui convertissent", meta description, H1 unique, alt sur images

## Contenu placeholder à confirmer plus tard

- Prix exacts des 3 formules
- Vrais projets portfolio (mockups génériques en attendant)
- Vrais témoignages (textes plausibles en attendant)

Tu pourras éditer tout le contenu après livraison.
