import React, {Component} from 'react'

import PropTypes from 'prop-types'

import {Menu, Icon, Image} from 'semantic-ui-react'

import * as styles from './Sidebar.less'

import MenuSidebar from './MenuSideBar'

import classNames from 'classnames'

import logo from 'resources/logo.png'

class SidebarMobile extends Component {
    static propTypes = {
        toggleVisibility: PropTypes.func,
        visible: PropTypes.bool
    }

    render() {
        return (
            <div className={classNames({
                [styles.siderbarMobile]: true,
                [styles.inactive]: !this.props.visible
            })}>
                <div className={styles.top}>
                    <div className={styles.element} onClick={this.props.toggleVisibility}>
                        <Icon name='sidebar' />
                    </div>
                        <Image size='mini' src={logo}/>

                </div>
                <div className={classNames({
                    [styles.mainOverlay]: true,
                    [styles.active]: this.props.visible
                })}
                     onClick={this.props.toggleVisibility}></div>

                <div className={styles.siderbarMobileMenu}>
                    <MenuSidebar/>
                </div>

            </div>
        )
    }
}

export default SidebarMobile