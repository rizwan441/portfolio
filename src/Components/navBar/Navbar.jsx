import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled(Box)`
  margin-top: 34px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
`;
const TextName = styled(Typography)`
  color: blue;
  margin-right: 20px;
  margin-left: 20px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  // text-decuration:underline;
  cursor: pointer;
`;

const Navigation = styled(Box)`
  display: flex;
  flex-direction: row;
  column-gap: 40px;
`;

const NavLink = styled("a")`
  color: dark-blue;
  font-size: 18px;
  font-weight: 400px;
`;

const NavIcons = styled(Box)`
  display: flex;
  width: 150px;
  justify-content: space-between;
  column-gap: 10px;
`;

const Navbar = () => {
  return (
    <Wrapper style={{}}>
      <Box>
        <TextName>Rizwan Zafar</TextName>
      </Box>

      <Navigation  >
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Work</NavLink>
      </Navigation>

      <NavIcons>
        <FontAwesomeIcon icon={faEnvelope} />
        
      </NavIcons>
    </Wrapper>
  );
};

export default Navbar;
