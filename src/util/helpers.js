import axios from 'axios'

export async function fetchCvData(dataUrl) {
  return await axios.get(dataUrl)
}
