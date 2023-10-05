import React, { useState } from 'react';
import { Tag } from 'antd';

const TagShow = ({ item }) => {
  const [tagValues, setTagValues] = useState([]);
  const [showTags, setShowTags] = useState(false);
  const handleClick = () => {
    setTagValues(prevTagValues => [...prevTagValues, item])
    setShowTags(true);
  };

  return (
    <>
      
        {showTags && (
          
            tagValues.map((tag, index) => (
              <Tag key={index} closable color="default">
                {tag}
              </Tag>
              
            ))
            
        )}
      
        <Tag onClick={handleClick} color="default">{item}</Tag>
    </>
  );
};

export default TagShow;