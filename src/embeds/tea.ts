import type Discord from 'discord.js'
import {
  getEnvValue,
  loadDescription,
  getFFXIVChannel,
  defaultEmbedValues,
  buildEmbededMessage
} from 'utils'

async function updateTEAEmbed(client: Discord.Client) {
  const message = await getTEAMessage(client)

  if (message) {
    const newEmbed = buildEmbed()

    await message.edit({ embeds: [newEmbed] })
  }
}

async function getTEAMessage(client: Discord.Client): Promise<Discord.Message | false> {
  return getFFXIVChannel(client)
    .then((channel: Discord.TextBasedChannels) => channel.messages.fetch(getEnvValue('tea_message_id')))
}

function buildEmbed(): Discord.MessageEmbed {
  return buildEmbededMessage(buildEmbedValues())
}


function buildEmbedValues(): { title: string, description: string, thumbnail: string } {
  return {
    ...defaultEmbedValues(),
    title: 'TEA Resources',
    description: loadDescription('tea')
  }
}

export default updateTEAEmbed
