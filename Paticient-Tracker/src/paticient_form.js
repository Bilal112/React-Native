import React, { Component } from 'react';
import { Container, Header, Content, Title, Form, Item, Label, Input, Body, Button, Icon, Text } from 'native-base';
import * as firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native'
export default class paticient extends Component {
    constructor() {
        super()
        this.state = {
            user: '',
            age: '',
            diease: '',
            contact: ''
        }
    }

    pdata() {
        if (this.state.user && this.state.age && this.state.diease && this.state.contact) {
            firebase.database().ref(`paticient/${firebase.auth().currentUser.uid}/`).push({
                name: this.state.user,
                age: this.state.age,
                diease: this.state.diease,
                contact: this.state.contact,
                uids: firebase.auth().currentUser.uid,
            }
            )
            Actions.main()
        }
        else {
            alert('plz fill all the values')
        }
    }
    render() {
        return (
            <Container>
                <Header >
                    <Body>
                        <Title >Paticient Tracker </Title>

                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item >
                            <Label style={{ fontSize: 15, fontWeight: 'bold' }}>Paticient Name:</Label>
                            <Input placeholder='Enter the Patient Name' onChangeText={(val) => this.setState({ user: val })} />
                        </Item>

                        <Item >
                            <Label style={{ fontSize: 15, fontWeight: 'bold' }}> Age:</Label>
                            <Input placeholder='Enter the Patient Age' onChangeText={(val) => this.setState({ age: val })} />
                        </Item>
                        <Item >
                            <Label style={{ fontSize: 15, fontWeight: 'bold' }}>Diease</Label>
                            <Input placeholder='Enter the Patient Diease' onChangeText={(val) => this.setState({ diease: val })} />
                        </Item>
                        <Item >
                            <Label style={{ fontSize: 15, fontWeight: 'bold' }}>Contact Number</Label>
                            <Input placeholder='Enter the Patient Number' onChangeText={(val) => this.setState({ contact: val })} />
                        </Item>
                        <Item style={{ flexDirection: 'row', justifyContent:'space-between'}}>

                            <Button onPress={this.pdata.bind(this)}>
                                <Text>
                                    Add Paticient
                                    </Text>
                            </Button>

                            <Button onPress={() => {
                                Actions.main()
                            }}>
                                <Text>Back</Text>
                            </Button>
                        </Item>

                    </Form>
                </Content >


            </Container>
        );
    }
}