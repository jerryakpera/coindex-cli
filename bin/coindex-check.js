const program = require('commander');

const checkController = require('../commands/check');

program
  .command('price')
  .description('Check price of coins')
  .option(
    '--coin <type> ',
    'add specific coin types in csv formats',
    'BTC, ETH, XRP'
  )
  .option('--cur <currency>', 'Change the currency', 'USD')
  .action((cmd) => {
    checkController.price(cmd);
  });

program.parse(process.argv);
