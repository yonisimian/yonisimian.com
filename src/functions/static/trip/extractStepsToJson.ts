// extractStepsToJson.ts
import fs from 'fs'
import path, { join } from 'path'
import { trip } from '../../../data/trip'
import { contDirName, countryDirName, stepDirName } from './utils'

const outputDir = path.resolve(__dirname, 'output_steps')

if (!fs.existsSync(outputDir)) {
  // Create output directory if it doesn't exist
  fs.mkdirSync(outputDir)
} else {
  // Clear the output directory if it exists
  fs.readdirSync(outputDir).forEach((file) => {
    fs.unlinkSync(path.join(outputDir, file))
  })
}

let stepCount = 1
let continentCnt = 0
let countryCnt = 0
for (const continent of trip.continents) {
  const contDir = join(outputDir, contDirName(continentCnt++, continent))
  for (const country of continent.countries) {
    const countryDir = join(contDir, countryDirName(countryCnt++, country))
    for (const step of country.steps) {
      const stepDir = join(countryDir, stepDirName(step))
      const shrunkStep = { ...step, media: undefined, id: stepCount++ }
      const filename = `${shrunkStep.id} - ${sanitize(shrunkStep.shortName)}.json`
      const filepath = path.join(stepDir, filename)
      if (!fs.existsSync(stepDir)) {
        fs.mkdirSync(stepDir, { recursive: true })
      }
      fs.writeFileSync(filepath, JSON.stringify(shrunkStep, null, 2), 'utf-8')
    }
  }
}

console.log(`✅ Extracted all steps to ${outputDir}`)

// Utility: remove characters illegal in filenames
function sanitize(name: string): string {
  return name.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_')
}
