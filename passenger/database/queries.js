const pg = require('./index.js').pg;

const saveBooking = function(id, p_id, d_id, price, rate) {

	console.log("saveBooking query called");
	let query = `INSERT INTO bookings(p_id, d_id, price, rate) VALUES ('${id}', '${p_id}', '${d_id}', '${price}', '${rate}')`;
	console.log("saveBooking query = ", query);

	return pg.raw(query);
};


const saveLogin = function(id, lat, lon) {

	console.log("saveLogin query called");
	let query = `INSERT INTO passengers(id, lat, lon) VALUES ('${id}', '${lat}', '${lon})`;
	console.log("saveLogin query = ", query);

	return pg.raw(query);
};

const saveDriver = function(id, lat, lon) {

	console.log("saveDriver query called");
	let query = `INSERT INTO drivers(id, lat, lon) VALUES ('${id}', '${lat}', '${lon})`;
	console.log("saveDriver query = ", query);

	return pg.raw(query);
};

module.exports = {
	saveBooking : saveBooking,
	saveLogin : saveLogin,
	saveDriver : saveDriver
}

// INSERT INTO passengers(id, lat, lon) VALUES (1966545626, 377446615, -1224149368)
// INSERT INTO drivers(id, lat, lon) VALUES (763284024, 377836924, -1224111553);
// INSERT INTO bookings(p_id, d_id, price, rate) VALUES (1966545626, 763284024, 1200, 5);