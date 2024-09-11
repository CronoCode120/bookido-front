import { BookDetails, DrawerButtons, DrawerModal } from '.'

const AddDrawer = ({ book }) => {
  return (
    <DrawerModal>
      <BookDetails book={book} />
      <DrawerButtons isbn={book?.isbn} />
    </DrawerModal>
  )
}

export default AddDrawer
