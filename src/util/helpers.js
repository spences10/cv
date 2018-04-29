import axios from 'axios'

export async function fetchCvData(dataUrl) {
  return await axios.get(dataUrl)
}

export function mergeArrays(base, ...arrays) {
  return base.concat(...arrays).sort((a, b) => a - b)
}
