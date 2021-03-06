import React, {Component} from 'react'

//import components
import CardItem from '../CardITem/CardItem'

//inport styles
import * as styles from './MainContent.less'


class Content extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const imageAdd = require(`../../resources/CircleImage/${this.props.icon}`)
        return (
            <div className={styles["wrap-content"]}>
                <div className={styles["content"]}>
                    <div>
                        <div className={styles.title}>
                            <h2>
                                <div className={styles["circle-image"]}
                                style={{backgroundColor: this.props.color}}>

                                </div>
                                <p>{this.props.title}</p>
                                <span>{this.props.details}</span>
                            </h2>
                            <div style={{flex: 1}}>

                            </div>

                            <a>Tất cả</a>
                        </div>
                    </div>

                    <div className={styles.CardContainer}>
                        <CardItem imageID='item1.jpg'
                                  name='Sword Art Online -SS1 (2012)'
                                  category='Anime'
                                  level='N3'
                                  star={4}
                                  views={100}
                                  sub={['VI', 'JA']}
                                  length='30 Eps'
                                  genre='Action, Comedy'/>
                        <CardItem imageID='item2.jpg'
                                  name='Sword Art Online -SS1 (2012)'
                                  category='Anime'
                                  level='N3'
                                  star={4}
                                  views={100}
                                  sub={['VI', 'JA']}
                                  length='30 Eps'
                                  genre='Action, Comedy'/>
                        <CardItem imageID='item3.jpg'
                                  name='Sword Art Online -SS1 (2012)'
                                  category='Anime'
                                  level='N3'
                                  star={4}
                                  views={100}
                                  sub={['VI', 'JA']}
                                  length='30 Eps'
                                  genre='Action, Comedy'/>
                        <CardItem imageID='item4.jpg'
                                  name='Sword Art Online -SS1 (2012)'
                                  category='Anime'
                                  level='N3'
                                  star={4}
                                  views={100}
                                  sub={['VI', 'JA']}
                                  length='30 Eps'
                                  genre='Action, Comedy'/>
                        <CardItem imageID='item5.jpg'
                                  name='Sword Art Online -SS1 (2012)'
                                  category='Anime'
                                  level='N3'
                                  star={4}
                                  views={100}
                                  sub={['VI', 'JA']}
                                  length='30 Eps'
                                  genre='Action, Comedy'/>
                        <CardItem imageID='item6.jpg'
                                  name='Sword Art Online -SS1 (2012)'
                                  category='Anime'
                                  level='N3'
                                  star={4}
                                  views={100}
                                  sub={['VI', 'JA']}
                                  length='30 Eps'
                                  genre='Action, Comedy'/>

                    </div>
                </div>
            </div>
        )
    }


}

export default Content