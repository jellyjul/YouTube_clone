import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {Videos, ChannelCard} from './Videos'

const ChannelDetail = () => {
  const { id } = useParams()
  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail