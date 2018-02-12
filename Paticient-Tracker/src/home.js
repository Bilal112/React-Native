import React, { Component } from 'react';
import { Container, Header, Content, Title,Footer, Body,FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header >
        <Body>
        <Title >Paticient Tracker </Title>

      </Body>
         </Header>
        <Content />
            
        <Footer>
          <FooterTab>
            <Button> 
                <Text style={{fontSize:12}}> 

                Addd Paticient
                    </Text> 
                </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}