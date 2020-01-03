import React, { Component } from 'react';
import {Container } from 'semantic-ui-react';
import DashBoardHeader  from '../components/DashBoardHeader'

export default class App extends Component {
    render() {
      return (
        <div>
            <DashBoardHeader/>
            <Container style={{ padding: '15em 30em' }}>
                <h1>404 - Not found</h1>
            </Container>
        </div>
      );
    }
  }
  