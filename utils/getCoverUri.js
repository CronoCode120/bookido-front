const getCoverUri = (isbn, imgSize = 'M') => {
  let size = imgSize
  if (size !== 'S' && size !== 'M' && size !== 'L') size = 'M'
  return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`
}

export default getCoverUri
