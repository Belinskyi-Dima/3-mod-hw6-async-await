const urlIp =`https://api.ipify.org/?format=json`;
const userInf ="https://ip-api.com/";

const btn = document.getElementById("btn");
const root = document.getElementById("root");

btn.addEventListener('click' ,fetchApi);
async function fetchApi(){
	const respIp = await fetch(urlIp)
	const data = await respIp.json()
	const ip =data.ip;

	usersResponse()

	async function  usersResponse () {
		const usResponse = await fetch(`http://ip-api.com/json/${ip}?fields=1572893`)
		const dat = await usResponse.json()
		console.log(dat);
	
		const ul = document.createElement('ul');
		root.append(ul);

		const continent = document.createElement("li");
			continent.innerHTML =  `<strong>continent</strong>: ${dat.continent}`;
		const country = document.createElement("li");
		country.innerHTML =  `<strong>country</strong>: ${dat.country}`;
		const regionName = document.createElement("li");
		regionName.innerHTML =  `<strong>region</strong>: ${dat.regionName}`;
		const city = document.createElement("li");
		city.innerHTML =  `<strong>city</strong>: ${dat.city}`;
		ul.append(continent, country, regionName, city, )
	}
	
}
