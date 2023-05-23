import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Component = styled(Box)`
   height : 65vh;
   width : 80%;
   background : #fff;
   margin : 80px 140px;
`;

const Container = styled(Box)`
   text-align : center;
   padding-top : 70px;
`;

function EmptyCart(){

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    return(
        <Component>
            <Container>
                <img src={imgurl} alt="empty" style={{width : '15%'}}/>
                <Typography>Your Cart is empty!</Typography>
                <Typography>Add items to it now</Typography>
            </Container>
        </Component>
    );
};

export default EmptyCart;