if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.dev' });
} else {
  require('dotenv').config();
}

import { initializeBot, runBot, updateEmbeds } from './bot';

const client = initializeBot();

// Ensure client connection is closed on common exits
process.on('exit', () => {
  client.destroy();
});

process.on('SIGINT', () => {
  client.destroy();
});

// some switch/logic for this
// eslint-disable-next-line no-constant-condition
if (true) {
  updateEmbeds(client);
} else {
  runBot(client);
}
