import React from 'react'
import styled from 'styled-components'

const Ic= styled.img`
    display: inline-block;
    margin-left: 8px;
    padding-top: 5px;
`
const Icon = ({pic,width,color}) => {
  return (
    <Ic style={{width,color}} src={pic} alt=''></Ic>
  )
}

export default Icon