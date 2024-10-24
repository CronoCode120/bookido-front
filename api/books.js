import axios from 'axios'

const apiUrl = axios.create({
  baseURL: 'https://bookido-back-production.up.railway.app/books'
})

export const getBooksData = async (page, userId) =>
  (
    await apiUrl.get('/', {
      params: { page, userId }
    })
  ).data

export const getBookByISBN = async (isbn, fields) =>
  (
    await apiUrl.get(`/${isbn}`, {
      params: { fields }
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

export const getBooksByTitle = async title =>
  (
    await apiUrl.get('/title', {
      params: {
        title
      }
    })
  ).data

export const addToTable = async (isbn, userId) =>
  (
    await apiUrl.post('/table', {
      isbn,
      userId
    })
  ).data

export const getBooksInTable = async userId =>
  (
    await apiUrl.get('/table', {
      params: { userId }
    })
  ).data

export const removeFromTable = async (isbn, userId) =>
  await apiUrl.delete('/table', {
    params: { isbn, userId }
  })

export const addToShelf = async (isbn, userId) =>
  (
    await apiUrl.post('/shelf', {
      isbn,
      userId
    })
  ).data

export const getBooksInShelf = async userId =>
  (
    await apiUrl.get('/shelf', {
      params: { userId }
    })
  ).data

export const removeFromShelf = async (isbn, userId) =>
  await apiUrl.delete('/shelf', {
    params: { isbn, userId }
  })

export const discardBook = async (isbn, userId) =>
  (
    await apiUrl.post('/discard', {
      isbn,
      userId
    })
  ).data
