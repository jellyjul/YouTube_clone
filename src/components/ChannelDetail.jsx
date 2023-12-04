import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchFromApi } from '../assets/fetchFromApi'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  console.log(channelDetail,videos)

  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
      fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id])
  
  return (
    <Box minHeight='95vh'>
        <Box>
          <div style = {{
            background: 'linear-gradient(90deg, rgba(0,210,233,1) 0%, rgba(149,0,145,1) 100%, rgba(0,212,255,1) 100%)',
            zindex:10,
            height:'300px'
          }}
          />
           <ChannelCard channelDetail={channelDetail} 
           marginTop='-93px'/>
        </Box>
        <Box display='flex' p = '2'>
          <Box sx = {{mr:{sm:'180px'}}}/>
            <Videos  videos = {videos}/>

        </Box>
    </Box>
  )
}

export default ChannelDetail