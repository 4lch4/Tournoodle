const types = require('./util/TypeDefs')
const index = new (require('./index'))({
  competitorCount: 5,
  gameName: 'Brawlhalla',
  tourneyType: types.TournamentType['Single Elimination'],
  memberSignup: types.MemberSignup['Creator provides names'],
  competitors: [{
    name: 'Alcha'
  }, {
    name: 'Toofer'
  }, {
    name: 'Bella'
  }, {
    name: 'JayBae'
  }, {
    name: 'Foupa'
  }]
})

/* index.addCompetitor({ name: 'Alcha' })
  .addCompetitor({ name: 'Toofer' })
  .addCompetitor({ name: 'Bella' })
  .addCompetitor({ name: 'Foupa' })
  .addCompetitor({ name: 'JayBae' }) */

index.generateRandomSeeds()

index.displayCompetitors()
