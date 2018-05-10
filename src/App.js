import React, {Component} from 'react'

// component import
import Topbar from './components/Topbar/Topbar'
import Board from './components/Board/Board'
import HomeCarousel from './components/Carousel/HomeCarousel'


// plugin import
import classNames from 'classnames';
import axios from 'axios'

// style import
import 'styling/semantic.less'
import * as styles from './styling/App.less'

class App extends Component {
    constructor(props) {
        super(props)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    state = {
        sidebarVisible: false,
        boardVisible: false,
        screenWidth: 0
    }
    toggleSidebar = () => {
        this.setState({sidebarVisible: !this.state.sidebarVisible})

    }
    toggleBoard = () => {
        this.setState({boardVisible: !this.state.boardVisible})
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        axios.post('http://app.my.vinaphone.com.vn/myvnp/acc_check3g', {}).then(res => {
            console.log(res)
        })

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({screenWidth: window.innerWidth, sidebarVisible: window.innerWidth >= 1276 ? true : false});
    }

    render() {
        const screenWidth = this.state.screenWidth
        const boardVisible = this.state.boardVisible
        const sidebarVisible = this.state.sidebarVisible
        const imgAdd = require(`./resources/HomeCarouselImage/img1.jpg`)
        return (
            <div className='main' style={{backgroundImage: `url(${imgAdd})`}}>

                <Topbar avatarImgId='thoa.jpg' toggleBoard={this.toggleBoard} boardVisible={this.state.boardVisible}>

                </Topbar>

                <div className="content-body">
                    <HomeCarousel>
                    </HomeCarousel>
                    <Board screenWidth={screenWidth} sidebarVisible={sidebarVisible} toggleSidebar={this.toggleSidebar} boardVisible={boardVisible}/>


                </div>




            </div>
        )

    }
}

export default App
