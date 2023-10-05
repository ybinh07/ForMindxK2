import React, { useState } from 'react'
import { Radio } from 'antd';

const RadioShow = ({item}) => {
    const [value, setValue] = useState('');
    const handleChange = (e)=>{
        setValue(e.target.value)
        // console.log(e.target.value)
    }
  return (
   <>
   <Radio style={{fontWeight:'600'}} value={item} onClick={handleChange}>{item}</Radio>
   </>
  )
}

export default RadioShow