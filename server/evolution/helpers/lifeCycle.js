var helpers = require('./general');
var findDistance = helpers.findDistance;
var limitPositions = helpers.limitPositions;
var chooseOne = helpers.chooseOne;
var randomInt = helpers.randomInt;
var getAvgPosition = helpers.getAvgPosition;

module.exports = {

  killEve: (Eves) => {
    var worstIndex = 0;
    for(var i = 0; i < Eves.length; i++) {
      let eveScore = getSurvivalScore(Eves[i]);
      let worstScore = getSurvivalScore(Eves[worstIndex]);
      if(eveScore < worstScore && Eves[i].stats.cyclesSinceBirth > 5) {
        slowest = i;
      }
    }
    Eves.splice(worstIndex,1)[0];
  },

  collectStats: (Eves) => {
    for(var i = 0; i < Eves.length; i++) {
      var eve = Eves[i];
      var pos = getAvgPosition(eve);
      var distance = findDistance(pos, eve.stats.currentPos);
      eve.stats.distanceTraveled += distance;
      eve.stats.cyclesSinceBirth += 1;
      eve.stats.currentPos = pos;
    }
  }
}

function getSurvivalScore(eve) {
  let speed = eve.stats.distanceTraveled / eve.stats.cyclesSinceBirth || 0;
  return speed * Math.pow(eve.bodyParts.length, 0.5);
}