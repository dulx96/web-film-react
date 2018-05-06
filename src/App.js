import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Button, Grid, Header, List, Segment} from 'semantic-ui-react'

import 'styling/semantic.less'
require('./styling/App.less')
import Topbar from './components/Topbar/Topbar'
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar"
import classNames from 'classnames';

    class App extends Component {
        constructor(props) {
        super(props)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    state = {
        sidebarVisible: false,
        topbarHeight: 61,
        screenWidth: 0
    }
    toggleVisibility = () => {
        this.setState({sidebarVisible: !this.state.sidebarVisible})

    }

    componentDidMount() {
        this.setState({topbarHeight: ReactDOM.findDOMNode(this.child.divElement).clientHeight})
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ screenWidth: window.innerWidth, sidebarVisible: window.innerWidth >= 1276 ? true: false});
    }

    render() {
        const sidebarVisible = this.state.sidebarVisible
        const topbarHeight = this.state.topbarHeight
        return (
            <div className="main">

                <Topbar
                    ref={(node) => {this.child = node}}
                        onCLick={this.toggleVisibility}>
                </Topbar>

                <Sidebar visible={sidebarVisible} paddingTop={topbarHeight} toggleVisibility={this.toggleVisibility}>

                </Sidebar>

                <MainContent visible={sidebarVisible} paddingTop={topbarHeight} sidebarMobile={this.state.screenWidth < 1276 ? true : false}>

                </MainContent>

            </div>
        )

    }
}

export default App
