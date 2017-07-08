// see http://mockaroo.com/api/docs

//only limited to 200request/day
const Mockaroo =require('mockaroo');
const fs = require('fs');
function getMockData() {
	const client = new Mockaroo.Client({
	    apiKey: 'f419c280' 
	});

	return client.generate({
	    count: 400,
	    schema: 'americanLifeSchema'
	}).then(function(records) {
    fs.writeFile("./src/helpers/agentsData1.js", JSON.stringify(records, null, 2), function(err) {
    	if(err) return console.log(err);
    	console.log("saved!");

    });
		console.log(records)
	}).catch(function(error) {
	    if (error instanceof Mockaroo.errors.InvalidApiKeyError) {
	      console.log('invalid api key');
	    } else if (error instanceof Mockaroo.errors.UsageLimitExceededError) {
	      console.log('usage limit exceeded');
	    } else if (error instanceof Mockaroo.errors.ApiError) {
	      console.log('api error: ' + error.message);
	    } else {
	      console.log('unknown error: ' + error);
	    }
	});
}

getMockData();