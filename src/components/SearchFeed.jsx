import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import Videos from './Videos'
import { fetchFromApi } from '../assets/fetchFromApi'


const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

useEffect(() => {
  fetchFromApi(`search?part=snippet&q=${searchTerm }`)
  .then((data) => setVideos(data.items))
}, [searchTerm]);

  return (
  <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
      Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
    </Typography>

        <Videos videos={videos} />
  </Box>
  )
}

export default SearchFeed;