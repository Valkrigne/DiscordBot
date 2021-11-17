import type Discord from 'discord.js'
import {
  getEnvValue,
  loadDescription,
  getFFXIVChannel,
  defaultEmbedValues,
  buildEmbededMessage
} from 'utils'

async function updateFFXIVEmbed(client: Discord.Client) {
  const message = await getFFXIVMessage(client)

  if (message) {
    const newEmbed = buildEmbed()

    await message.edit({ embeds: [newEmbed] })
  }
}

async function getFFXIVMessage(client: Discord.Client): Promise<Discord.Message | false> {
  return getFFXIVChannel(client)
    .then((channel: Discord.TextBasedChannels) => channel.messages.fetch(getEnvValue('ffxiv_message_id')))
}

function buildEmbed(): Discord.MessageEmbed {
  return buildEmbededMessage(buildEmbedValues())
}

function buildEmbedValues(): { title: string, description: string, thumbnail: string } {
  return {
    ...defaultEmbedValues(),
    title: 'FFXIV Resources',
    description: loadDescription('ffxiv'),
  }
}

export default updateFFXIVEmbed
