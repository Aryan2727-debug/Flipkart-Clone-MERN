import React from "react";

//importing components
import LoginDialog from "../../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

//importing libraries
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Badge } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
   display : flex;
   margin : 0 3% 0 auto;
   & > button, & > p, & > div {
    margin-right : 40px;
    font-size : 16px;
    align-items : center
   }
`;

const Container = styled(Link)`
   display : flex;
   text-decoration : none;
   color : inherit
`;

const LoginButton = styled(Button)`
   color : #2874f0;
   background : #ffffff;
   text-transform : none;
   padding : 5px 40px;
   border-radius : 2px;
   box-shadow : none;
   font-weight : 600;
   height : 32px;
`;

function CustomButtons(){

    const [open, setOpen] = useState(false);

    const {account, setAccount} = useContext(DataContext);

    const {cartItems} = useSelector(state => state.cart);

    const openDialog = () => {
      setOpen(true);
    };

    return(
        <>
          <Wrapper>
            
            {
              account ? <Profile account={account} setAccount={setAccount}/> : <LoginButton onClick={() => openDialog()} variant="contained">Login</LoginButton>
            }

            <Typography style={{marginTop : 3, width : 135}}>Become a Seller</Typography>
            <Typography style={{marginTop : 3}}>More</Typography>

            <Container to="/cart">
                <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCartIcon/>
                </Badge>
                <Typography style={{marginLeft : 10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
          </Wrapper>
        </>
    );
};

export default CustomButtons;