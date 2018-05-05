import React, {Component} from 'react'

import PropTypes from 'prop-types'

import {Menu, Icon} from 'semantic-ui-react'

import * as styles from './Sidebar.less'

import MenuSidebar from './MenuSideBar'

import classNames from 'classnames'

class SidebarDesktop extends Component {
    render() {
        return (
            <div>
                <div>
                    <MenuSidebar/>
                </div>
            </div>
        )
    }
}

export default SidebarDesktop