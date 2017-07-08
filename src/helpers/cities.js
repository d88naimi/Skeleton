const agents = require('./agentsData1');
const fs = require('fs');

const cityArr = agents.map(agent => agent.location);

fs.writeFile("./src/helpers/cityData.js", JSON.stringify(cityArr, null, 2), function(err) {
  if(err) return console.log(err);
  console.log("saved!");

});