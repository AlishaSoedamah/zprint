fetchData();
changeTitle();
fetchEveryone();

document.addEventListener('DOMContentLoaded', function() {
 var currentYear = new Date().getFullYear();
 document.getElementById('currentYear').textContent = currentYear;
});

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

async function fetchData() {
	const url = 'https://fdnd.directus.app/items/person/280';
	let response = await fetch(url);
	let info = await response.json();
	document.getElementById("name").innerHTML = "Full name • " + info.data.name;
	document.getElementById("age").innerHTML = "DOB • " + info.data.birthdate;
	document.getElementById("github").innerHTML = "Github handle • " + info.data.github_handle;
	document.getElementById("website").innerHTML = "Website • " + `<a href="${info.data.website}">${info.data.website}</a>`;
}

async function fetchEveryone()
{
	let lijst = document.getElementById("apiPeople");
	const url = 'https://fdnd.directus.app/items/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&filter[fav_animal][_nempty]';
	let response = await fetch(url);
	let info = await response.json();
	let dePeople = info.data;
	dePeople.forEach(onePerson => 
	{
		console.log(onePerson);
		let oneHTML = 
		`
		<li>
			<img class="profile" src="${onePerson.avatar}" alt="${onePerson.name}">
			<p>${onePerson.name} • ${onePerson.fav_animal}</p>
		</li>
		`;
		lijst.insertAdjacentHTML('beforeend', oneHTML);
	})
}