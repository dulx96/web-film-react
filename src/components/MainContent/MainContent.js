import PropTypes from 'prop-types'
import React, {Component} from 'react'

import Content from './Content'
import * as styles from './MainContent.less'
import classNames from 'classnames'

class MainContent extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        paddingTop: PropTypes.number,
    }

    render() {
        return (
            <div className={classNames({[styles["main-container"]]: true,[styles.notfull]: this.props.visible})} style={{paddingTop: this.props.paddingTop}}>
                <Content/>
            </div>
        )
    }

}

export default MainContent