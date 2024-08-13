import React from 'react'
import { Typography, Box,Paper} from "@mui/material"

export default function Card( {data} ) {
  return (
    <div style={{ height:"20vh", overflow:"auto" }}>
        {/* <Paper sx={{ p:3 }}>
            Card contents
        </Paper> */}
        <Box sx={{ p:3, backgroundColor:"yellow" }}>
           <Typography variant='body2'>
            {data?.quote}
           </Typography>
           <Typography variant='caption' color={"text.secondary"}>
            {data?.author}
           </Typography>
           {/* <Typography variant='caption' color={"text.secondary"}>
            {data?.author}
           </Typography> */}
        </Box>
    </div>
  )
}
