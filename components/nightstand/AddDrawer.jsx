import BookDetails from './BookDetails.jsx'
import DrawerButtons from './DrawerButtons.jsx'
import DrawerModal from './DrawerModal.jsx'

const AddDrawer = ({ book, visible, toggleDrawer }) => {
  return (
    <DrawerModal visible={visible} onClose={toggleDrawer}>
      <BookDetails book={book} />
      <DrawerButtons isbn={book?.isbn} />
    </DrawerModal>
  )
}

export default AddDrawer
