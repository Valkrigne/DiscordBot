import type Discord from 'discord.js'
import { Client, Collection } from 'discord.js'

import embeds from './embeds'

import config from './config'
import { exit } from 'process'


type CommandKeys = string

interface Command {
  execute: (client: Discord.Client, message: Discord.Message, args: string[]) => void
}

function initializeBot(): Discord.Client {
  const clientOptions: Discord.ClientOptions = { intents: [] }
  const client = new Client(clientOptions)
  if (process.env.NODE_ENV === 'development') {
    client.on('debug', console.log)
  }
  return client
}

function runBot(client: Discord.Client) {
  const commands = new Collection<CommandKeys, Command>()

  client
    .on('ready', () => {
      console.log('Bot is ready...');
    })
    .on('message', (message) => {
      // Make sure the message contains the command prefix from the config.json.
      if (!message.content.startsWith(config.prefix)) return
      // Make sure the message author isn't a bot
      if (message.author.bot) return

      // Split the message content and store the command called, and the args.
      const messageSplit = message.content.split(/\s+/g);
      const cmd = messageSplit[0].slice(config.prefix.length);
      const args = messageSplit.slice(1);

      try {
        // Check if the command called exists in either the commands Collection
        // or the aliases Collection.
        let command;
        if (commands.has(cmd)) {
          command = commands.get(cmd);
        }

        // Make sure command is defined.
        if (!command) return;

        // If the command exists then run the execute function inside the command file.
        command.execute(client, message, args);
      } catch (err) {
        console.error(err);
      }
    });

  client.login(config.token)
}

function updateEmbeds(client: Discord.Client) {
  client
  .on('ready', () => {
    console.log('Updating Embeds...')
    embeds(client).then(() => {
      console.log('Updates Complete')
      exit(1)
    })
  })

  client.login(config.token)
}

function destroyBot(client: Discord.Client) {
  client.destroy()
}

export {
  initializeBot,
  runBot,
  updateEmbeds
}
