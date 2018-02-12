import React, { Component } from 'react';
import { Container, Header, Title, Label, Item, Input, Form, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, } from 'native-base';
import { Actions } from 'react-native-router-flux';
import firebase from './firebase'
import { View, Text,Image ,TouchableHighlight} from 'react-native'
const data = firebase.auth()

export default class Singuop extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      username: '',
      password: ''
    }
    // {console.log(this.state.email)}
  }

  sendData() {
    if (this.state.username) {
      data.createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
        console.log(data.currentUser)
        firebase.database().ref(`'doctors'/${data.currentUser.uid}`).set({

          email: this.state.email,
          name: this.state.username,
          pass: this.state.password
        })

        alert('singup done')
        this.setState({ email: '', password: '', username: '' })
        Actions.login()
      })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
          // ...
        });
    }
    else {
      alert("Please Input Your N0ame");
    }
  }

  render() {
    return (
      <Container >
        <Header>
          <Left>
            <Button transparent>
           
            </Button>
          </Left>
          <Body>
            <Title>Paticient Tracker </Title>
              
          </Body>
          <Right />
        </Header>
        <Image  style={{width:422,height:180}}
          source={require('./img.png')}
        />
        <Content>

          <Form  style={{
            justifyContent:'center',
  //            alignItems:'center'
          }}>
         
            <Item stackedLabel>
              <Label>Username</Label>
              <Input onChangeText={(val) => this.setState({ username: val })} />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input type='email' onChangeText={(val) => this.setState({ email: val })} />

            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input type='passowrd' secureTextEntry={true} onChangeText={(val) => { this.setState({ password: val }) }} />
            </Item>
            {/* {'\n'} */}
            <Button  block info  onPress={this.sendData.bind(this)}  ><Text >Singup </Text>
            </Button>
            <TouchableHighlight onPress={()=>{
           Actions.login()
         }}>
         <View style={{ alignItems:'center', flex:1, justifyContent:"center"}}>
              <Text>
                 Already have a account 
                 </Text> 
               </View>
                 </TouchableHighlight >
          </Form>

        </Content>

      </Container>
    );
  }
}