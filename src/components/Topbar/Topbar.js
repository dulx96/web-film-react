import PropTypes from 'prop-types'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//import component
import IconBoard from 'react-icons/lib/md/group-work';

// plugin import
import classNames from 'classnames';

//import style
import * as styles from './Topbar.less'

class Topbar extends Component {
    static propTypes = {
        avatarImgId: PropTypes.string,
        boardVisible: PropTypes.bool,
        toggleBoard: PropTypes.func
    }

    render() {
        const avatarImgAdd = require(`../../resources/CircleImage/${this.props.avatarImgId}`)

        return (
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <a
                       onClick={this.props.toggleBoard}>
                        <IconBoard className={classNames({
                            [styles["board-inactive"]]: true,
                            [styles["board-active"]]: this.props.boardVisible


                        })} size={40} />
                    </a>

                    <div style={{flex: 1}}>

                    </div>

                    <div className={styles.menu}>
                        <p>Home</p>
                        <p>News</p>
                        <p>Contact</p>
                        <p>Help</p>
                        <p>Info</p>
                        <p>Profile</p>
                    </div>

                    <div className={styles.avatar} style={{backgroundImage: `url(${avatarImgAdd})`}}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topbar



