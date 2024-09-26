import { Indicator, Wrapper } from './styles/PageIndicator'

const PageIndicator = ({ pages, pageNum }) => {
  return (
    <Wrapper>
      {Array(pages)
        .fill()
        .map((_, idx) => (
          <Indicator key={idx} active={idx + 1 === pageNum} />
        ))}
    </Wrapper>
  )
}

export default PageIndicator
