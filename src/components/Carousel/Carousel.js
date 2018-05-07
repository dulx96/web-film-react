import React, {Component} from "react";
import Slider from "react-slick";
import * as styles from './Carousel.css'
import "slick-carousel/slick/slick-theme.css";

import Slide from '../Carousel/Slide'

export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0",
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            speed: 500
        };
        return (
            <div>
                <Slider {...settings}>
                    <Slide imageUrl="slide1.jpg"/>
                    <Slide imageUrl="slide2.jpg"/>
                    <Slide imageUrl="slide3.jpg"/>
                    <Slide imageUrl="slide4.jpg"/>
                    <Slide imageUrl="slide5.jpg"/>
                </Slider>
            </div>
        );
    }
}