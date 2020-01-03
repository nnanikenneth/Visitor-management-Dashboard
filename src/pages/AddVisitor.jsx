import React, { Component } from 'react';
import {Grid, Form, Container, Checkbox} from 'semantic-ui-react';
// import DateTimePicker from 'react-datetime-picker';
import Calendar from 'react-calendar';
import 'semantic-ui-css/semantic.min.css';
import { SemanticToastContainer } from 'react-semantic-toasts';
import DashBoardHeader  from '../components/DashBoardHeader'


export default class App extends Component { 
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    state = {
        date: new Date(),
    } 

    handleSubmit = () => {
        this.setState({ visitorName : "", visitorEmail : "", host : "", hostEmail : "", hostCompany : ""})
        // setTimeout(() => {
        //     toast({
        //         type: 'warning',
        //         icon: 'envelope',
        //         title: 'Warning Toast',
        //         description:
        //             'This is a Semantic UI toast wich waits 5 seconds before closing',
        //         time: 5000
        //     });
        // }, 5000);
        window.location = '/visitor/createdsuccess';
    }

    onChange = date => this.setState({ date });

    render() {
        const { visitorName, visitorEmail, host, hostEmail, hostCompany } = this.state

        return (
        <div>
            <DashBoardHeader/>
                <Container style={{ padding: '4em 20em' }}>
                    <Grid>
                        <Grid.Column textAlign="center">
                            <label style={{ fontSize: '1.8rem'  }}>Add Visitor</label>
                        </Grid.Column>
                    </Grid>
                    <br/> <br/> <br/> 

                    <Form onSubmit={this.handleSubmit} size="small" key="tiny">
                        <Form.Field required>
                            <label basic color='red' style={{ fontSize: '1.4rem' }}>
                                Visitor Name
                            </label>
                            <Form.Input
                                required 
                                fluid
                                value={visitorName}
                                placeholder="Visitor Name" 
                            />
                        </Form.Field>
                        <br/>
                        <Form.Field required>
                            <label style={{ fontSize: '1.4rem' }}>Visitor Email</label>
                            <Form.Input 
                                required 
                                fluid
                                value={visitorEmail}
                                placeholder="Visitor Email"  
                            />
                        </Form.Field>
                        <br/>
                        <Form.Field required>
                            <label style={{ fontSize: '1.4rem' }}>Date of Visit</label>
                            <div>
                                <Calendar
                                onChange={this.onChange}
                                value={this.state.date}
                                />
                            </div>
                        </Form.Field>
                        <br/>
                        <Form.Field>
                            <label style={{ fontSize: '1.4rem' }}>All-Day Access</label>
                                If you check this box, your visitor will be able to come in and 
                                out an unlimited number of times in one day.
                                If you do not check this box, your visitor will only be able to 
                                come in once in one day.
                            <div>
                                <br/>
                                <Checkbox color="red" required fluid />
                            </div>
                        </Form.Field>
                        <br/>
                        <Form.Field required>
                            <label style={{ fontSize: '1.4rem' }}>Host</label>
                            <Form.Input 
                                required 
                                fluid
                                value={host}
                                placeholder="Host"  
                            />
                        </Form.Field>
                        <br/>
                        <Form.Field required>
                            <label style={{ fontSize: '1.4rem' }}>Host Email</label>
                            <Form.Input 
                                required 
                                fluid
                                value={hostEmail}
                                placeholder="Host Email"  
                            />
                        </Form.Field>
                        <br/>
                        <Form.Field required>
                            <label style={{ fontSize: '1.4rem' }}>Host Company</label>
                            <Form.Input 
                                required 
                                fluid 
                                value={hostCompany}
                                placeholder="Host Company"  
                            />
                        </Form.Field>
                        <Form.Button color="red" content="submit">Submit</Form.Button>
                    </Form>

                    <SemanticToastContainer />
                </Container>
            </div>
        );
    }
}
