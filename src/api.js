const endpoint = "https://randomuser.me/api/?results="

export default function fetchUsers(limit) {

	return fetch(endpoint + limit)
  		.then(res => {
  			return res.json();
  		})
  		.then(json => {
    		return json.results;
		})
  		.catch(error => {
    		console.error(error);
  		});

}