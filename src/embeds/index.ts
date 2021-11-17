import type Discord from 'discord.js'

import updateFFXIVEmbed from './ffxiv'
import updateTEAEmbed from './tea'

function updateEmbeds(client: Discord.Client) {
  return Promise.all([
    updateFFXIVEmbed(client),
    updateTEAEmbed(client)
  ])
}

export default updateEmbeds