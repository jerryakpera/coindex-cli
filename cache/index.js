const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient();

const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);

async function fetch(name) {
  console.log('SOLID');
  // const cachedData = await GET_ASYNC(name);
  // console.log(cachedData);

  // try {
  //   if (cachedData) {
  //     return JSON.parse(cachedData);
  //   } else return;
  // } catch (err) {
  //   console.log(0, err);
  // }
}

module.exports = {
  fetch,
};
