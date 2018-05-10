import PropTypes from 'prop-types'
import React, {Component} from 'react'

import Content from './Content'
import * as styles from './MainContent.less'
import Carousel from '../Carousel/Carousel'
import classNames from 'classnames'

class MainContent extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        sidebarMobile: PropTypes.bool,

    }

    render() {
        return (
            <div className={classNames({
                [styles["main-container"]]: true,
                [styles.notfull]: this.props.visible,
                [styles.mobile]: this.props.sidebarMobile
            })}>
                <div className={styles["container-wrap"]}>
                    <Content title="Xem nhiều nhất" color="#fc5c65" details=""/>
                    <Content title="JLPT N3" color="#26de81" details="phù hợp trình độ N3"/>
                    <Content title="JLPT N4" color="#0fb9b1" details="phù hợp trình độ N4"/>
                    <Content title="JLPT N5" color="#2d98da" details="phù hợp trình độ N5"/>
                </div>

            </div>
        )
    }

}

export default MainContent