import React from 'react'
import styled from 'styled-components'
import { H3, Hr } from './FooterInfo'
const Address = styled.li`
   list-style-type: none;
  display: block;
  font-size: 15px;
  padding: 2.6% 0px;
`

const AddressInfo = ({title,content1,content2,content3}) => {
  return (
    <div className='info-footer'>
      <H3 className='line'>{title}</H3>
      <Hr/>
      <Address>{content1}</Address>
      <Address>{content2}</Address>
      <Address>{content3}</Address>
    </div>
  )
}

export default AddressInfo