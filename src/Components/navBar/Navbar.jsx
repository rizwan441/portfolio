import React from 'react'
import { Box,Typography,styled } from '@mui/material'

const Wrapper = styled(Box)`
margin-top:10px;
display:flex;
flex-direction:row;

`
const TextName = styled(Typography)`
color:blue;
margin-right:20px;
margin-left:20px
// text-decuration:underline;
cursor:pointer;justify-content:center;




`

const Navigation = styled(Box)`
height: 27.00002098083496px;
width: 276px;
left: 582px;
top: 37px;
border-radius: null;
justify-content:center;


`

const Navbar = () => {
  return (
    <Wrapper>
      <Box>
        <TextName>Rizwan Zafar</TextName>
      </Box>

      <Navigation style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:"space-evenly"
      }}>
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="contact">Contact me</a>
      <a href='#experiance'>Experiance</a>

      </Navigation>

      <Box>


      </Box>
    </Wrapper>
  )
}

export default Navbar