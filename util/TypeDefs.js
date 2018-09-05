const TournamentType = {
  'Single Elimination': 0,
  'Double Elimination': 1,
  'Round Robin': 2
}

const MemberSignup = {
  'Creator provides names': 0,
  'Users sign themselves up': 1
}

const Competitor = {
  name: '',
  seed: -1
}

module.exports.TourneyOptions = {
  // Required info
  competitorCount: -1,
  gameName: '',
  tourneyType: TournamentType['Single Elimination'],
  memberSignup: MemberSignup['Creator provides names'],
  // Optional info
  tourneyName: '',
  tourneyDesc: '',
  hostedDate: '',
  signupDate: '',
  thirdPlaceMatch: false,
  randomizeSeeds: false,
  competitors: [{ name: '', seed: -1 }]
}

module.exports.MemberSignup = MemberSignup
module.exports.TournamentType = TournamentType
module.exports.Competitor = Competitor
