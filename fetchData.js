fetch('https://api.covid19india.org/data.json')
	.then(response => response.json())
	.then(function(data) {
		appendData(data.statewise[0]);
	})
	.catch(err => console.error('Error: ', err));
		
function appendData(data) {
	var mainContainer = document.getElementById("covid19Data");
	var div = document.createElement("div");
	div.innerHTML = 'Confirmed: ' + data.confirmed + '<br><br>Active: ' + data.active + '<br><br>Recovered: ' + data.recovered + '<br><br>Deceased: ' + data.deaths;
	mainContainer.appendChild(div);
}