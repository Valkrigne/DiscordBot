import { getEnvValue } from 'utils';

export default function defaultEmbedValues() {
  return {
    thumbnail: getEnvValue('thumbnail_url'),
  };
}
