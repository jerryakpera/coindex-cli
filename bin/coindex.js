#!/usr/bin/env node
const program = require('commander');

const pkg = require('../package.json');

program
  .version(pkg.version)
  .command('key', 'Manage API key -- https://p.nomics.com')
  .command('check', 'Check coin info')
  .parse(process.argv);
