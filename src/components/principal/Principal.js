import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {Container, Tabs, Tab, StyleProvider} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import Encabezado from "./Encabezado";
import Tab1 from './Tab1';
import Tab2 from './Tab2';

export default class Principal extends Component < {} > {
    render(){
        return(
            <StyleProvider style={getTheme(material)}>
            <Container>
                <Encabezado hasTabs />
                <StatusBar backgroundColor="orange" barStyle="light-content"/>
                <Tabs>
                    <Tab heading="PEDIDOS" >
                        <Tab1/>
                    </Tab>
                    <Tab heading="ENTREGAS" >
                        <Tab2/>
                    </Tab>
                </Tabs>
            </Container>
            </StyleProvider>


        );
    };
};