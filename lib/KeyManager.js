const ConfigStore = require('configstore');

const pkg = require('../package.json');

class KeyManager {
  constructor() {
    this.conf = new ConfigStore(pkg.name);
  }

  setKey(key) {
    this.conf.set('apiKey', key);
    return key;
  }

  getKey() {
    if (!this.conf.get('apiKey')) {
      throw new Error('No API Key found, get a key at https://p.nomics.com');
    }

    return this.conf.get('apiKey');
  }

  removeKey() {
    if (!this.conf.get('apiKey')) {
      throw new Error('No API Key found, get a key at https://p.nomics.com');
    }

    this.conf.delete('apiKey');

    return;
  }
}

module.exports = KeyManager;
