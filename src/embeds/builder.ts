import type Discord from 'discord.js';
import { getEnvValue } from 'utils';

import {
  getFFXIVChannel,
  defaultEmbedValues,
  buildEmbededMessage,
} from './shared';

function buildEmbedValues(embedValues: any): {
  title: string;
  description: string;
  thumbnail: string;
} {
  return {
    ...defaultEmbedValues(),
    ...embedValues,
  };
}

async function embedBuilder(
  client: Discord.Client,
  messageIdKey: string,
  embedValues: any,
) {
  const message = await getFFXIVChannel(client).then(
    (channel: Discord.TextBasedChannels) =>
      channel.messages.fetch(getEnvValue(messageIdKey)),
  );
  if (message) {
    return message.edit({
      embeds: [buildEmbededMessage(buildEmbedValues(embedValues))],
    });
  }

  return null;
}

export default embedBuilder;
