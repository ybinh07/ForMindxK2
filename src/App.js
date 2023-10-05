import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body, { AddPicture, BodyContainer, Title } from './components/Body';
import styled from 'styled-components';
import { BsCalendarFill, BsClockFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { Space, TimePicker, DatePicker, Button, Dropdown} from 'antd';
import { HiCurrencyDollar, HiMiniUserGroup } from 'react-icons/hi2';
import Input from 'antd/es/input/Input';
import { Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import IconAndItem from './components/IconAndItem';

const Div = styled.div`
background: linear-gradient(138deg, rgba(250,237,83,1) 0%, rgba(231,202,88,1) 34%, rgba(213,168,93,1) 52%, rgba(168,84,106,1) 100%);
`
const IconAndInput = [{
  icon: <BsCalendarFill size={25} />,
  inputBox: <DatePicker placeholder='Date' size='large' style={{ width: '190px' }} />
},
{
  icon: <BsClockFill size={28} />,
  inputBox: <TimePicker placeholder='Time' size='large' style={{ width: '190px' }} />
},
{
  icon: <HiLocationMarker size={25} />,
  inputBox: <Input placeholder='Venue' size='middle' style={{ width: '450px' }} />
},
{
  icon: <HiMiniUserGroup size={20} />,
  inputBox: <Input placeholder='Max capacity' size='large' style={{ width: '170px' }} />
},
{
  icon: <HiCurrencyDollar size={20} />,
  inputBox: <Input placeholder='Cost per pers' size='large' style={{ width: '170px' }} />
}]

const IconAndContent = [
  {
    icon: <BsCalendarFill size={35} />,
    content: 'October 11, Wed',
    size:'28px',
    weight:'600',
  },
  {
    icon: <BsClockFill size={36} />,
    content: '7 PM',
    size:'28px',
    weight:'600',
  },
  {
    icon: <HiLocationMarker size={17} />,
    content: 'Chelsea Market (163 W 20nd Street). Manhattan, NYC'
  },
  {
    icon: <HiMiniUserGroup size={17} />,
    content: '50 people'
  },
  {
    icon: <HiCurrencyDollar size={17} />,
    content: '$30'
  },
]
const Text = styled.p`
  width: 642px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
    
`
function App() {
  const [showSocial, setShowSocial] = useState(true)
  const hideCreatSocial = () => {
    setShowSocial(false)
  }
  return (
    <>
      {showSocial ? <div> <Div>

        <Header
          brand='https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/header-logo.a4cff821.svg'
        />
        <Body title='Untitle Event' icAip={IconAndInput.map((item, index) => {
          return <Space key={index} size={'middle'}>{item.icon}{item.inputBox}</Space>
        })} />

      </Div>
        <Container>

          <Button onClick={hideCreatSocial} className='create-social' block>Create Social</Button>

        </Container></div> :

        <Div>
          <BodyContainer style={{ height: 'fit-content' }}>
            <Container>
               
              <Header brand='https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/header-logo.a4cff821.svg' />
              <div className='d-flex justify-content-between'>
              
                <Title
                  className='title'>Web3 Founders & Designers Mixer +

                  fireside chat with Coinbase Senior Designer & Airfoil founder
                </Title>
                <AddPicture
                  style={{ backgroundImage: 'url(https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/image?url=https%3A%2F%2Fsupermomos-app-resources-us.s3.amazonaws.com%2FImages%2FSocialBanner%2Fbanner_1.jpg&w=750&q=75)' }} />
              </div>
              <div style={{ width: '40%', marginTop: '-3%',marginBottom:'15px' }}>

                <IconAndItem icAit={IconAndContent.map((item, index) => {

                  return <Space className='d-flex' key={index}>{item.icon}
                    <span style={{ color: 'black',fontSize:`${item.size}`,fontWeight:`${item.weight}` }}>
                      {item.content}
                    </span>
                  </Space>

                })} />
              </div>
              <div style={{ width: '50%', padding: '15px 0px' }}>
                <Text>Calling all web3 founders and designers for an exciting night of exchanging
                  ideas and making new friends! Come make friends with fellow designers and founders in web3.
                  There will also be lots of insights to be gained through an intimate chat +Q&A with two giants
                  in the industry:</Text>

                <Text>Phil Hedayatnia, Founder & CEO of Airfoil, a growth design studio that has designed and built
                  products in web3, the creator economy, the future of work, and much more for 80+ startups since 2018</Text>
                <Text>Jihoon Suh, Senior Product Designer at Coinbase, who was previously Senior Product Designer for Messenger for Meta.</Text>

                <Text>This will be a curated group with limited spots, so do sign up early!</Text>

                <Text>About Airfoil:</Text>

                <Text>Airfoil Studio is the design, branding, and engineering team helping web3 take flight.
                  As one of crypto’s first large-scale design firms, our mission is to design a friendlier
                  financial layer for the internet. We’re a team of 85+ creatives, working from Airfoil’s
                  hubs in Toronto, Singapore, and Seoul, who’ve worked on 100+ projects since 2018,
                  including Solana Pay, Drift Protocol, Bonfida Solana Name Service,
                  Utopia Labs, Planetarium, Layer3.xyz, MarginFi, Hyperspace, VBA Game, and more.</Text>

                <Text>Learn more about Airfoil and our work at airfoil.studio.</Text>
              </div>
            </Container>
          </BodyContainer>
        </Div>
      }

    </>
  )
}

export default App;
