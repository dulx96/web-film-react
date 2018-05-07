import PropTypes from 'prop-types'
import React, {Component} from 'react'
import * as styles from './Slide.less'

class Slide extends Component {
    static propTypes = {
        imageUrl: PropTypes.string
    }

    render() {
        const imageAdd = require(`../../resources/Slide/${this.props.imageUrl}`)

        return(
            <div>
                <div className={styles.slide} style={{backgroundImage: `url(${imageAdd})`}}>
                </div>
            </div>
        )
    }
}

export  default Slide