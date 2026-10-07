# Northbridge Solutions (demo website)

A fictional UK consultancy + technology company website. All company details, case studies and statistics are illustrative.

## Stack
Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure
```
public/favicon.svg
src/app/layout.tsx      root layout, metadata, Google Font (Bricolage Grotesque)
src/app/page.tsx        homepage, composes all sections
src/app/globals.css     Tailwind directives + the site's design system (colour tokens, layout, animations)
src/components/         Navbar, Hero, Stats, Services, Technology, Growth,
                        VirtualAssistance, Industries, HowWeWork, WhyUs,
                        CaseStudies, Insights, FinalCta, Footer
```

## Notes
- Design tokens (navy, off-white, electric violet accent, light/dark) live as CSS variables at the top of `globals.css`.
- Tailwind preflight is disabled so the original styling is preserved exactly.
- Navbar (mobile menu) and Growth (scroll-triggered chart animation) are client components; the rest are server components.
- The site has no raster images; visuals are inline SVG/CSS.
