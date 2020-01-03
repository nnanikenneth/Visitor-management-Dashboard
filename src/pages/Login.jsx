import React, { Component } from 'react';
import {Icon, Grid, Form, Button, Container } from 'semantic-ui-react';
import DashBoardHeader  from '../components/DashBoardHeader'

export default class App extends Component {

    state = {} 

    handleSubmit = () => {
        this.setState({ email : "", password : ""})
        window.location = '/accessmanager';
    }

    render() {
      const { email, password } = this.state

      return (
        <div>
            <DashBoardHeader/>
            <Container style={{ padding: '4em 27em' }}>
                <Grid>
                    
                    <Grid.Column textAlign="center">
                        <Icon src="https://dl.airtable.com/.formViewLogoImages/1cba3028b88eaabf6ffcd20ba28758f8/d1d5b65c"/>
                        <h1>Log in</h1>
                    </Grid.Column>
                </Grid>
                <br/>
                <Form onSubmit={this.handleSubmit} size="small" key="small">
                    <Form.Field required>
                        <label style={{ fontSize: '1.4rem'  }}>Email</label>
                        <Form.Input 
                            icon='mail'
                            iconPosition='left' 
                            required 
                            fluid
                            size="large"
                            value={email}
                            placeholder="Email Address" />
                    </Form.Field>
                    <br/>
                    <Form.Field required>
                        <label style={{ fontSize: '1.4rem'  }}>Password</label>
                        <Form.Input  
                            icon='lock'
                            iconPosition='left'
                            required 
                            fluid 
                            size="large"
                            type='password'
                            value={password}
                            placeholder="Password" 
                            />
                    </Form.Field>
                    <br/>
                    <Button  size="large" color="red" type="submit">Submit</Button>
                </Form>
            </Container>
        </div>
      );
    }
  }
  