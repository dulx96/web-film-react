import React, {Component} from 'react'
import PropTypes from 'prop-types'

//import components
import HomeSlide from './HomeSlide'
//import plugins
import Slider from "react-slick";

// import styles
import * as styles from './HomeCarousel.less'
import './Carousel.css'

class HomeCarousel extends Component {
    static propTypes = {
        screenWidth: PropTypes.number
    }
    render() {
        // const imgAdd = require(`../../resources/HomeCarouselImage/${this.props.imgId}`)
        const screenWidth = this.props.screenWidth
        var centerPadding = 0;
        if(screenWidth > 1600) {
            centerPadding = "350px"
        }
        else if (screenWidth > 1440 ) {
            centerPadding = "280px"
        }
        else if (screenWidth > 1276) {
            centerPadding = "200px"
        }
        else if (screenWidth > 1024) {
            centerPadding = "140px"
        }

        else if (screenWidth > 960) {
            centerPadding = "100px"
        }
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: centerPadding,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll:1,
            autoplay: true,
            autoplaySpeed: 6000,

            speed: 500
        };

        return (
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <Slider {...settings}>
                        <HomeSlide imageId='slide11.jpg' title='The Return Of Night Fury' views={1000} details="It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong" sub={['VI','EN']}/>
                        <HomeSlide imageId='slide12.jpg' title='The Return Of Night Fury' views={1000} details="It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong and the reason why he has go there, every body feel fear" sub={['VI','EN','JA']}/>
                        <HomeSlide imageId='slide13.jpg' title='The Return Of Night Fury' views={1000} details="It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong" sub={['VI','EN']}/>
                        <HomeSlide imageId='slide14.jpg' title='The Return Of Night Fury' views={1000} details="It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong" sub={['VI','EN']}/>
                        <HomeSlide imageId='slide15.jpg' title='The Return Of Night Fury' views={1000} details="It was along time from he left, and now he came back with black eyes and super fast wings, no one know how much he is strong" sub={['VI','EN']}/>
                    </Slider>
                </div>
            </div>

        )
    }
}

export default HomeCarousel

