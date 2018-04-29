import axios from 'axios'

export async function fetchCvData(dataUrl) {
  return await axios.get(dataUrl)
}

export const flatten = a =>
  a.reduce(
    (newArray, element) =>
      element instanceof Array
        ? [...newArray, ...element]
        : element !== undefined
          ? [...newArray, element]
          : newArray,
    []
  )
