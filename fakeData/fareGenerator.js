const zips = require('./zips').zips;
const moment = require('moment');
const fs = require('file-system');
var wstream = fs.createWriteStream('fakeData/fareData.txt');

var generateData = (startDate, mins) => {
  var now = new Date();
  while (startDate <= now) {
    var fareData = '';
    var prettyDate = startDate.format('YYYYMMDDHHmm');
    for (var i = 0; i < zips.length; i++) {
      fareData = fareData.concat(`${zips[i].toString()},${Number((Math.random() + 1).toFixed(5))},${Number(prettyDate)}\n`)
    }
    wstream.write(fareData);
    startDate.add(mins, 'minute');
  }
  wstream.end();
}

//  ==========    ==========
var startTime = new Date()
console.log('start: ', startTime)

var start = moment('01/01/17', 'DD/MM/YY');
generateData(start, 1);

var endTime = new Date()
console.log('end: ', endTime)
console.log('total: ', endTime - startTime)
//  ==========    ==========