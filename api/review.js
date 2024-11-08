import axios from 'axios'

const apiUrl = axios.create({
  baseURL: 'https://bookido-back-production.up.railway.app/review'
})

export const addReview = async ({ userId, isbn, value, review }) =>
  (
    await apiUrl.post('/', {
      userId,
      isbn,
      value,
      review
    })
  ).data

export const getReviewsByISBN = async isbn =>
  (
    await apiUrl.get('/', {
      params: {
        isbn
      }
    })
  ).data
