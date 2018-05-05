import React, {Component} from 'react'

import PropTypes from 'prop-types'

import {Menu, Icon} from 'semantic-ui-react'

import * as styles from './Sidebar.less'

import MenuSidebar from './MenuSideBar'

import classNames from 'classnames'

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
                <Menu.Item onClick={this.props.toggleVisibility}>
                    <Icon name='sidebar'/>
                </Menu.Item>
                <div className={classNames({[styles.mainOverlay]: true,
                    [styles.active]: this.props.visible
                })}
                onClick={this.props.toggleVisibility}> </div>

                <div className={styles.siderbarMobileMenu}>
                    <MenuSidebar/>
                </div>

            </div>
        )
    }
}

export default SidebarMobile