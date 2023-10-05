import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import './body.css'
import { Checkbox, Input, Space, Radio, Typography } from 'antd';
import RadioShow from '../Radio/RadioShow';
import TagShow from '../Tags/TagShow';
import IconAndItem from '../IconAndItem';

const { Text } = Typography;
const { TextArea } = Input;

export const BodyContainer = styled.div`
    width: 100%;
    height: 66rem;
`

export const Title = styled.p`
`
const TitleContainer = styled.div`
    width: 500px;
    height: fit-content;
`
export const AddPicture = styled.div`
    width: 739px;
    height: 445px;
    background: rgba(242, 242, 242, 0.1);
    border: 1px dashed rgb(242, 242, 242);
    border-radius: 0px 64px;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    align-items: center;
`

const Setting = styled.div`
    -webkit-box-pack: center;
    background: rgb(254, 244, 82);
    width: fit-content;
    height: fit-content;
    font-weight: 700;
    font-size: 32px;
    line-height: 60px;
    color: rgb(148, 47, 112);
    padding: 0px 18px;
    margin-bottom: 20px;
    font-family: Inter;
`

const RadioList = ['Public', 'Curated Audience', 'Community Only']
const nameTags = ['Product', 'Marketing', 'Engineering', 'Design']
const Body = ({ title, icAip }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [tags, setTags] = useState(nameTags)
    const choosePicture = (event) => {
        const file = event.target.files[0]
        const readFile = new FileReader()
        readFile.onload = (e) => {
            setSelectedImage(e.target.result)
        }
        readFile.readAsDataURL(file)
    }
    return (
        <BodyContainer>
            <Container>
                <div className='d-flex flex-wrap justify-content-between'>
                    <TitleContainer >
                        <Title style={{width:'330px'}} className='title'>{title}</Title>
                        <IconAndItem icAit={icAip}/>
                    </TitleContainer>
                    <AddPicture type='file' style={{ backgroundImage: `url(${selectedImage})` }}>
                        <input className='input-file' id='file' type='file' onChange={choosePicture} ></input>
                        <label style={{ cursor: 'pointer' }} for="file"><img src='https://nextjs-test-k0n24xyth-hieu2304.vercel.app/_next/static/media/banner.ed746733.svg' alt='' />
                        </label>
                    </AddPicture>

                </div>

                <div className='container-des'>
                    <p>Description</p>
                    <TextArea
                        rows={9}
                        placeholder='Description of your event' />
                </div>

                <div className='settings'>

                    <div className='setting-container'>
                        <Setting className='d-flex justify-content-center'>Settings</Setting>
                        <Checkbox />
                        <p
                            style={{ padding: '0px 8px', fontSize: '14px' }}
                            className='d-sm-inline-block'>I want to approve attendees
                        </p>

                        <div>
                            <p className='title-pick'>Privacy</p>
                            <Radio.Group>
                                {RadioList.map((item, index) => {
                                    return <RadioShow key={index} item={item} />
                                })}
                            </Radio.Group>
                            <p className='title-pick'>Tag your social</p>

                        </div>


                        <Text className='text-muted' type="secondary">Pick tags for our curation engine to work its magin</Text>
                        <br></br><br></br>

                        {tags.map((element, index) => {
                            return <TagShow key={index} item={element}></TagShow>
                        })}
                    </div>
                </div>

            </Container>
        </BodyContainer>
    )
}

export default Body