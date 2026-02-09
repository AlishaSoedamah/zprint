fetchData();
changeTitle();

async function fetchData() {
	const url = 'https://fdnd.directus.app/items/person/280';
	let response = await fetch(url);
	let info = await response.json();
	document.getElementById("name").innerHTML = "Full name • " + info.data.name;
	document.getElementById("age").innerHTML = "DOB • " + info.data.birthdate;
	document.getElementById("github").innerHTML = "Github handle • " + info.data.github_handle;
	document.getElementById("website").innerHTML = "Website • " + info.data.website;
}

function changeTitle() {
	let originalTitle = document.title;
	
	document.addEventListener('visibilitychange', function() {
		if (document.hidden) {
			document.title = "Kom terug!!!!!";
		} else {
			document.title = originalTitle;
		}
	});
}

// fetchEveryone();

async function fetchEveryone()
{
	// const url = 'https://fdnd.directus.app/items';
	// const url = 'https://fdnd.directus.app/items/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526';
	const url = 'https://fdnd.directus.app/items/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&filter[fav_property][_nempty]';
	let response = await fetch(url);
	let info = await response.json();
	let dePeople = info.data;
	console.log(dePeople);
}