if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path:  '.env.dev'})
} else {
  require('dotenv').config()
}

import {
  initializeBot,
  runBot,
  updateEmbeds
} from './bot'

const client = initializeBot()

// some switch/logic for this
if (true) {
  updateEmbeds(client)
} else {
  runBot(client)
}

