const useBookPages = () => {
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    setPageNum(0)
  }, [book])

  const handleLeft = () => {
    setPageNum(prevNum => (prevNum <= 0 ? prevNum : --prevNum))
  }

  const handleRight = () => {
    setPageNum(prevNum => (prevNum >= 1 ? prevNum : ++prevNum))
  }

  return { pageNum, handleLeft, handleRight }
}

export default useBookPages
