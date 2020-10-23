const axios = require('axios');
const colors = require('colors');

const cache = require('../cache');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  }

  async getPriceData(coinOption, curOption) {
    try {
      // Formatter for currency
      const formatter = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: curOption,
      });

      // Join coin and cur option
      let option = `${coinOption}${curOption}`;
      option = option
        .split(',')
        .map((opt) => {
          return opt.trim();
        })
        .join('');

      // Check for option in cache
      console.log(cache(option));
      return;
      // If found return item from cache

      // Else fetch from the api
      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`
      );
      let output = '';

      res.data.forEach((coin, i) => {
        output += `Coin: ${coin.symbol.yellow} (${coin.name} | Price: ${
          formatter.format(coin.price).green
        } | Rank: ${coin.rank.green})`;

        if (i < res.data.length) output += '\n';
      });

      return output;
    } catch (err) {
      handleAPIError(err);
    }
  }
}

function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error('Your API Key is invalid go to https://p.nomics.com');
  } else if (err.response.status === 404) {
    throw new Error('The API is not responding');
  } else {
    throw new Error('Hmmm! Something is not working');
  }
}

module.exports = CryptoAPI;
