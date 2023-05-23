import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from "../../constants/data";
import styled from "@emotion/styled";

const Image = styled('img')({
  width : '100%',
  height : 280
});

const responsive = {
  desktop : {
    breakpoint : {max : 3000, min : 1024},
    items : 1
  },
  tablet : {
    breakpoint : {max : 1024, min : 464},
    items : 1
  },
  mobile : {
    breakpoint : {max : 464, min : 0},
    items : 1
  }
};

function Banner(){
    return(
        <>
          <Carousel slidesToSlide={1} autoPlaySpeed={3000} autoPlay={true} infinite={true} swipeable={false} draggable={false} responsive={responsive} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px" containerClass="carousel-container">
             {
              bannerData.map(data => (
                <Image src={data.url} alt="data"/>
              ))
             }
          </Carousel>
        </>
    );
};

export default Banner;