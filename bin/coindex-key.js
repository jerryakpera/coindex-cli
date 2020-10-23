const program = require('commander');

const keyController = require('../commands/key');

program
  .command('set')
  .description('Sets your API Key from https://p.nomics.com')
  .action(keyController.set);

program.command('show').description('Show API Key').action(keyController.show);

program
  .command('remove')
  .description('Remove the current API Key')
  .action(keyController.remove);

program.parse(process.argv);
