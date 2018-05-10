import React, {Component} from 'react'

// component import
import Sidebar from "../Sidebar/Sidebar"
import MainContent from "../MainContent/MainContent";
import IconSidebar from 'react-icons/lib/md/menu';
// plugin import
import classNames from 'classnames';

// style import

import * as styles from './Board.less'
import PropTypes from "prop-types";


class Board extends Component {
    static propTypes = {
        screenWidth: PropTypes.number,
        sidebarVisible: PropTypes.bool,
        boardVisible: PropTypes.bool,
        toggleSidebar: PropTypes.func
    }

    render() {
        return (
            <div className={classNames({
                [styles.wrap]: true,
                [styles.active]: this.props.boardVisible
            })}>

                <IconSidebar className={styles.menuIcon}
                    size={25}
                             onClick={this.props.toggleSidebar}/>


                <div className={styles.content}>
                    <Sidebar visible={this.props.sidebarVisible}
                             toggleVisibility={this.props.toggleSidebar}>
                    </Sidebar>
                    <MainContent visible={this.props.sidebarVisible}
                                 sidebarMobile={this.props.screenWidth < 1276}>

                    </MainContent>
                </div>
            </div>
        )
    }

}

export default Board