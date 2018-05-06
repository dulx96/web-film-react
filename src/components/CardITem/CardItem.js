import PropTypes from 'prop-types'
import React, {Component} from 'react'
import * as styles from './CardITem.less'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'
import faPlayCircle from '@fortawesome/fontawesome-free-solid/faPlayCircle'

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
            genre: PropTypes.string
    }

    render() {
        const imageUrl = require(`../../resources/item/${this.props.imageID}`)
        return(
            <div className={styles["card-item"]} style={{backgroundImage: `url(${imageUrl})`}}>
                <div className={styles.overlay}>
                    <div className={styles.star}>
                        <FontAwesomeIcon icon={faStar}/>
                        <p>{this.props.star}/5</p>
                    </div>
                    <div className={styles.info}>
                        <h3>
                            {this.props.name}
                        </h3>
                        <p>
                            Category: {this.props.category}
                        </p>

                        <p className={styles.light}>
                            Level: {this.props.level}
                        </p>
                        <p className={styles.expandable}>
                            Genre: {this.props.genre}
                        </p>
                        <p className={styles.expandable}>
                            Sub: {this.props.sub.map((e) => e+'  ')}
                        </p>
                    </div>

                    <div className={styles["details-button"]}>
                        <p>Details</p>
                    </div>
                    <div className={styles.length}>
                        <p>{this.props.length}</p>
                    </div>

                    <div className={styles.views}>
                        <p>{this.props.views} Views</p>
                    </div>


                    <FontAwesomeIcon className={styles.playIcon} icon={faPlayCircle}/>

                </div>

            </div>
        )
    }
}

export  default CardItem

