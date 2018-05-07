import React, {Component} from "react";
import Slider from "react-slick";
import * as styles from './Carousel.css'
import "slick-carousel/slick/slick-theme.css";

import Slide from './Slide'
import SlideCard from './SlideCard'

export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0",
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 800
        };
        return (
            <div>
                <Slider {...settings}>
                    <SlideCard imageUrl="slide1.jpg"
                               name='Sword Art Online -SS1 (2012)'
                               category='Anime'
                               level='N3'
                               star={4}
                               views={100}
                               sub={['VI', 'JA']}
                               length='30 Eps'
                               genre='Action, Comedy'/>

                    <SlideCard imageUrl="slide2.jpg"
                               name='Sword Art Online -SS1 (2012)'
                               category='Anime'
                               level='N3'
                               star={4}
                               views={100}
                               sub={['VI', 'JA']}
                               length='30 Eps'
                               genre='Action, Comedy'/>

                    <SlideCard imageUrl="slide3.jpg"
                               name='Sword Art Online -SS1 (2012)'
                               category='Anime'
                               level='N3'
                               star={4}
                               views={100}
                               sub={['VI', 'JA']}
                               length='30 Eps'
                               genre='Action, Comedy'/>

                    <SlideCard imageUrl="slide4.jpg"
                               name='Sword Art Online -SS1 (2012)'
                               category='Anime'
                               level='N3'
                               star={4}
                               views={100}
                               sub={['VI', 'JA']}
                               length='30 Eps'
                               genre='Action, Comedy'/>

                    <SlideCard imageUrl="slide5.jpg"
                               name='Sword Art Online -SS1 (2012)'
                               category='Anime'
                               level='N3'
                               star={4}
                               views={100}
                               sub={['VI', 'JA']}
                               length='30 Eps'
                               genre='Action, Comedy'/>

                </Slider>
            </div>
        );
    }
}