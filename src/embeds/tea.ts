import type Discord from 'discord.js'
import { MessageEmbed } from 'discord.js'
import getEnvValue from '../utils/getEnvValue'

async function updateTEAEmbed(client: Discord.Client) {
  const message = await getTEAMessage(client)

  if (message) {
    const newEmbed = buildEmbed()
    
    await message.edit({ embeds: [newEmbed] })
  }
}

async function getTEAMessage(client: Discord.Client): Promise<Discord.Message | false> {
  const channel: Discord.Channel | null = await client.channels.fetch(getEnvValue('ffxiv_channel_id'))

  if (channel && channel.isText()) {
    return channel.messages.fetch(getEnvValue('tea_message_id'))
  }

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
    title: 'TEA Resources',
    description: "• [Timeline](https://docs.google.com/spreadsheets/d/1fgfJvm4dYsBnkZJlcc6Gk56GSHKtmiGh_o6w1mKom2c/edit#gid=623794501)\n\n**Toolkits**\n• [Living Liquid](https://ff14.toolboxgaming.space/?id=840917529126061&preview=1)\n• [Limit Cut](https://ff14.toolboxgaming.space/?id=471910097676061&preview=1)\n• [BJ/CC](https://ff14.toolboxgaming.space/?id=779818049495061&preview=1)",
    thumbnail: getEnvValue('thumbnail_url'),
  }
}

export default updateTEAEmbed
