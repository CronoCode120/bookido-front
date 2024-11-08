const getAuthors = authors => {
  const length = authors?.length
  if (length >= 3) return `${authors[0]} y ${length - 1} más`
  if (length === 2) return authors.join(' y ')
  if (length === 1) return authors[0]
  return 'Sin información del autor'
}

export const getFullAuthors = authors => {
  const length = authors?.length
  if (length > 1)
    return authors.reduce((acc, author, idx) => {
      if (idx === length - 1) return acc + ' y ' + author
      return acc + ', ' + author
    })

  if (length === 1) return authors[0]

  return 'Sin información del autor'
}

export default getAuthors
