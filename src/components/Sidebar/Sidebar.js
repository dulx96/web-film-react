import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Responsive} from 'semantic-ui-react'
import SidebarMobile from './SidebarMobile'
import SidebarDesktop from './SidebarDesktop'
import * as styles from './Sidebar.less'
import classNames from "classnames";

class Sidebar extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        toggleVisibility: PropTypes.func
    }

    render() {
        return (
            <div>
                <Responsive minWidth={1276}
                            className={classNames({
                                [styles.sidebarDesktop]: true,
                                [styles.inactive]: !this.props.visible
                            })}>
                    <SidebarDesktop visible={this.props.visible} toggleVisibility={this.props.toggleVisibility}/>

                </Responsive>

                <Responsive maxWidth={1276}>
                    <SidebarMobile visible={this.props.visible} toggleVisibility={this.props.toggleVisibility}/>
                </Responsive>
            </div>
        )
    }

}

export default Sidebar