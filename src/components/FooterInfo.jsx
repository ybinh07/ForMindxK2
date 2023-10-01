import React from 'react'
import styled from 'styled-components'
const TextInfo =styled.a`
    text-decoration: none;
    font-size: 15px;
    color: #e4e4e4; 
    padding: 5px 0px;
`
export const Hr = styled.hr`
  width: 90%;
  border-bottom: 1px solid #192129;
 
  position: relative;
`
export const HrChild = styled.hr`
  width: 20%;
  position: absolute;
  border: 1px solid #ee0979;
  left: 0;
 
`
export const H3 = styled.h3`
    font-size: 24px;
    
`

const FooterInfo = ({title,content1, content2,content3,content4}) => {
  return (
    <>
    <div className='info-footer'>
    <H3 className='line'>{title}</H3>
    <Hr></Hr>
    
    <TextInfo id='info'>{content1}</TextInfo>
    <TextInfo id='info'>{content2}</TextInfo>
    <TextInfo id='info'>{content3}</TextInfo>
    <TextInfo id='info'>{content4}</TextInfo>
    </div>
    
    </>
  )
}

export default FooterInfo