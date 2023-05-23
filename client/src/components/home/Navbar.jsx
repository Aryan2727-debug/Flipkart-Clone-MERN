import React from "react";
import { navData } from "../../constants/data";

//importing libraries
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const Component = styled(Box)`
   display : flex;
   margin : 55px 150px 0 130px;
   justify-content : space-between;
`;

const Container = styled(Box)`
   padding : 12px 8px;
   text-align : center;
`;

const Text = styled(Typography)`
   font-size : 14px;
   font-weight : 600;
`;

function Navbar(){
    return(
        <>
          <Box style={{backgroundColor : "#fff"}}>
            <Component>
              {
                navData.map(data => (
                    <Container>
                      <img src={data.url} alt="nav" style={{width : 64}}/>
                      <Text>{data.text}</Text>
                    </Container>
                ))
              }
            </Component>
          </Box>
        </>
    );
};

export default Navbar;