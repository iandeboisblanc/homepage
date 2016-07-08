var helpers = require('./general');
var findDistance = helpers.findDistance;
var limitPositions = helpers.limitPositions;
var chooseOne = helpers.chooseOne;
var randomInt = helpers.randomInt;
var getAvgPosition = helpers.getAvgPosition;

module.exports = {

  killEve: (Eves) => {
    var slowest = 0;
    for(var i = 0; i < Eves.length; i++) {
      var eveSpeed = (Eves[i].stats.distanceTraveled / Eves[i].stats.cyclesSinceBirth) || 0;
      var smallestSpeed = (Eves[slowest].stats.distanceTraveled / Eves[slowest].stats.cyclesSinceBirth) || 0;
      if(eveSpeed < smallestSpeed && Eves[i].stats.cyclesSinceBirth > 5) {
        slowest = i;
      }
    }
    var eve = Eves.splice(slowest,1)[0];
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
