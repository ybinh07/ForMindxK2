import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import './style.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
export const Logo = styled.img`
    margin-top: 20px;
    width: 148px;
    aspect-ratio: auto 148 / 33;
    height: 33px;
`
const Header = ({background,brand}) => {
const navItem =['Blog','Socials','Past Socials',<NavDropdown title="Clubs"/>,'Contact']
const [nav,setNav] = useState(navItem)

const TextNav = styled.p`
    font-size: 14px;
    font-weight: 600;
    padding-left:50px;
    padding-top: 20px;
    
`
  return (
    <div style={{background,width:'100%',height:'140px'}}>
    <Container className='d-flex justify-content-between' >
        <Logo src={brand}/>
        <Navbar>
        {nav.map((item,index)=>{
           return<Nav.Link href='#' key={index}><TextNav className='nav-item'>{item}</TextNav></Nav.Link>
        })}
        </Navbar>
    </Container>
    </div>
  )
}

export default Header