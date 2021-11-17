import getEnvValue from './getEnvValue'

export default function defaultEmbedValues() {
  return {
    thumbnail: getEnvValue('thumbnail_url'),
  }
}