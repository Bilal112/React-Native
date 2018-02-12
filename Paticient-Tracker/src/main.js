import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native'

import { Container, Header, Content, Title, Body, Footer, FooterTab, Button, Card, CardItem, Text, Icon, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

// firebase.database().ref().child(`paticient/${}`)



export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            pati: []
        }

    }

    componentDidMount() {

        //        firebase.database().ref().child(`Chat/${uid}/${value.uid}`).on('value', (snapshot) => {

        firebase.database().ref().child(`paticient/${firebase.auth().currentUser.uid}`).on('value', (snapshot) => {
            let data = snapshot.val()
            if (data) { this.setState({ pati: Object.values(data) }) }
            else { console.log('no data found ') }
            console.log(data)
        })
    }
    render() {
        return (



            <Container>

                <Header>

                    <Body>
                        <Title>
                            Paticent Tracker

                        </Title>

                    </Body>
                    {/* 
                <Button first style={{justifyContent='right'}}>
            <Text>LOGout</Text>
          </Button> */}

                </Header>
                <Content>
                    {this.state.pati.map((val, ind) => {
                        return (

                            <Card key={ind}>
                                <CardItem style={{justifyContent:'space-between'}}>
                                    {/* <Icon active name="logo-googleplus" /> */}
                                    <Text style={{ fontSize: 19 }}>{val.name}</Text>
                                    <Right>
                                        <Button onPress={() => {
                                            Actions.detail({ val })
                                        }} style={{  backgroundColor: 'red', justifyContent: 'flex-end' }}>
                                            <Text> Detail</Text>
                                        </Button>
                                        {/* <TouchableHighlight onPress={()=>{
                                            Actions.detail({val})
                                        }}>
                                        <Icon name="arrow-forward" />
                                        </TouchableHighlight> */}
                                    </Right>
                                </CardItem>
                            </Card>

                        )
                    })}
                </Content>





                <Footer>
                    <FooterTab>

                        <Button primary onPress={() => {
                            Actions.p_form()
                        }}>
                            <Text style={{ color: 'white' }}>Add Pticient</Text>
                        </Button>
                        <Button danger onPress={() => {
                            firebase.auth().signOut().then(Actions.login())
                        }}>
                            <Text style={{ color: 'white' }}>LOGout</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}