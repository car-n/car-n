const pg = require('./index.js').pg;

const saveBooking = function(id, p_id, d_id, price, rate) {

	console.log("saveBooking query called");
	let query = `INSERT INTO bookings VALUES ('${id}', '${p_id}', '${d_id}', '${price}', '${rate}')`;
	console.log("saveBooking query = ", query);

	return pg.raw(query);
};


const saveLogin = function(id, lat, lon) {
	
	console.log("saveLogin query called");
	let query = `INSERT INTO passengers VALUES ('${id}', '${lat}', '${lon})`;
	console.log("saveLogin query = ", query);

	return pg.raw(query);
};

module.exports = {
	saveBooking : saveBooking,
	saveLogin : saveLogin
}