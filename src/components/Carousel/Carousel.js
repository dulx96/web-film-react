import React, {Component} from "react";
import Slider from "react-slick";
import './Carousel.css'
import "slick-carousel/slick/slick-theme.css";

import * as styles from './Carousel.less'
import * as responsiveContainer from '../MainContent/MainContent.less'
import Slide from './Slide'
import SlideCard from './SlideCard'

export default class CenterMode extends Component {
    render() {
        const settings = {
            // className: "center",
            // centerMode: true,

            // centerPadding: "200px",
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 800
        };
        return (
            <div style={{display: 'flex',
                justifyContent: 'center'}}>
                <div className={responsiveContainer["wrap-carousel"]}>
                    <Slider {...settings}>
                        <SlideCard imageUrl="slide6.jpg"
                                   date="2018-05-26"
                                   title="Kinh nghiệm học tiếng Nhật qua video"
                                   details="It is incredible war ever and no one can survive after it over
                               and i even do not know how to end this war. Our uncle has a hair absolutely like a blade."
                        />
                        <SlideCard imageUrl="slide7.jpg"
                                   date="2018-05-26"
                                   title="Top 10 Anime Nhật đáng xem nhất "
                                   details="Tổng hợp những bộ phim anime hay nhất từ đầu năm 90 tới nay,bao gồm việt sub và nhật sub cho các bạn thích đọc hiểu"
                        />
                        <SlideCard imageUrl="slide8.jpg"
                                   date="2018-05-26"
                                   title="Cognos Has Become the most popular Frame Work"
                                   details="It is incredible war ever and no one can survive after it over"
                        />
                        <SlideCard imageUrl="slide9.jpg"
                                   date="2018-05-26"
                                   title="Cognos War has began"
                                   details="It is incredible war ever and no one can survive after it over"
                        />
                        <SlideCard imageUrl="slide10.jpg"
                                   date="2018-05-26"
                                   title="Cognos War has began"
                                   details="It is incredible war ever and no one can survive after it over"
                        />
                    </Slider>
                </div>
            </div>
        );
    }
}