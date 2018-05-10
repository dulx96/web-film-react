import React, {Component} from 'react'

//import plugin
import classNames from 'classnames'


import * as styles from './DownIcon.css'
import PropTypes from "prop-types";


export default class DownIcon extends Component {
    static propTypes = {
        toggleBoard: PropTypes.func
    }
    render() {
        return (
            <div className="arrow bounce" onClick={this.props.toggleBoard}>

            </div>
        )
    }
}
