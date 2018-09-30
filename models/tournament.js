'use strict'

module.exports = (sequelize, DataTypes) => {
  const Tournament = sequelize.define('Tournament', {
    gameName: DataTypes.STRING,
    tourneyType: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    signupType: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    competitorCount: { type: DataTypes.INTEGER, allowNull: true, defaultValue: -1 },
    tourneyName: { type: DataTypes.STRING, allowNull: true },
    hostedDate: { type: DataTypes.STRING, allowNull: true },
    signupDate: { type: DataTypes.STRING, allowNull: true },
    thirdPlaceMatch: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
    randomizeSeeds: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: true },
    tourneyDesc: { type: DataTypes.TEXT, allowNull: true },
    competitors: { type: DataTypes.TEXT, allowNull: true }
  }, {})

  Tournament.associate = function (models) {
    // associations can be defined here
  }

  return Tournament
}
