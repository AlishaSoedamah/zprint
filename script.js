fetchData();
changeTitle();

async function fetchData() {
	const url = 'https://fdnd.directus.app/items/person/280';
	let response = await fetch(url);
	let info = await response.json();
	let charHtml =
	`<h2>api content</h2>
	<ul>
		<li>${info.data.name}</li>
		<li>${info.data.birthdate}</li>
		<li>${info.data.github_handle}</li>
		<li>${info.data.website}</li>
	</ul>
	`;
	document.body.insertAdjacentHTML("beforeend", charHtml);
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