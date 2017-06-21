import axios from "axios"; 

export function getAgentsNearby(){

	return axios.get('/api/agents');
}