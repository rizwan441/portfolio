import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import styled from '@emotion/styled';
import CV from './../assets/CV.pdf'


const DetailText = styled(Typography)`
font-style:Popin;
font-weigt:600;
font-size:28px;
Line-height:42px;
color:#03045E

`
const Component = styled(Box)`
height:10vh;
width:120vh;
display:flex;
flex-direction:row;
jutify-content:center;
align-items:center;
margin-top:200px;
margin-left:60px
`
const Detail = styled(Box)`
// width:21px;
// height:42px;
margin-top:200px;
margin-left:97px

`
const AboutMain = styled(Typography)`
font:Poppins;
font-weight:800;font-size:100px;
line-height:116px;


`
// const CVButton = styled(Button)`
// height: 8px;
// width: 164px;
// left: 97px;
// top: 650px;
// border-radius: 0px;

// `

// const IMGdetail = styled('img')`
//         width:  100%;

// `
// const LBox = styled(Box)`
// height:50%;
// width:100%;
// padding:45px 35px;

// `
// const Rbox = styled(Box)`
// display:flex;
// flex-direction:row;
// padding:35px 45px;
// `
// const Backgimg = styled(Box)`
// box-sizing: border-box;

// // position :relative;
// left: 0%;
// right: 2.57%;
// top: 0%;
// bottom: 0%;
// width:100%;

// /* Dark Brown */

// border: 1px solid #474306;
// border-radius:79%;
// color:brown;
// background-color:brown;
// `
const Me = () => {
    return (
        <>
            <Component>
                
        <Box style={{display:"flex", flexDirection:'row'}}>
            <Detail>
                <DetailText>Hello I m Rizwan Zafar</DetailText>
            <AboutMain>
                Product Designer
                        </AboutMain>
                        <Button href={CV} download style={{ }}>DownLoad Resume</Button>
           <Button >Lets talk</Button>
                    </Detail>
                    
      <Box>
     </Box>
    </Box>
      </Component>

      </>)
}

export default Me