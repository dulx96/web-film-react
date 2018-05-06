import React from 'react'

import {Segment} from 'semantic-ui-react'
import CardItem from '../CardITem/CardItem'
import * as styles from './MainContent.less'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import hotIcon from '@fortawesome/fontawesome-free-solid/faFire'

const Content = () => (
    <div className={styles["wrap-content"]}>
        <div className={styles.title}>
            <FontAwesomeIcon icon={hotIcon}/>
            <p> Most Viewed Movies</p>
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
            <CardItem imageID='item1.jpg'
                      name='Sword Art Online -SS1 (2012)'
                      category='Anime'
                      level='N3'
                      star={4}
                      views={100}
                      sub={['VI', 'JA']}
                      length='30 Eps'
                      genre='Action, Comedy'/>
            <CardItem imageID='item1.jpg'
                      name='Sword Art Online -SS1 (2012)'
                      category='Anime'
                      level='N3'
                      star={4}
                      views={100}
                      sub={['VI', 'JA']}
                      length='30 Eps'
                      genre='Action, Comedy'/>
            <CardItem imageID='item1.jpg'
                      name='Sword Art Online -SS1 (2012)'
                      category='Anime'
                      level='N3'
                      star={4}
                      views={100}
                      sub={['VI', 'JA']}
                      length='30 Eps'
                      genre='Action, Comedy'/>
            <CardItem imageID='item1.jpg'
                      name='Sword Art Online -SS1 (2012)'
                      category='Anime'
                      level='N3'
                      star={4}
                      views={100}
                      sub={['VI', 'JA']}
                      length='30 Eps'
                      genre='Action, Comedy'/>
            <CardItem imageID='item1.jpg'
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
)

export default Content