import { useState, useEffect } from 'react'

const useBookPages = book => {
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    setPageNum(0)
  }, [book])

  const handleLeft = () => {
    setPageNum(prevNum => (prevNum <= 0 ? prevNum : --prevNum))
  }

  const handleRight = () => {
    setPageNum(prevNum => (prevNum >= 2 ? prevNum : ++prevNum))
  }

  return { pageNum, handleLeft, handleRight }
}

export default useBookPages
