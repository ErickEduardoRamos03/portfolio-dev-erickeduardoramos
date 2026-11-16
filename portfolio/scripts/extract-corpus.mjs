// ============================================================
// RUTA EN TU PROYECTO: scripts/extract-corpus.mjs
// (archivo NUEVO, va junto a scripts/validate-content.js que ya existe)
//
// INSTALACIÓN: ninguna. Usa Node.js, que ya necesitas para correr Vite.
// No requiere npm install de nada extra.
//
// CÓMO CORRERLO (desde la raíz del proyecto, en tu terminal):
//   node scripts/extract-corpus.mjs
//
// Qué hace: recorre src/data/content.js y saca un JSON plano de "qué
// se necesita convertir a audio". Cada entrada tiene un id ESTABLE (no
// cambia si agregas cosas después) para que el script de generación
// (generate_audio.py) sepa qué ya existe y qué falta.
//
// Genera: scripts/corpus.json
// ============================================================

import { writeFileSync } from 'node:fs'
import {
  listeningSections,
  speakingPrompts,
  phraseJourneys
} from '../src/data/content.js'

const entries = []

// Listening: cada script se necesita en en-US y en-GB
for (const section of listeningSections) {
  entries.push({ id: `${section.id}-us`, text: section.script, locale: 'en-US' })
  entries.push({ id: `${section.id}-gb`, text: section.script, locale: 'en-GB' })
}

// Speaking prompts: no tienen id propio en content.js, usamos el índice.
// Ojo: si reordenas speakingPrompts, esos ids "cambian de dueño". Si te
// preocupa, lo mejor es agregarles un `id:` explícito en content.js.
speakingPrompts.forEach((text, i) => {
  entries.push({ id: `sp${i}-us`, text, locale: 'en-US' })
  entries.push({ id: `sp${i}-gb`, text, locale: 'en-GB' })
})

// Phrase journeys: ya traen id propio, y texto separado por variante
for (const p of phraseJourneys) {
  entries.push({ id: `${p.id}-us`, text: p.us.text, locale: 'en-US' })
  entries.push({ id: `${p.id}-gb`, text: p.gb.text, locale: 'en-GB' })
}

writeFileSync(
  new URL('./corpus.json', import.meta.url),
  JSON.stringify(entries, null, 2)
)

console.log(`Corpus extraído: ${entries.length} textos (scripts/corpus.json)`)
