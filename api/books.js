import axios from 'axios'

const apiUrl = axios.create({
  baseURL: 'https://bookido-back.onrender.com/books'
})

export const getBooksData = async () => (await apiUrl.get('/')).data

export const getSynopsisByISBN = async isbn =>
  (
    await apiUrl.get('/description', {
      params: {
        isbn
      }
    })
  ).data
