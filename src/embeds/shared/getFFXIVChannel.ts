import type Discord from 'discord.js';
import { exit } from 'process';
import { getEnvValue } from 'utils';

export default function getFFXIVChannel(
  client: Discord.Client,
): Promise<Discord.TextBasedChannels> {
  return client.channels
    .fetch(getEnvValue('ffxiv_channel_id'))
    .then((channel) => {
      if (channel && channel.isText()) {
        return channel;
      }

      console.log('Could not retrieve FFXIV channel');
      exit(2);
    });
}
