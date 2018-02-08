const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router(); 
const db = require('../database/surges.js');
const redis = require("redis");
const client = redis.createClient();
const bluebird = require("bluebird");
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

client.on("error", function (err) {
    console.log("Error " + err);
});
// const {promisify} = require('util');
// const getAsync = promisify(client.get).bind(client);


 
// router.get('/', (ctx, next) => {
//   console.log(ctx)
// });
var updateRedis = (data) => {
  data.forEach((item) => {
    client.set(item.zipcode, item.surge);
  });
}

router.get('/get/surges', (ctx, next) => {
  console.log('got here')
  db.getMostRecentSurges((err, data) => {
    if (err) {
      console.error("Error retrieving from PG database: ", err);
      // ctx.status(500).json(err);
    } else {
      // put the data into the redis as key value pairs [zipcode: surge]
      updateRedis(data);
      console.log('updated')
    }
  })
});

// DID WORK WITH ALTERNATE ANDREW METHOD
// router.get('/get/surge/:zip', async (ctx) => {
//   try{ 
//     var result = await getAsync(ctx.params.zip);
//     console.log("result", result)
//     ctx.status = 200;
//     ctx.body = result;
//   } catch(error) {
//     console.error(error);
//   }
// });

router.get('/get/surge/:zip', async (ctx) => {
  try { 
    var result = await client.getAsync(ctx.params.zip);
    ctx.status = 200;
    ctx.body = result;
    // what i really want to do is use this result to calculate 
    // the fare price and send the price back to the user
    // maybe the end point that receives the request from 
    // passenger service will call this endpoint and do the calulations 
    // on its end with the result response
  } catch(error) {
    console.error("Error retrieving from redis database: ", error);
  }
});

// DID NOT WORK
// router.get('/get/surge/:zip', (ctx, next) => {
//   client.get(ctx.params.zip, (err, reply) => {
//     if (err) {
//       console.error("Error retrieving from database: ", err);
//     } else {
//       console.log(ctx.params.zip, reply);
//       ctx.status = 200;
//       ctx.body = reply;
//     }
//   })
// });

// router.post('/post/surges', (res, req) => {})

app
  .use(router.routes())
  .use(router.allowedMethods());


// app.use(ctx => {
//   // console.log(router)
//   ctx.body = 'Hello Koa';
// });

var port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Koa server start listening on port ${port}`)
});