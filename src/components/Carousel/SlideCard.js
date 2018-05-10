import PropTypes from 'prop-types'
import React, {Component} from 'react'

import * as styles from "./SlideCard.less";

class CardItem extends Component {
    static propTypes = {
        imageUrl: PropTypes.string,
        date: PropTypes.string,
        title: PropTypes.string,
        details: PropTypes.string
    }

    render() {
        const imageAdd = require(`../../resources/Slide/${this.props.imageUrl}`)
        const dateStr = this.props.date;
        var str = dateStr.split('-');

        return (
            <div    >
                <div className={styles.slide} style={{backgroundImage: `url(${imageAdd})`}}>
                    <div className={styles.overlay}>
                        <div className={styles.date}>
                            <p>{str[0]}</p>
                            <span>{str[1] + '-' + str[2]} </span>
                        </div>
                        <div className={styles.info}>
                            <h2>
                                {this.props.title}
                            </h2>

                            <p className={styles.details}>
                                {this.props.details}
                            </p>
                        </div>

                        <button className={styles["readmore-btn"]}>
                            Xem chi tiết
                        </button>

                    </div>

                </div>
            </div>
        )
    }
}

export default CardItem

