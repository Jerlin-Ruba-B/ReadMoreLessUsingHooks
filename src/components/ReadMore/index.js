import {useState} from 'react'

import {
  BgContainer,
  Heading,
  SubHeading,
  ImgEl,
  Description,
  DescContainer,
  ButtonEl,
} from './styledComponents'

const ReadMore = () => {
  const [currentState, changeState] = useState(false)
  const updateState = () => {
    changeState(prevState => !prevState)
  }

  const text =
    'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'

  const slicedText = text.slice(0, 170)

  return (
    <BgContainer>
      <Heading>React Hooks</Heading>
      <SubHeading>Hooks are a new addition to React</SubHeading>
      <ImgEl
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {currentState ? (
        <>
          <DescContainer>
            <Description>{text}</Description>
          </DescContainer>
          <ButtonEl onClick={updateState}>Read Less</ButtonEl>
        </>
      ) : (
        <>
          <DescContainer>
            <Description>{slicedText}</Description>
          </DescContainer>
          <ButtonEl onClick={updateState}>Read More</ButtonEl>
        </>
      )}
    </BgContainer>
  )
}
export default ReadMore
