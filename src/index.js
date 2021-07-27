import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.css"

import MyNavbar from "./Components/NavBar"
import Cardapp from "./Components/Card"
import MyCarousel from "./Components/Carousel"
import InfoCard from "./Components/InfoCards"
import NewsBar from "./Components/NewsBar"


const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <Cardapp />
      <InfoCard />
      <NewsBar />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
