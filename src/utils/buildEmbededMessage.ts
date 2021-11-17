import type Discord from 'discord.js'
import { MessageEmbed } from 'discord.js'

interface EmbedValues {
  title: string,
  description: string,
  thumbnail: string
}

export default function buildEmbed(embedValues: EmbedValues): Discord.MessageEmbed {
  return new MessageEmbed()
    .setDescription(embedValues.description)
    .setTitle(embedValues.title)
    .setThumbnail(embedValues.thumbnail)
}