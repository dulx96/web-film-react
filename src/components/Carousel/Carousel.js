import React, {Component} from 'react'
import CardItem from '../CardITem/CardItem'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


class Carousel extends Component {
    render() {
        return (
            <AliceCarousel>

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

            </AliceCarousel>
        )
    }

}

export default Carousel

