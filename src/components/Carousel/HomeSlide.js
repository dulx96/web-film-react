import PropTypes from 'prop-types'
import React, {Component} from 'react'
// import components
import IconStar from 'react-icons/lib/ti/star'
import IconSidebar from 'react-icons/lib/md/menu';

//import styles
import * as styles from './HomeSilde.less'

class HomeSlide extends Component {
    static propTypes = {
        imageId: PropTypes.string,
        title: PropTypes.string,
        star: PropTypes.number,
        views: PropTypes.number,
        details: PropTypes.string,
        sub: PropTypes.array
    }

    render() {
        const imageAdd = require(`../../resources/Slide/${this.props.imageId}`)
        return (
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <div className={styles.image} style={{backgroundImage: `url(${imageAdd})`}}>
                        <a>

                        </a>
                    </div>

                    <div className={styles.info}>
                        <h2>
                            {this.props.title}
                        </h2>
                        <div className={styles.star}>
                            <IconStar size={20}></IconStar>
                            <IconStar size={20}></IconStar>
                            <IconStar size={20}></IconStar>
                            <IconStar size={20}></IconStar>
                            <IconStar size={20}></IconStar>
                            <p>{this.props.views} Views</p>
                        </div>
                        <p>
                            {this.props.details}
                        </p>
                        <div style={{flex: 1}}></div>
                        <div className={styles.sub}>
                            <h3>Subtitle:</h3>
                            {this.props.sub.map((e) => <i> {e} </i>)}
                        </div>
                        <div className={styles.options}>
                            <a className={styles["more-details"]}>
                                More Details
                            </a>
                            <a className={styles.play}>
                                Play now
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default HomeSlide