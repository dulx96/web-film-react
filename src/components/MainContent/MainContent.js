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
        paddingTop: PropTypes.number,

    }

    render() {
        return (
            <div className={classNames({
                [styles["main-container"]]: true,
                [styles.notfull]: this.props.visible,
                [styles.mobile]: this.props.sidebarMobile
            })}
                 style={{paddingTop: this.props.paddingTop}}>
                <div className={styles["container-wrap"]}>
                    <Carousel/>
                    <Content title="Xem nhiều nhất" haveIcon={true} icon="mai.jpg" details=""/>
                    <Content title="JLPT N3" icon="mai.jpg" details="phù hợp trình độ N3"/>
                    <Content title="JLPT N4" icon="mai.jpg" details="phù hợp trình độ N4"/>
                    <Content title="JLPT N5" icon="mai.jpg" details="phù hợp trình độ N5"/>
                </div>

            </div>
        )
    }

}

export default MainContent