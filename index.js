const tools = new (require('./util/Tools'))()

// #region JSDocs Type Info
const Types = require('./util/TypeDefs')
const TourneyOpts = Types.TourneyOptions
const CompetitorDef = Types.Competitor
// #endregion JSDocs Type Info

module.exports = class TourneyGenerator {
  /**
   * The default constructor for the TourneyGenerator class. Accepts all
   * possible options for a given Tournament, even the optional ones. The only
   * required parameters are the competitor count, game name, tourney type, and
   * how members sign up. Everything else is optional and can be set after
   * instantiating the class.
   *
   * @param {TourneyOpts} options
   *
   * @constructor
   */
  constructor (options) {
    if (options !== undefined && options.gameName !== undefined) {
      // Required tournament info
      this.gameName = options.gameName

      // Optional tournament info
      if (options.tourneyType) this.tourneyType = options.tourneyType
      else this.tourneyType = Types.TournamentType['Single Elimination']

      if (options.memberSignup) this.memberSignup = options.memberSignup
      else this.memberSignup = Types.MemberSignup['Users sign themselves up']

      if (options.tourneyName) this.tourneyName = options.tourneyName
      else this.tourneyName = ''

      if (options.tourneyDesc) this.tourneyDesc = options.tourneyDesc
      else this.tourneyDesc = ''

      if (options.hostedDate) this.hostedDate = options.hostedDate
      else this.hostedDate = ''

      if (options.signupDate) this.signupDate = options.signupDate
      else this.signupDate = ''

      if (options.thirdPlaceMatch) this.thirdPlaceMatch = options.thirdPlaceMatch
      else this.thirdPlaceMatch = false

      if (options.randomizeSeeds) this.randomizeSeeds = options.randomizeSeeds
      else this.randomizeSeeds = true

      if (options.competitors) this.competitors = options.competitors
      else this.competitors = []
    } else console.error('You must provide at least a game name as a parameter to the TourneyGenerator constructor.')
  }

  /**
   * Validates the provided options for required parameters. Returns true or
   * false depending on if the required parameters are there, and are valid
   * input.
   *
   * @param {TourneyOpts} options The options to validate
   *
   * @returns {boolean} Are the required parameters found in the given param
   */
  validateOptions (options) {
    if (options === undefined) return false
    else if (options.gameName === undefined) return false
    else return true
  }

  /**
   * Add the given competitor to the list of stored competitors and return the
   * updated TourneyGenerator object.
   *
   * @param {CompetitorDef} competitor The competitor to add to the generator
   * @returns {TourneyGenerator} The TourneyGenerator object
   */
  addCompetitor (competitor) {
    if (competitor !== undefined || competitor.name !== undefined) {
      // Add the provided competitor to the stored list
      this.competitors.push(competitor)
    } else console.error('The provided competitor was undefined. Please provide a valid object.')

    return this
  }

  /**
   * Generate randomized seeds for the currently stored competitors, assign the
   * values to each one, then return the updated TourneyGenerator.
   *
   * @returns {TourneyGenerator} The generator object with updated seed values
   */
  generateRandomSeeds () {
    const shuffledSeeds = tools.shuffleArray(this.seedRange)

    this.competitors.forEach((val, index) => {
      val.seed = shuffledSeeds[index]
    })

    return this
  }

  /**
   * Creates an array the size (n) of how many competitors are currently stored,
   * and then adds 0 to n to the array and returns it. If no competitors are
   * currently stored, an empty array is returned.
   *
   * @returns {number[]} Array of Seed numbers
   */
  get seedRange () {
    if (this.competitors !== undefined) {
      let range = []

      for (let x = 0; x < this.competitors.length; x++) {
        range.push(x)
      }

      return range
    } else return []
  }

  /**
   * Displays the current list of competitors by writing console.log or if a
   * Stream is provided, by writing to it.
   *
   * @param {WritableStream} [stream] The stream to display the competitors defaults to console.log
   */
  displayCompetitors (stream) {
    this.competitors.forEach((competitor, index) => {
      let output = `Competitor #${index} - ${competitor.name}`
      if (competitor.seed !== -1) output += ` - Seed = ${competitor.seed}`

      if (stream) stream.write(`${output}\n`)
      else console.log(output)
    })
  }
}
