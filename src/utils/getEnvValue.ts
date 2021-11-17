import { exit } from "process"

export default function getEnvValue(key: string, forceQuitOnFail: boolean = false): string {
  const val = process.env[key]
  if (val && typeof val === 'string') {
    return val
  }

  if (forceQuitOnFail) {
    console.log(`${key} not set, exiting...`)
    exit(-1)
  } else {
    console.log(`${key} not set`)
    return ''
  }
}