// configuration.js

const company = 'ACME Inc.'
const year = 2022// scripts.js

import company from 'configuration.js';
import year from 'configuration.js';

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;