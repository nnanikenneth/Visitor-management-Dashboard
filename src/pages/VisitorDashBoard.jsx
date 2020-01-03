import React, { Component } from 'react';
import { Button, Icon, Container, Header, Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import VisitorList from '../components/VisitorList';
import DashBoardHeader  from '../components/DashBoardHeader'

export default class App extends Component {
  render() {
    return (
      <div>
        <DashBoardHeader/>

        <Container style={{ padding: '2em 0em' }}>
          <Menu.Item position="right">
              <Link to="/addvisitor">
                  <Button
                      circular
                      size="big"
                      floated="right"
                      color="red"
                      style={{ marginLeft: 16, marginButtom: 100 }}
                      as="a"
                  >
                  Invite People
                  &nbsp; &nbsp; &nbsp;
                  <Icon  name="plus"/>
                  </Button>
              </Link>
          </Menu.Item>
          <br/><br/><br/>
          <Menu.Item>
            <Header>Manage Your Visitors</Header>
          </Menu.Item>

          <VisitorList/>
        </Container>
      </div>
    );
  }
}
