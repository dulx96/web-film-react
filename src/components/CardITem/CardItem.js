import PropTypes from 'prop-types'
import React, {Component} from 'react'
import * as styles from './CardITem.less'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'

class CardItem extends Component {
    static propTypes = {
            imageID: PropTypes.string,
            name: PropTypes.string,
            category: PropTypes.string,
            level: PropTypes.string,
            views: PropTypes.number,
            sub: PropTypes.array,
            length: PropTypes.string,
            star: PropTypes.number,
            genre: PropTypes.array
    }

    render() {
        const imageUrl = require(`../../resources/item/${this.props.imageID}`)
        return(
            <div className={styles["card-item"]} style={{backgroundImage: `url(${imageUrl})`}}>
                <div className={styles.overlay}>
                    <div className={styles.star}>
                        <FontAwesomeIcon icon={faStar}/>
                        <p>3/5</p>
                    </div>

                </div>

            </div>
        )
    }
}

export  default CardItem

