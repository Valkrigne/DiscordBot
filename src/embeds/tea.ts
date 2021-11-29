import type Discord from 'discord.js';

import { loadDescription } from './shared';

import embedBuilder from './builder';

async function updateTEAEmbed(client: Discord.Client) {
  return embedBuilder(client, 'tea_message_id', {
    title: 'TEA Resources',
    description: loadDescription('tea'),
  });
}

export default updateTEAEmbed;
