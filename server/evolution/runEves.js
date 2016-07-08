var settings = require('./settings');
// import {findDistance, limitPositions, chooseOne, randomInt, getAvgPostion} from './helpers/general'
var generalHelp = require('./helpers/general');
// import {applyLimbForces, updateBodyPartPositions} from './helpers/movement'
var movement = require('./helpers/movement');
// import {createEveData, deriveEveData} from './helpers/eveCreation'
var eveCreation = require('./helpers/eveCreation');
// import {killEve, collectStats} from './helpers/lifeCycle'
var lifeCycle = require('./helpers/lifeCycle');

var runEves = function(Eves) {
  //Create initial data:
  for(var i = 0; i < settings.eveCount; i ++) {
    Eves.push(eveCreation.createEveData());
  }

  //Animate:
  setInterval(() => {
    movement.applyLimbForces(Eves);
    movement.updateBodyPartPositions(Eves);
  }, settings.stepTime);

  //Selective Pressure:
  setInterval(() => {
    lifeCycle.killEve(Eves);
    var eve = generalHelp.chooseOne(Eves);
    Eves.push(eveCreation.deriveEveData(eve));
  }, settings.killTime);

  setInterval(() => {
    lifeCycle.collectStats(Eves);
  }, 2000);
  
}

module.exports = runEves;
