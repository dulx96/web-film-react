import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {Container, Menu, Image, Icon, Input} from 'semantic-ui-react'

import logo from 'resources/logo.png'

import * as styles from './Topbar.less'

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
                    <Container className={styles.SearchWrap} textAlign='center'>
                        <Input
                            icon={<Icon name='search' inverted circular link />}
                            placeholder='Search...'
                            style={{width: 600}}
                        />
                    </Container>
                    <Menu.Item>
                        <Icon name='user circle' size='big' />
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}



