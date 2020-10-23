const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');

const { isRequired } = require('../utils/validation');

module.exports = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message: 'Enter API Key'.green + ' https://p.nomics.com',
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log('API Key set'.blue);
    }
  },

  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log('Current API Key', key.yellow);
      return key;
    } catch (err) {
      console.error(err.message.red);
    }
  },

  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.removeKey();

      console.log('Key removed'.green);

      return;
    } catch (err) {
      console.error(err.red);
    }
  },
};
