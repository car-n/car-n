const pg = require('./index.js').pg;

module.exports = {

  getMostRecentSurges: (callback) => {
    pg.table('surgebyzip')
      .select('zipcode', 'surge')
      .orderBy('id')
      .limit(27)
      .then((result) => {
        callback(null, result);
      })
      .catch((error) => {
        callback(error, null);
      })
  },
  updatePG: (data, callback) => {
    pg.table('surgebyzip')
      .insert(data)
      .then((result) => {
        callback(null, result);
      })
      .catch((error) => {
        callback(error, null);
      })
  },
  updateRedis: (data, callback) => {

  }
}

//after either of these functions is called, the data should be added to the redis. 
