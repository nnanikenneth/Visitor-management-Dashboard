import React, { Component } from 'react';
import {Container, Icon } from 'semantic-ui-react';
import DashBoardHeader  from '../components/DashBoardHeader'

/// redirect to original page

export default class App extends Component {
    componentDidMount() {
        this.timerID = setInterval(
            () => window.location = '/accessmanager',
            4000
        );
    }

    render() {
      return (
        <div>
            <DashBoardHeader/>
            <Container style={{ padding: '4em 27em' }}>
                <h1 Icon="checkmark">Visitor Successfully Added</h1>
                <Icon name='checkmark' style={{ padding: '1em 2.3em' }} color="green" size="huge"/> {/* size="massive",'mini','tiny','small','large','big', */}
            </Container>
        </div>
      );
    }
  }
  