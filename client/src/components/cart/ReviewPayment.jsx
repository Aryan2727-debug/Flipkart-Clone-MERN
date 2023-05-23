import React from "react";
import { useState } from "react";
import { Box, Typography, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(Box)`
   margin : 20px 20px;
   margin-top : 100px;
   background : #2874f0;
   width : 500px
`;

const AddressHeader = styled(Typography)`
   font-size : 16px;
   margin-left : 5px;
   margin-top : 5px;
   color : #fff;
   text-transform : uppercase;
`;

const AddressInput = styled(TextField)`
   margin-left : 18px;
   margin-top : -20px;
   width : 500px;
`;

const PayContainer = styled(Box)`
   margin : 20px 20px;
   margin-top : 50px;
   background : #2874f0;
   width : 500px
`;

const PayHeader = styled(Typography)`
   font-size : 16px;
   margin-left : 5px;
   margin-top : 5px;
   color : #fff;
   text-transform : uppercase;
`;

const StyledButton = styled(Button)`
   margin-bottom : 10px;
   margin-top : 10px;
   margin-left : 5px;
   background : #fb641b;
   color : #fff;
   width : 250px;
   height : 51px;
   border-radius : 2px;
`;

const SubmitButton = styled(Button)`
   margin-top : 10px;
   background : #fb641b;
   color : #fff;
   width : 150px;
   height : 30px;
   border-radius : 2px;
`;

function ReviewPayment(){

    const upiUrl = 'https://tradebrains.in/wp-content/uploads/2019/09/Paytm-UPI-App-in-India.jpg';
    const walletUrl = 'https://pbs.twimg.com/media/FsSfc1WXwAEditp?format=jpg&name=900x900';

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
            <Container>
                <AddressHeader>Add Delivery Address</AddressHeader>
            </Container>

            <AddressInput
                placeholder="Enter your Delivery Address"
                required
                multiline
                rows={2}
                maxRows={4}
            />

            <PayContainer>
                <PayHeader>Payment Options</PayHeader>
            </PayContainer>

            <ul style={{listStyleType : 'none', marginLeft : '-23px'}}>
                <li><input type="radio"/>Paytm Wallet</li>
                <li><img src={walletUrl} alt="upi" style={{height : '100px', width : '180px', marginTop : '10px'}}/></li>
                <li><TextField placeholder="Enter Paytm Wallet linked no." style={{marginTop : '10px', width : '250px'}}/> <br/> <SubmitButton>Submit</SubmitButton></li>
                <br/>
                <li><input type="radio"/>Credit / Debit / ATM Card
                <br/>
                <p style={{fontSize : '14px', color : '#878787', display : 'inline'}}>Add and secure your card as per RBI guidelines</p></li>
                <br/>
                <li><input type="radio"/>Netbanking
                <br/>
                <p style={{fontSize : '14px', color : '#878787', display : 'inline'}}>This instrument has low success, use UPI or cards for better experience</p></li>
                <br/>
                <li><input type="radio"/>EMI (Easy Installments)
                <br/>
                <p style={{fontSize : '14px', color : '#878787', display : 'inline'}}>Pay for your product according to your comfort, with flexible EMI schemes available</p></li>
                <br/>
                <li><input type="radio"/>UPI
                <li><img src={upiUrl} alt="upi" style={{height : '100px', width : '180px', marginTop : '10px'}}/></li>
                <p style={{fontSize : '14px', color : '#878787', display : 'inline'}}>Pay using various UPI sources including Paytm, Google Pay and PhonePe</p></li>
                <br/>
                <li><input type="radio"/>Cash on Delivery</li>
            </ul>

            <StyledButton onClick={handleClickOpen}>Place Order</StyledButton>

            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
            {"Confirmation"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Your Order has been placed Successfully!
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} autoFocus>
                Continue
            </Button>
            </DialogActions>
          </Dialog>
        </>
    );
};

export default ReviewPayment;