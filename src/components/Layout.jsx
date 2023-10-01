import React, { useState } from 'react'
import styled from 'styled-components';
import Icon from './Icon';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPiggyBank } from 'react-icons/fa'
import { PiChartLineUpBold } from 'react-icons/pi'
import { FaWallet } from 'react-icons/fa'
import { FaShieldAlt } from 'react-icons/fa'
import Content from './Content';
import FooterInfo from './FooterInfo';
import AddressInfo from './AddressInfo';

// setnav(listNav)
const Pic = styled.div`
      width: 100%;
      height: 750px;
      background-image: url(${props => props.src});
      background-size: 100% 750px;

  `
const Header = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
  ;

  `

const DivIc = styled.div`
      display: flex;
      margin: auto 0px;
  `

const Footer = styled.footer`
  background-color: #070d13;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 85px;
  align-items: center;
  color: #e4e4e4;
  font-size: 16px;
  border-top: 1px solid #192129;
`

const Banner = ({ src }) => {

  const listNav = ['Trang chủ', 'Thông tin', 'Hỏi đáp', 'Liên hệ', 'Thành viên']

  const iconContent =
    [
      <FaPiggyBank size={60} style={{ color: '#fb7756' }} />,
      <PiChartLineUpBold size={55} style={{ color: '#facd60' }} />,
      <FaWallet size={55} style={{ color: '#1ac0c6' }} />,
      <FaShieldAlt size={53} style={{ color: '#ee0979' }} />
    ]

  const [nav, setnav] = useState(listNav)

  // console.log(nav)
  return (
    <>
      <Pic src={src} >

        <Header className='container'>
          <DivIc>
            <Icon width='28px' pic='https://whitefoobank.netlify.app/assets/img/whitefoologohead.png'></Icon>
            <Icon width='108px' pic='https://whitefoobank.netlify.app/assets/img/whitefoologocap.png'></Icon>
          </DivIc>


          <Navbar>
            {nav.map((item, index) => {
              return <Nav className='nav_item' key={index}>{item}</Nav>
            })}
          </Navbar>


        </Header>

        <div className='container'>
          <div className='title-container'>
            <h1 className='title'>Thanh toán không thể đơn giản hơn</h1>

            <p className='title_message'>Hệ thống ngân hàng Internet hiện đại được tạo ra dành cho bạn.</p>

            <button class="start-button">BẮT ĐẦU</button>
          </div>

        </div>

      </Pic>
      <div className='container content-container'>
        <Content
          cpn={iconContent[0]}
          title='Tiết Kiệm'
          content='Chuyển tiền trong và ngoài ngân hàng một cách dễ dàng và nhanh chóng với mức phí phù hợp.'
        />

        <Content
          cpn={iconContent[1]}
          title='Chất Lượng'
          content='Các dịch vụ của WhiteFoo Bank sẽ mang đến cho bạn những gì tốt nhất hiện có, và nhiều ưu đãi.'
        />

        <Content
          cpn={iconContent[2]}
          title='Nhanh Chóng'
          content='Giao dịch diễn ra chưa đến 5 giây kể từ lúc xác nhận thanh toán, chuyển trực tiếp đến người nhận.'
        />

        <Content
          cpn={iconContent[3]}
          title='Bảo Mật'
          content='Thông tin giao dịch luôn được mã hóa để giúp dữ liệu của bạn luôn được an toàn, không bị đánh cắp.'
        />
      </div>
      <div className='container-info-footer' >
        <div className='container spacing-footer'>

          <div className='brand-footer'>
            <Icon width='150px' pic='https://whitefoobank.netlify.app/assets/img/whitefoologocap.png'/>
            <p style={{paddingTop:'20px',fontSize:'15px'}}>Hệ thống ngân hàng xuyên quốc gia đáng tin cậy. 
              Dẫn đầu trong danh sách các ngân hàng được người dùng bình chọn
              và được tin dùng bởi hàng triệu người dùng ở hầu hết các quốc gia trên thế giới.</p>
          </div>
         

            <FooterInfo 
            title='Giới Thiệu' 
            content1='Về chúng tôi' 
            content2='Dịch vụ'
            content3='Tính năng' 
            content4='Bảng giá'/>

            <FooterInfo 
            title='Hỗ Trợ' 
            content1='Câu hỏi thường gặp' 
            content2='Chính sách bảo mật' 
            content3='Điều khoản sử dụng' 
            content4='Liên hệ'/>

            <AddressInfo 
            title='Liên Hệ'
            content1='Địa chỉ:227 Đường Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh'
            content2='Email:admin@whitefoo.com'
            content3='Phone:(+84) 1234567890'/>
        </div>
      </div>
      <Footer>2020 WhiteFoo Corporation - Copyright lololol</Footer>
    </>

  )
}

export default Banner