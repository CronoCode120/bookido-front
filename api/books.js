import axios from 'axios'

const apiUrl = axios.create({
  baseURL: 'https://bookido-back.onrender.com/books'
})

export const getBooksData = async page =>
  (
    await apiUrl.get('/', {
      params: { page }
    })
  ).data

export const getSynopsisByISBN = async isbn =>
  (
    await apiUrl.get('/description', {
      params: {
        isbn
      }
    })
  ).data
