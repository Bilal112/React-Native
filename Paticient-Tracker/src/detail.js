import React, { Component } from 'react';
// import {View,Text} from 'react-native';
import * as firebase from 'firebase';
import { Container,FooterTab,Footer, Header,Button, Content,List,ListItem , Text, Body, } from 'native-base';
import { Actions } from 'react-native-router-flux';



export default class detail extends Component {          
            
            render() {
                const value = this.props.val
         return (
             <Container>
               <Content>
               <List style={{justifyContent:'center'}}>
               <ListItem itemDivider>
                 <Text style={{fontStyle:'Roboto' ,fontSize:26, color:'blue'}}>Name</Text>
               </ListItem>                    
               <ListItem> 
                <Text style={{fontStyle:'Roboto' ,fontSize:22}}>  {value.name}</Text>
               </ListItem>
               <ListItem itemDivider>
                 <Text  style={{fontStyle:'Roboto' ,fontSize:26 ,color:'blue'}}>Contact</Text>
               </ListItem>                    
               <ListItem> 
                <Text style={{fontStyle:'Roboto' ,fontSize:22}}>  {value.contact}</Text>
               </ListItem> 
               <ListItem itemDivider>
                 <Text  style={{fontStyle:'Roboto' ,fontSize:26 ,color:'blue'}}>Diease</Text>
               </ListItem>                    
               <ListItem> 
                <Text style={{fontStyle:'Roboto' ,fontSize:22}}>  {value.diease}</Text>
               </ListItem>
               <ListItem itemDivider>
                 <Text  style={{fontStyle:'Roboto' ,fontSize:26 ,color:'blue'}}>Age</Text>
               </ListItem>                    
               <ListItem> 
                <Text  style={{fontStyle:'Roboto' ,fontSize:22}}>  {value.age}</Text>
               </ListItem>
             </List>
             <Button block onPress={()=>{
                 Actions.main()
             }}>
            <Text>Back</Text>
          </Button>
          
                </Content>
                <Footer>
                    <FooterTab>
                        <Button  danger onPress={() => {
                            firebase.auth().signOut().then(Actions.login() )
                        }}>
                            <Text style={{color:'white'}}>LOGout</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )     }

 } 