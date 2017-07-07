// see http://mockaroo.com/api/docs

//only limited to 200request/day
import Mockaroo from 'mockaroo';

export function getMockData() {
	const client = new Mockaroo.Client({
	    apiKey: 'f419c280' 
	})

	return client.generate({
	    count: 100,
	    schema: 'americanLifeSchema'
	}).then(function(records) {
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
};