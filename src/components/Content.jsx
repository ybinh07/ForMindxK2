import { hover } from '@testing-library/user-event/dist/hover'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
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
const Link = styled.a`
  margin-top: 10px;
`

const Content = ({ cpn, title, content }) => {
  const [seeMore, setSeeMore] = useState(false)
  const handleHover = () => {
    setSeeMore(true)
  }
  const outHover = () => {
    setSeeMore(false)
  }
  return (
    <>


      <div onMouseOver={handleHover} onMouseOut={outHover} className='content'>
        <div>{cpn}</div>
        <ContentBox>
          <H3>{title}</H3>
          <Text>{content}</Text>
        </ContentBox>
        {seeMore && <a className='see-more'>Xem Thêm</a>}
      </div>

    </>
  )
}

export default Content