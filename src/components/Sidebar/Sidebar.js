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
        paddingTop: PropTypes.number,
        toggleVisibility: PropTypes.func

    }

    render() {
        return (
            <div>
                <Responsive minWidth={1276} style={{paddingTop: this.props.paddingTop}}
                            className={classNames({
                                [styles.siderbarDesktop]: true,
                                [styles.inactive]: !this.props.visible
                            })}>
                    <SidebarDesktop/>

                </Responsive>

                <Responsive maxWidth={1276}>
                    <SidebarMobile visible={this.props.visible} toggleVisibility={this.props.toggleVisibility}/>
                </Responsive>
            </div>
        )
    }

}

export default Sidebar