const saveLogin= require('./queries.js').saveLogin;

// san francisco range
// 37.784392 / 37.709100
// -122.510102 / -122.388737

const randomLon = () => {
	let random = Math.floor(Math.random() * (784392 - 709100 + 1)) + 709100
	let lon = 37000000 + random;
	return lon;
}

const randomLat = () => {
	let random = Math.floor(Math.random() * (510102 - 388737 + 1)) + 388737
	let lat = (122510102 - random);
	return lat;
}

const generateUsers = (count) => {

	for (var i = 0; i < count; i++) {

		let id = Math.floor(1000000000 + Math.random() * 900000000);
		let lat = randomLon();
		let lon = randomLat();

		saveLogin(id, lat, lon);
	}

};