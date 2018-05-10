import React, {Component} from 'react'

//import components
import HomeSlide from './HomeSlide'
//import plugins
import Slider from "react-slick";

// import styles
import * as styles from './HomeCarousel.less'
import './slick.css'

class HomeCarousel extends Component {
    render() {
        // const imgAdd = require(`../../resources/HomeCarouselImage/${this.props.imgId}`)

        const settings = {
            className: "center",
            centerMode: false,
            infinite: true,
            centerPadding: "100px",
            slidesToShow: 3,
            speed: 500
        };

        return (
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <Slider {...settings}>
                        {/*<HomeSlide/>*/}
                        {/*<HomeSlide/>*/}
                        {/*<HomeSlide/>*/}
                        {/*<HomeSlide/>*/}
                        {/*<HomeSlide/>*/}
                        <h1>huta c,mt</h1>
                        <h1>huta c,mt</h1>
                        <h1>huta c,mt</h1>
                        <h1>huta c,mt</h1>
                        <h1>huta c,mt</h1>
                    </Slider>
                </div>
            </div>

        )
    }
}

export default HomeCarousel

