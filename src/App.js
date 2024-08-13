import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Components/Card';
import { Box } from "@mui/material"
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import QuoteGenerator from './QuoteGenerator';
import RandomQuote from './Components/RandomQuote';
import CardSkeleton from './Components/CardSkeleton';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [QuotesLoading, setQuotesLoading] = useState(false);
  useEffect(() => {
    axios
      .get('https://dummyjson.com/quotes')
      .then((response) => {
        // console.log(response.data.quotes);
        setQuotesLoading(true);
        setTimeout(() => {
          setQuotesLoading(false);
          setAllQuotes(response.data.quotes);
        }, 2000);
        setAllQuotes(response.data.quotes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div >
      {/* <Box>
      <Card/>
     </Box> */}
      <Box sx={{ flexGrow: 1, backgroundColor: "purple" }}>
        <Grid container spacing={2} sx={{
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2
        }}>

          <Grid item xs={4} >
            <Item elevation={1}>
              <RandomQuote />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, backgroundColor: "purple", minHeight: "100vh" }}>
        <Grid container spacing={2} sx={{ p: 2 }}>
          {QuotesLoading?(
          ["a", "a", "a", "a", "a", "a"].map(()=>(
            <Grid item xs={4} >
            <Item elevation={5}>
              <CardSkeleton />
            </Item>
          </Grid>
          ))
        ):(
          allQuotes?.map((value,index)=>(
            <Grid item xs={4} key={index}>
              <Item elevation={5}>
                <Card data={value}/>
              </Item>
            </Grid>
              )))}
        </Grid>
        {/* <header className="App-header">
          <h1>Random Quote Generator</h1>
          <QuoteGenerator />
        </header> */}
      </Box>
    </div>
  );
}

export default App;
