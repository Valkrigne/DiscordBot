import type Discord from 'discord.js'
import { MessageEmbed } from 'discord.js'
import getEnvValue from '../utils/getEnvValue'

async function updateFFXIVEmbed(client: Discord.Client) {
  const message = await getFFXIVMessage(client)

  if (message) {
    const newEmbed = buildEmbed()

    await message.edit({ embeds: [newEmbed] })
  }
}

async function getFFXIVMessage(client: Discord.Client): Promise<Discord.Message | false> {
  const channel: Discord.Channel | null = await client.channels.fetch(getEnvValue('ffxiv_channel_id'))
  
  if (channel && channel.isText()) {
    return channel.messages.fetch(getEnvValue('ffxiv_message_id'))
  }

  console.log('Failed to retrieve Channel')
  return false
}

function buildEmbed(): Discord.MessageEmbed {
  const embedValues = buildEmbedValues()
  return new MessageEmbed()
    .setDescription(embedValues.description)
    .setTitle(embedValues.title)
    .setThumbnail(embedValues.thumbnail)
}

function buildEmbedValues(): { title: string, description: string, thumbnail: string } {
  return {
    title: 'FFXIV Resources',
    description: "• [Endwalker Availability](https://docs.google.com/spreadsheets/d/1Z5m1c1eNlIgdt8H5Fi6elmtAiF8Nex2cFsSd7MAsZd8/edit)\n• [XIVSim](https://xivsim.com/)",
    thumbnail: getEnvValue('thumbnail_url'),
  }
}

export default updateFFXIVEmbed
