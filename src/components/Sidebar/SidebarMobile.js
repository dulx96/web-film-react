import React, {Component} from 'react'

import PropTypes from 'prop-types'

//import components
import MenuSidebar from './MenuSideBar'
import IconSidebar from 'react-icons/lib/md/menu';



//import styles
import * as styles from './Sidebar.less'

//import plugin
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
                <div className={styles.topSidebar}>

                    <IconSidebar size={25}
                                 style = {{marginRight: 20}}
                                 onClick={this.props.toggleVisibility}/>

                    <h3>Chimokii.vn</h3>

                </div>
                {/*<div className={classNames({*/}
                    {/*[styles.mainOverlay]: true,*/}
                    {/*[styles.active]: this.props.visible*/}
                {/*})}*/}
                     {/*onClick={this.props.toggleVisibility}></div>*/}

                <div className={styles.siderbarMobileMenu}>
                    <MenuSidebar/>
                </div>

            </div>
        )
    }
}

export default SidebarMobile