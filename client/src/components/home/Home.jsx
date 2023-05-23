import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//importing components
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import { getProducts } from "../../redux/actions/productActions";

//importing libraries
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const Component = styled(Box)`
   padding : 10px;
   background : #f2f2f2;
`;

function Home(){

    const {products} = useSelector(state => state.getProducts);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getProducts());
    }, [dispatch]);

    return(
        <>
            <Navbar/>

            <Component>
              <Banner/>
              <MidSlide products={products} title="Deal of the Day" timer={true}/>
              <MidSection/>
              <Slide products={products} title="Discounts for you" timer={false}/>
              <Slide products={products} title="Suggested items" timer={false}/>
              <Slide products={products} title="Top selections" timer={false}/>
            </Component>
        </>
    );
};

export default Home;