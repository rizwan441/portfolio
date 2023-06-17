import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react';
import Imag from './../assets/imag.png'




const Wrapper = styled(Box)`
height: 132px;
width: 900px;
left: 97px;
top: 1137px;
border-radius: nullpx;

`
const Text = styled(Typography)`

font-family: Poppins;
font-size: 100px;
font-weight: 800;
line-height: 116px;
letter-spacing: 0em;
text-align: left;
margin-left:97px


`

const TextDetail = styled(Typography)`
height: 132px;
width: 900px;
margin-left: 97px;
top: 1137px;
border-radius: nullpx;

font-family: Poppins;
font-size: 24px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: left;

`
const Listitems = styled(Typography)`
height: 132px;
width: 900px;
margin-left: 384px;
margin-top:110px;
border-radius: nullpx;
font-family: Poppins;
font-size: 24px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: left;




`


const AboutWork = styled(Typography)`
height: 116px;
width: 292px;
margin-left: 97px;
margin-top: 230px;
border-radius: nullpx;
font-family: Poppins;
font-size: 100px;
font-weight: 800;
line-height: 116px;
letter-spacing: 0em;
text-align: left;
`
const WorkDetail = styled(Typography)`
height: 132px;
width: 900px;
margin-left: 97px;
margin-top: 2px;
border-radius: nullpx;
font-family: Poppins;
font-size: 24px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: left;
color: #03045E;



` 
const ImagSubtitle = styled(Box)
`
display:flex;
flex-direction:row;
height: 44px;
width: 141px;
margin-left: 97px;
top: 10px;
border-radius: nullpx;
font-family: Poppins;
font-size: 15px;
font-style: italic;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: left;




`
const LImageDetail = styled(Typography)`
position: absolute;
width: 141px;
height: 44px;
margin-left: 97px;
margin-top: 31px;

font-family: 'Poppins';
font-style: italic;
font-weight: 400;
font-size: 15px;
line-height: 44px;
/* identical to box height, or 293% */


/* Dark Blue */

color: #03045E;

`
const RImageDetail = styled(Typography)`


position: absolute;
width: 141px;
height: 44px;
margin-left: 897px;
margin-top: 31px;

font-family: 'Poppins';
font-style: italic;
font-weight: 400;
font-size: 15px;
line-height: 44px;
/* identical to box height, or 293% */


/* Dark Blue */

color: #03045E;

`


const About = () => {
  return (
     <>
      <section id="#about">
        <Wrapper>
          <Box>
            <Box  styled={{height: "116px",
width: "341px",
marginLeft: "97px",
marginTop:"989px"}}>

            <Text style={{marginLeft:"px"}}> 
              About
            </Text>
            </Box>
          <TextDetail >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
            </TextDetail>

            <ol>
              <li>
                <Listitems>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
                </Listitems>
                  <Listitems>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
                </Listitems>
                  <Listitems>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
                </Listitems>
                

              </li>

            </ol>
          </Box>
          <Box>
            
              <AboutWork  style={{display:"flex",flexDirection:"column"}}>
                  work
            </AboutWork>
            <WorkDetail>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
            </WorkDetail>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
            justifyContent:'space-between'
            }}>
            
            <img src={Imag} alt="" srcset="" style={{
              height: '400px',
              marginLeft: '97px',
              marginTop: '27px',
              borderRadius: '0px',
              width: '560px',
              justifyContent:'space-between'

            
            }} />
            
            
            <img src={Imag} alt=""
              style={{
                height: '400px',
                marginLeft: '500px',
                marginTop: '27px',
                borderRadius: '0px',
                width: '560px',
              }} />
              
            
          </Box>
          <ImagSubtitle>

          <LImageDetail style={{color:'dark-blue'}}>
               November 24, 2019 


            </LImageDetail>
            
          <RImageDetail>
               Dec 24,2021

            </RImageDetail>
           
          </ImagSubtitle>

           <LImaga>
              Some Case Study
          </LImaga>
          <RImaga>
            Some case Study
          </RImaga>
          <CaseStudy1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.

          </CaseStudy1>
           <CaseStudy2 style={{marginTop:"-15px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.

              </CaseStudy2>
        </Wrapper>
     
      </section>
      
      </>
  )
}

export default About;

const LImaga = styled(Typography)`
height: 44px;
width: 215px;
margin-left: 97px;
margin-top: 11px;
border-radius: nullpx;
font-family: Poppins;
font-size: 24px;
font-weight: 600;
line-height: 44px;
letter-spacing: 0em;
text-align: left;

`
const RImaga = styled(Typography)`
height: 44px;
width: 215px;
margin-left: 977px;
ma-gin_top: -3px;
border-radius: nullpx;
font-family: Poppins;
font-size: 24px;
font-weight: 600;
line-height: 44px;
letter-spacing: 0em;
text-align: left;

`
const CaseStudy1 = styled(Typography)`
font-family: Poppins;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
height: 96px;
width: 560px;
margin-left: 97px;
top: 3195px;
border-radius: nullpx;


`

const CaseStudy2= styled(Typography)`
font-family: Poppins;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
height: 96px;
width: 560px;
margin-left: 777px;
top: 3195px;
border-radius: nullpx;


`