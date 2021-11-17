interface Config {
  token: string,
  client_id: string,
  prefix: string
}

const config: Config = {
  token: process.env.BOT_TOKEN || '',
  client_id: process.env.CLIENT_ID || '',
  prefix: process.env.COMMAND_PREFIX || ''
}

export default config