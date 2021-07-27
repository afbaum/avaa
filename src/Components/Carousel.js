import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "../styles.css"

import desktop from "../img/desktop.jpg"
import book from "../img/book.jpg"
import workharder from "../img/work-harder.jpg"

const MyCarousel = () => {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval ={3000}>
        <img className=" photo d-block w-100" src={desktop} alt="Image One"/>
        <Carousel.Caption>
          <h3>2021 Membership Servey Results</h3>
          <p>Clieck here for the pdf</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="photo d-block w-100" src={book} alt="Image Two"/>
        <Carousel.Caption>
          <h3> Read current and past AVAA newsletters</h3>
          <p> Click Here! </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="photo d-block w-100" src={workharder} alt="Image Two"/>
        <Carousel.Caption>
          <h3> Label for the third slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MyCarousel;
