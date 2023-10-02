
import React, {useState } from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
const H3 = styled.h3`
  font-size: 20px;
`
const ContentBox = styled.div`
  padding-top: 12px;
`
export const Text = styled.p`
  font-size: 15px;
  padding: 0px 20px;
`

const Content = ({ cpn, title, content }) => {
  const [seeMore, setSeeMore] = useState(false)
  const [line,setLine] = useState(false)
  const handleHover = () => {
    setSeeMore(true)
  }
  const outHover = () => {
    setSeeMore(false)
  }
  const appearLine = () => {
    setLine(true)
  }
  const outLine = () => {
    setLine(false)

  }
  return (
    <>


      <div onMouseOver={handleHover} onMouseOut={outHover} className='content'>
        <div>{cpn}</div>
        <ContentBox>
          <H3>{title}</H3>
          <Text>{content}</Text>
        </ContentBox>
        {seeMore && <a onMouseOver={appearLine} onMouseOut={outLine} className='see-more'>Xem Thêm</a>}
        {line && <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-container w3-blue w3-round line-see-more" ></div>
          </div>}
      </div>

    </>
  )
}

export default Content