const fake = require('faker')

const generator = new (require('./index'))({
  competitorCount: 25,
  gameName: 'Brawlhalla',
  tourneyType: 'Single Elimination',
  signupType: 0
})

for (let x = 0; x < 25; x++) {
  generator.addCompetitor({ id: fake.random.number(999999999999999999) })
}

generator.generateRandomSeeds()

generator.displayCompetitors()
