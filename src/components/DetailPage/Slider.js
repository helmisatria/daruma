import React from 'react';
import Slider from 'react-slick';

// Images
import City1 from '../../dist/images/city1.webp';
import City2 from '../../dist/images/city2.webp';
import City3 from '../../dist/images/city3.jpg';

// Styles
import '../../dist/css/slider.css';

export default class SimpleSlider extends React.Component {
  state = {};

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3,
          },
        },
      ],
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={City1} className="slider_images" />
          </div>
          <div>
            <img src={City2} className="slider_images" />
          </div>
          <div>
            <img src={City3} className="slider_images" />
          </div>
        </Slider>
      </div>
    );
  }
}
