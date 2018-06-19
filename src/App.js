
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// component import
import Topbar from './components/Topbar/Topbar'
import Board from './components/Board/Board'
import HomeCarousel from './components/Carousel/HomeCarousel'
import MovieDetails from './components/Details/MovieDetails'
import DownIcon from './components/DownIcon/DownIcon'

// style import
import 'styling/semantic.less'
import * as styles from './styling/App.less'

class App extends Component {
  constructor (props) {
    super(props)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  state = {
    sidebarVisible: false,
    boardVisible: false,
    screenWidth: 0,
    onLoad: true
  }
  toggleSidebar = () => {
    this.setState({sidebarVisible: !this.state.sidebarVisible})

  }
  toggleBoard = () => {
    this.setState({boardVisible: !this.state.boardVisible})
  }

  handleLoad = () => this.setState({onLoad: false})

  componentDidMount () {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    window.addEventListener('load', this.handleLoad)

  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions () {
    this.setState({screenWidth: window.innerWidth, sidebarVisible: window.innerWidth >= 1276})
  }

  render () {
    const screenWidth = this.state.screenWidth
    const boardVisible = this.state.boardVisible
    const sidebarVisible = this.state.sidebarVisible
    const imgAdd = require(`./resources/HomeCarouselImage/img4.jpg`)
    return (
      this.state.onLoad ? <h1> on Loading</h1> :
        <Router>
          <div className='main' style={{backgroundImage: `url(${imgAdd})`}}>

            <Topbar avatarImgId='thoa.jpg' toggleBoard={this.toggleBoard}
                    boardVisible={this.state.boardVisible}>
            </Topbar>

            <Route path='/' render={() => (
              <div className="content-body">
                <HomeCarousel screenWidth={screenWidth}>
                </HomeCarousel>
                <Board screenWidth={screenWidth} sidebarVisible={sidebarVisible}
                       toggleSidebar={this.toggleSidebar}
                       boardVisible={boardVisible}/>

                <DownIcon toggleBoard={this.toggleBoard}/>
                <Route path='/:item/:X/:Y' render={({match}) => (
                  <MovieDetails imageID={match.params.item} X={match.params.X} Y={match.params.Y}/>
                )}/>
              </div>
            )}/>


          </div>
        </Router>
    )
  }
}

export default App
