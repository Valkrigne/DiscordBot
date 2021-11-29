import type Discord from 'discord.js';

import { loadDescription } from './shared';

import embedBuilder from './builder';

async function updateFFXIVEmbed(client: Discord.Client) {
  return embedBuilder(client, 'ffxiv_message_id', {
    title: 'FFXIV Resources',
    description: loadDescription('ffxiv'),
  });
}

export default updateFFXIVEmbed;
