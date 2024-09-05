import BookItem from '../../../components/BookItem.jsx'
import BookList from '../../../components/BookList.jsx'

import books from '../../../books.json'

const Shelf = () => {
  const handlePress = book => {
    console.log('delete ' + book.isbn[0])
  }

  return (
    <BookList
      books={books}
      renderBook={book => (
        <BookItem book={book} action='delete' onPress={handlePress} />
      )}
    />
  )
}

export default Shelf
