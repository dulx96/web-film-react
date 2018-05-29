import React, {Component} from 'react'

import * as styles from './MovieDetails.less'
import {Link} from "react-router-dom";

export default class MovieDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // style background
        const imageBackground = require(`../../resources/background/${this.props.imageID}`)
        const styleBackground = {
            backgroundImage: `url(${imageBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',

        }

        //style item card
        const imageItemUrl = require(`../../resources/item/${this.props.imageID}`)
        const styleItemCard = {
            backgroundImage: `url(${imageItemUrl})`,
            top: '400px',
            left: '600px',
            transform: `translate(${(this.props.X - (-40)) - 600}px,${-400 + (this.props.Y - 240)}px)`,

        }
        return (
            <div className={styles.wrap}>
                <div
                    className={styles["background-wrap"]}
                >
                    <Link
                        to='/'
                        className={styles.background}
                        style={styleBackground}
                    >
                        <div className={styles.overlay}>

                        </div>
                    </Link>
                </div>

                <div className={styles["item-image"]} style={styleItemCard}>
                </div>
                <div className={styles.info}>
                </div>
            </div>

        )
    }
}