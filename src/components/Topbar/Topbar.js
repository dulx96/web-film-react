import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {Container, Menu, Image, Icon} from 'semantic-ui-react'

import logo from 'resources/logo.png'

export default class Topbar extends Component {
    static propTypes = {
        onCLick: PropTypes.func
    }

    render() {
        return (
            <Menu fixed='top' borderless='true' ref={ (divElement) => this.divElement = divElement}>
                <Container fluid='true'>
                    <Menu.Item onClick={this.props.onCLick}>
                        <Icon name='sidebar' />
                    </Menu.Item>
                    <Menu.Item>
                        <Image size='mini' src={logo}/>
                    </Menu.Item>
                    <Container textAlign='center'>
                        Search Bar
                    </Container>
                </Container>
            </Menu>
        )
    }
}



