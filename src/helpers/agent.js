import axios from "axios"; 

const helpers = {
	// method to GET single Agent Profile
	getAgentProfile: (id) => {
		console.log(id);

		return axios.get('/api/users/agent/${id}')
		.then((response) => {
			console.log(response.data);
			//return response.data;
		}).catch((error) => {
			//if error return error
			console.log(error);
		});

	},
	// method to GET all Agents
	getAgentsNearby(){

		return axios.get('/api/agents').then((response) => {
			console.log(response);
		}).catch((error) => {
			console.log(error);
		})
	}
};

export default helpers; 
