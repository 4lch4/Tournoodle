module.exports = class Tools {
  /**
   * Shuffles an array using the Fisher-Yates Shuffle.
   *
   * @param {Array} a An array containing the items to shuffle.
   *
   * @see https://stackoverflow.com/a/2450976/
   */
  shuffleArray (array) {
    let currentIndex = array.length
    let temporaryValue, randomIndex

    // While there are elements left to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }
}
