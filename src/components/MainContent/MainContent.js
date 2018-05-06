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

                    <Content/>
                </div>

            </div>
        )
    }

}

export default MainContent