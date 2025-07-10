import { type Trip, type Step, type Country, type Continent, Collection } from '/@/types/trip'

let trip: Trip | null = null

export const loadTripData = async () => {
  if (trip) return
  const { trip: tripData } = await import('/@/data/trip')
  trip = tripData as Trip
}

export const useTripData = () => {
  if (!trip) {
    throw new Error('Trip data not loaded. Call loadTripData() first.')
  }

  const continents: Continent[] = trip.continents
  const countries: Country[] = continents.flatMap((continent) => continent.countries)
  const steps: Step[] = countries.flatMap((country) => country.steps)
  const dates: string[] = steps.map((step) => step.date)

  const highlights: Collection = {
    name: 'Highlights',
    stepslides: [
      { step: steps[10], slide: 3 }, // hakone
      { step: steps[13], slide: 0 }, // ibaraki
      { step: steps[15], slide: 1 }, // hiragana
      { step: steps[16], slide: 6 }, // universal
      { step: steps[19], slide: 4 }, // beautiful screensaver
      { step: steps[22], slide: 3 }, // kobe orchestra
      { step: steps[22], slide: 11 }, // note to Akiko
      { step: steps[24], slide: 9 }, // Otsu l'chaim
      { step: steps[26], slide: 3 }, // Otsu music (TODO)
      { step: steps[28], slide: 0 }, // snow monkeys
      { step: steps[28], slide: 5 }, // more monkeys
      { step: steps[30], slide: 2 }, // buddah
      { step: steps[34], slide: 2 }, // slappin'
      { step: steps[36], slide: 0 }, // making ramen
      { step: steps[37], slide: 1 }, // rocky <3
      { step: steps[39], slide: 4 }, // bird
      { step: steps[40], slide: 6 }, // moanalua
      { step: steps[41], slide: 2 }, // nephews
      { step: steps[44], slide: 2 }, // hawaii omg
      { step: steps[47], slide: 6 }, // hillel
      { step: steps[49], slide: 0 }, // lionel
      { step: steps[52], slide: 8 }, // his world
      { step: steps[54], slide: 14 }, // back to the future
      { step: steps[55], slide: 7 }, // princeton sunset
      { step: steps[59], slide: 9 }, // funny grandma
      { step: steps[66], slide: 4 }, // amsterdam jam
      { step: steps[70], slide: 6 }, // oye como va
      { step: steps[75], slide: 3 }, // nuremberg
      { step: steps[76], slide: 7 }, // jesus
      { step: steps[78], slide: 3 }, // strauss dinner
      { step: steps[79], slide: 3 }, // traffic lights beer
      { step: steps[80], slide: 3 }, // israeli beers
      { step: steps[81], slide: 10 }, // under the bridge
      { step: steps[82], slide: 5 }, // beer festival
      { step: steps[83], slide: 6 }, // brewery
      { step: steps[84], slide: 1 } // peleg
    ]
  }

  const music: Collection = {
    name: 'Live Music',
    stepslides: [
      { step: steps[16], slide: 7 }, // universal
      { step: steps[17], slide: 0 }, // jam after universal
      { step: steps[22], slide: 2 }, // kobe orchestra
      { step: steps[22], slide: 3 }, // kobe orchestra 2
      { step: steps[24], slide: 5 }, // otsu jam
      { step: steps[24], slide: 6 }, // otsu jam
      { step: steps[24], slide: 7 }, // otsu jam
      { step: steps[25], slide: 11 }, // otsu jam #2
      { step: steps[25], slide: 12 }, // otsu jam #2
      { step: steps[26], slide: 3 }, // otsu jam #3
      { step: steps[26], slide: 4 }, // otsu jam #3
      { step: steps[26], slide: 5 }, // otsu jam #3
      { step: steps[34], slide: 2 }, // bass shop jam
      { step: steps[37], slide: 0 }, // rocky
      { step: steps[37], slide: 1 }, // rocky
      { step: steps[37], slide: 2 }, // rocky
      { step: steps[37], slide: 3 }, // rocky
      { step: steps[37], slide: 4 }, // rocky
      { step: steps[41], slide: 0 }, // kaneohe
      { step: steps[46], slide: 3 }, // venice beach evening
      { step: steps[47], slide: 0 }, // venice beach day
      { step: steps[52], slide: 3 }, // sonic symphony
      { step: steps[52], slide: 4 }, // sonic symphony
      { step: steps[52], slide: 5 }, // sonic symphony
      { step: steps[52], slide: 6 }, // sonic symphony
      { step: steps[52], slide: 7 }, // sonic symphony
      { step: steps[52], slide: 8 }, // sonic symphony
      { step: steps[52], slide: 9 }, // sonic symphony
      { step: steps[52], slide: 10 }, // sonic symphony
      { step: steps[52], slide: 11 }, // sonic symphony
      { step: steps[53], slide: 7 }, // new york jazz
      { step: steps[62], slide: 0 }, // john
      { step: steps[62], slide: 1 }, // john
      { step: steps[62], slide: 2 }, // john
      { step: steps[66], slide: 4 }, // amsterdam jam
      { step: steps[67], slide: 13 }, // rijksmuseum
      { step: steps[70], slide: 3 }, // utrecht
      { step: steps[70], slide: 4 }, // utrecht
      { step: steps[70], slide: 5 }, // utrecht
      { step: steps[70], slide: 6 }, // utrecht
      { step: steps[70], slide: 7 }, // utrecht
      { step: steps[70], slide: 8 }, // utrecht
      { step: steps[75], slide: 0 }, // nuremberg
      { step: steps[75], slide: 1 }, // nuremberg
      { step: steps[75], slide: 3 }, // nuremberg
      { step: steps[77], slide: 8 }, // vienna museum
      { step: steps[78], slide: 1 }, // strauss
      { step: steps[78], slide: 2 }, // strauss
      { step: steps[78], slide: 3 }, // strauss
      { step: steps[78], slide: 4 }, // strauss
      { step: steps[78], slide: 5 }, // strauss
      { step: steps[78], slide: 6 }, // strauss
      { step: steps[78], slide: 7 }, // strauss
      { step: steps[78], slide: 8 }, // strauss
      { step: steps[78], slide: 9 }, // strauss
      { step: steps[78], slide: 10 }, // strauss
      { step: steps[78], slide: 11 }, // strauss
      { step: steps[81], slide: 8 }, // prague
      { step: steps[81], slide: 9 }, // prague
      { step: steps[81], slide: 10 }, // prague
      { step: steps[83], slide: 5 }, // prague brewery
      { step: steps[83], slide: 6 } // prague brewery
    ]
  }

  const people: Collection = {
    name: 'Highlights',
    stepslides: [
      { step: steps[6], slide: 0 }, // yoni
      { step: steps[9], slide: 0 }, // jason
      { step: steps[10], slide: 6 }, // hakone dudes
      { step: steps[11], slide: 0 }, // hakone other dudes
      { step: steps[22], slide: 5 }, // she never told me her name
      { step: steps[24], slide: 5 }, // otsu jam
      { step: steps[28], slide: 5 }, // monkey
      { step: steps[30], slide: 0 }, // taki
      { step: steps[32], slide: 3 }, // graphy dudes
      { step: steps[34], slide: 6 }, // graphy dudes 2
      { step: steps[37], slide: 0 }, // rocky
      { step: steps[38], slide: 0 }, // arriving in hawaii
      { step: steps[39], slide: 7 }, // diamond head
      { step: steps[39], slide: 8 }, // diamond head 2
      { step: steps[40], slide: 0 }, // moanalua
      { step: steps[40], slide: 6 }, // moanalua 2
      { step: steps[42], slide: 0 }, // kidush
      { step: steps[43], slide: 3 }, // barak
      { step: steps[44], slide: 11 }, // michal and kids
      { step: steps[49], slide: 1 }, // lionel
      { step: steps[50], slide: 1 }, // newark bus dude
      { step: steps[51], slide: 3 }, // jack, lauren & sean
      { step: steps[54], slide: 14 }, // back-to-the-future girl
      { step: steps[56], slide: 5 }, // evan & anya
      { step: steps[57], slide: 0 }, // evan & tzipi
      { step: steps[58], slide: 2 }, // allen
      { step: steps[59], slide: 1 }, // evan
      { step: steps[59], slide: 9 }, // grandma
      { step: steps[62], slide: 1 }, // john
      { step: steps[64], slide: 0 }, // evan & me
      { step: steps[64], slide: 5 }, // bunch of jews
      { step: steps[64], slide: 6 }, // bunch of jews 2
      { step: steps[68], slide: 1 }, // lera & guy
      { step: steps[71], slide: 0 }, // mike
      { step: steps[73], slide: 5 }, // rudolf
      { step: steps[75], slide: 2 }, // hussners
      { step: steps[80], slide: 1 }, // prague dudes
      { step: steps[81], slide: 0 }, // dad with clock
      { step: steps[82], slide: 4 }, // beer festival dudes
      { step: steps[83], slide: 2 }, // me & dad
      { step: steps[84], slide: 0 } // family
    ]
  }

  const carouselHeight = '65vh' // I hate this hack, but my css skills ain't that great

  return {
    trip,
    continents,
    countries,
    steps,
    dates,
    highlights,
    music,
    people,
    carouselHeight
  }
}
