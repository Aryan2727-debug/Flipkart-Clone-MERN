import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const LeftContainer = styled(Box)`
   min-width : 40%;
   padding : 40px 0 0 80px;
`;

const Image = styled('img')({
    padding : '15px'
});

const StyledButton = styled(Button)`
    width : 48%;
    height : 50px;
    border-radius : 2px;
`;

function ActionItems({product}){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const {id} = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate("/cart");
    };

    const buyNow = () => {
        let response = payUsingPaytm({amount : 500, email : 'aryan@gmail.com'});
        let information = {
            action : 'https://securegw-stage.paytm.in/order/process',
            params : response
        };
        post(information);
    };

    return(
        <>
          <LeftContainer>
            <Box style={{padding : '15px 20px', border : '1px solid #f0f0f0', width : '90%'}}>
               <Image src={product.detailUrl} alt="product"/>
            </Box>
            <StyledButton onClick={() => addItemToCart()} variant="contained" style={{marginRight : 10, background : "#ff9f00"}}><ShoppingCartIcon/>Add to Cart</StyledButton>
            <StyledButton onClick={() => buyNow()} variant="contained" style={{background : "#fb541b"}}><FlashOnIcon/>Buy Now</StyledButton>
          </LeftContainer>
        </>
    );
};

export default ActionItems;