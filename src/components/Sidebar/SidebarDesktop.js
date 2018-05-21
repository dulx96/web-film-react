import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import component
import MenuSidebar from './MenuSideBar'
import IconSidebar from 'react-icons/lib/md/menu';

//import plugin
import classNames from 'classnames'

//import style
import * as styles from './Sidebar.less'
import {Link} from "react-router-dom";

class SidebarDesktop extends Component {
    static propTypes = {
        toggleVisibility: PropTypes.func,
        visible: PropTypes.bool
    }

    render() {
        return (
            <div className={classNames({
                [styles.siderbarDesktop]: true,
                [styles.inactive]: !this.props.visible
            })}>
                <div className={styles.topSidebar}>

                    <IconSidebar size={25}
                    style = {{marginRight: 20}}
                                 onClick={this.props.toggleVisibility}/>

                    <h3><Link to='/'>Chimokii.vn </Link></h3>

                </div>
                <div>
                    <MenuSidebar/>
                </div>
            </div>
        )
    }
}

export default SidebarDesktop