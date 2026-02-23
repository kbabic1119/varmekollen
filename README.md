<div align="center">
  <img width="1200" height="400" alt="VärmeKollen Banner" src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=1200&auto=format&fit=crop" style="object-fit: cover; border-radius: 12px; margin-bottom: 20px;" />
  <h1>VärmeKollen</h1>
  <p>En modern, AI-optimerad plattform för att jämföra värmesystem och sänka elkostnader.</p>
</div>

## 📌 Om Projektet

**VärmeKollen** är en lead-genereringssida byggd med React, Vite och Tailwind CSS. Den är designad för att hjälpa husägare att snabbt och enkelt få kostnadsfria offerter från certifierade värmepumpsinstallatörer.

Sidan innehåller en interaktiv, flerstegs offertförfrågan (funnel) samt en inbyggd kalkylator för att räkna ut potentiella besparingar beroende på nuvarande uppvärmningssystem och årskostnad.

### ✨ Huvudfunktioner

- **Flerstegs-Funnel**: Smidig och användarvänlig formulärsprocess (steg-för-steg) för att samla in lead-information.
- **Besparingskalkylator**: Dynamisk kalkylator i realtid för att uppskatta besparingar i SEK och procent.
- **Responsiv Design**: Fullt anpassad för desktop, tablet och mobila enheter.
- **Snabb Prestanda**: Byggd med Vite för snabba laddningstider och en omedelbar användarupplevelse.
- **Moderna Animationer**: Framer Motion används för smidiga övergångar mellan formulärsteg och UI-element.

## 🛠 Teknikstack

- **Frontend**: [React 19](https://react.dev/)
- **Byggverktyg**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Ikoner**: [Lucide React](https://lucide.dev/)
- **Animationer**: [Motion (Framer Motion)](https://motion.dev/)
- **Databas/Backend (Kommande)**: Better SQLite3 & Express

## 🚀 Kom igång lokalt

Följ dessa steg för att köra projektet på din egen dator:

### 1. Klona repositoryt (om tillämpligt)
\`\`\`bash
git clone <url-till-repo>
cd varmekollen
\`\`\`

### 2. Installera beroenden
Se till att du har **Node.js** (v18+) installerat.
\`\`\`bash
npm install
\`\`\`

### 3. Konfigurera miljövariabler
Kopiera \`.env.example\` till \`.env.local\` och lägg till dina nycklar (om nödvändigt):
\`\`\`bash
cp .env.example .env.local
\`\`\`

### 4. Starta utvecklingsservern
\`\`\`bash
npm run dev
\`\`\`
Din app rullar nu på \`http://localhost:3000/varmekollen/\`!

## 🧪 Skript

- \`npm run dev\`: Startar Vite dev-servern
- \`npm run build\`: Bygger applikationen för produktion i \`dist\`-mappen
- \`npm run preview\`: Förhandsgranskar den byggda produktionsversionen lokalt
- \`npm run lint\`: Kör TypeScript kompilatorns typkontroll (\`tsc --noEmit\`)

## 📄 Licens & Rättigheter

© 2026 VärmeKollen Sverige AB. Alla rättigheter förbehållna.
Spridning eller kopiering av koden för kommersiellt bruk utan tillstånd är ej tillåtet.
