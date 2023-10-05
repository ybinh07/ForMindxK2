import { Space } from 'antd'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const IconAndItem = ({icAit,font,weight,color}) => {
  return (
    <Space size={'large'} className='d-flex flex-wrap icon '>{icAit}</Space>
  )
}

export default IconAndItem