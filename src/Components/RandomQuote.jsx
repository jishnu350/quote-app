import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import CircularProgress from '@mui/material/CircularProgress';

export default function RandomQuote() {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false);
    const getRandomQuote = async () => {
        axios
        .get("https://dummyjson.com/quotes/random")
        .then((response)=>{
            setLoading(true);
            setTimeout(() => {
                setQuote(response.data);
                setLoading(false);
            }, 2000);
        })
        .catch((error)=>{
          console.log(error);
      });
    };
  return (
    <Box sx={{  p:2, backgroundColor:"yellow" }}>
        <Box sx={{ display:"flex", justifyContent:"end" }}>
            {loading?(
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent:"center", 
                    alignItems:"center" 
                    }}>
                     <CircularProgress size={25}/>
                  </Box>
            ) : (
                <Tooltip title="Click to refresh" arrow placement='top'>
                <IconButton color='secondary' onClick={getRandomQuote}>
                    <RefreshIcon/>
                </IconButton>
              </Tooltip>
            )}         
        </Box>
        <Box>
            {loading?(
                <Typography variant='body2' sx={{ fontWeight: 600 }}></Typography>
            ) : (
                <Typography variant='body2' sx={{ fontWeight:"600" }}>{quote == null ? "Click the refresh button to get a random quote":quote?.quote}</Typography>
            )}
            
        </Box>
        <Box sx={{ display:"flex", justifyContent:"end" }}>
            <Typography variant='caption' color="text.secondary" >{ loading?"": quote?.author}</Typography>
        </Box>
       </Box>
  );
}
