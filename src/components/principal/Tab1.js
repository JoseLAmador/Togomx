import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Switch } from 'native-base';

export default class Tab1 extends Component < {} > {
    render(){
        return(
            <Content>
                <List>
                    <ListItem icon>
                        <Left>
                            <Icon name="pizza" />
                        </Left>
                        <Body>
                        <Text>Usuario 1</Text>
                        </Body>
                        <Right>
                            <Switch value={true} />
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Icon name="pizza" />
                        </Left>
                        <Body>
                        <Text>Usuario 2</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Icon name="pizza" />
                        </Left>
                        <Body>
                        <Text>Usuario 3</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Icon name="pizza" />
                        </Left>
                        <Body>
                        <Text>Usuario 4</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>
                </List>
            </Content>

        );
    };
};