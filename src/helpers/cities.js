const agents = require('./agentsData1');
const fs = require('fs');

const cityArr = agents.map(agent => agent.location);
const citySet = new Set(cityArr);
const cityArrFinal = Array.from(citySet);

fs.writeFile("./src/helpers/cityData.js", JSON.stringify(cityArrFinal, null, 2), function(err) {
  if(err) return console.log(err);
  console.log("saved!");

});