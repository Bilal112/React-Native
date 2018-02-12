import React, { Component } from 'react';
import {Text ,Image,View, TouchableHighlight} from'react-native'
import { Container, Header, Content, Form, Item,Button, Input, Label,} from 'native-base';
import * as firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
export default class login extends React.Component {
    constructor(){
        super()
        this.state={
            email:'',
            pass:''
        }
    
    }
     login(){
       console.log('working')
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
        .then(()=>{
           alert('Singin in Successful')
           Actions.main()

        })
        
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            alert(errorMessage)
          });
     }
    
    render() {
        return (
            <Container>
            <Header />
            <Image  style={{width:422,height:180}}
          source={require('./img.png')}
        />
            <Content >
              <Form  style={{backgroundColor: 'rgb(215,219,221)', justifyContent:'center' }}>
                <Item stackedLabel>
                  <Label>Email</Label>
                  <Input onChangeText={(val)=>{this.setState({email:val})}} />
                </Item>
                <Item stackedLabel last  >
                  <Label>Password</Label>
                  <Input  secureTextEntry ={true} onChangeText={(val)=>{this.setState({pass:val})}}  />
                </Item>
              </Form>
             
                <Button block info onPress={this.login.bind(this)}>
           <Text style={{fontSize:19 ,color:'white'}}>Singin</Text>
          </Button> 
         {/* <Text style={{paddingLeft:102,paddingTop:8, fontSize:19}} onPress={Actions.main()} > Create Account </Text> 
        */}
         <TouchableHighlight onPress={()=>{
           Actions.singup()
         }}>
         <View style={{alignItems:'center', flex:1}}>
         <Text >
            Click to Registered Accounts
           </Text>
           </View>
           </TouchableHighlight>
            </Content>
          </Container>
        )
    }
}
 