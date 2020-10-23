const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');

module.exports = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();

      const key = keyManager.getKey();
      const crypto = new CryptoAPI(key);

      const priceOutputData = await crypto.getPriceData(cmd.coin, cmd.cur);
      console.log(priceOutputData);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};
