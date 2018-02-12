import React, { Component } from 'react';
import { Router, Scene } from "react-native-router-flux";
import singup from './singup';
import login from './login';
import main from './main';
import paticient_form from'./paticient_form';
import detail from'./detail';
export default class Rout extends React.Component {
    render() {
        return (

            <Router>

                <Scene key='root'>
                    <Scene
                       
                        key="singup"
                        component={singup}
                        title='singup'
                        hideNavBar
                    />
                    <Scene
                      initial 
                      key="login"
                        component={login}
                        title='login'
                        hideNavBar
                    />
                    <Scene
                      key="main"
                        component={main}
                        title='main'
                    
                         hideNavBar
                    />
                        <Scene
                        key='p_form'
                        component={paticient_form}
                        title='paticient_form'
                        hideNavBar
                        />
                        <Scene
                        key='detail'
                        component={detail}
                        title='detail'
                        hideNavBar
                        />  
                </Scene>
            
            </Router>





        );
    }
}

