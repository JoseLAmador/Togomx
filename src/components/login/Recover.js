import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button, Input, Item, Toast, Spinner, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import img from '../../assets/imgs/img.jpg';
import firebase, {firebaseAuth} from '../firebase/Firebase';

export default class Registro extends Component < {} > {
    state = {
        correo: '',
        verifyCorreo: '',
        error: '',
        loading: false
    };

    constructor(props) {
        super(props);
        this.recover = this.recover.bind(this);
    }

    recover() {
        const {correo, verifyCorreo} = this.state;
        this.setState({error: '', loading: true});
        if (correo == verifyCorreo && correo != null && verifyCorreo != null) {
            firebaseAuth.sendPasswordResetEmail(correo).then(function() {
                Actions.Login()
                Toast.show({
                    text: 'Revisa tu correo, continua los pasos', position: 'bottom', buttonText: 'OK', type: 'success'})
            }, function(error) {
                Toast.show({
                    text: 'Correo inválido, verifique campos', position: 'bottom', buttonText: 'OK', type: 'danger'})
            });
        }
    }

    buttonCorreo() {
        const {verifyCorreo, correo} = this.state;
        if (verifyCorreo == correo) {
            return (
                <Item success style={styles.inputRounded}>
                    <Input
                        style={styles.color}
                        placeholder='Correo electrónico'
                        keyboardType='email-address'
                        placeholderTextColor='#fff'
                        returnKeyType='next'
                        autoCapitalize='none'
                        value={this.state.verifyCorreo}
                        onChangeText={(verifyCorreo) => this.setState({verifyCorreo})}/>
                    <Icon name='checkmark-circle' style={styles.icon}/>
                </Item>
            );
        }

        return (
            <Item error style={styles.inputRounded}>
                <Input
                    style={styles.color}
                    placeholder='Correo electrónico'
                    keyboardType='email-address'
                    placeholderTextColor='#fff'
                    returnKeyType='next'
                    autoCapitalize='none'
                    value={this.state.verifyCorreo}
                    onChangeText={(verifyCorreo) => this.setState({verifyCorreo})}/>
                <Icon name='close-circle' style={styles.icon}/>
            </Item>
        );
    }

    render() {
        return (
            <ImageBackground source={img} style={styles.img}>
                <View style={styles.estiloImageB}>

                    <View style={styles.view4}>
                        <Icon name="ios-arrow-back" style={styles.icon2} onPress={() => Actions.pop()}/>
                    </View>

                    <View style={styles.view}>
                        <Item style={styles.inputRounded}>
                            <Input
                                style={styles.color}
                                placeholder='Correo electrónico'
                                keyboardType='email-address'
                                placeholderTextColor='#fff'
                                returnKeyType='next'
                                autoCapitalize='none'
                                value={this.state.correo}
                                onChangeText={correo => this.setState({correo})}/>
                        </Item>

                        {this.buttonCorreo()}

                    </View>

                    <View style={styles.content}>
                        <Button block style={styles.button} onPress={this.recover.bind(this)}>
                            <Text style={styles.boton}>RECUPERAR CONTRASEÑA</Text>
                        </Button>
                    </View>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        justifyContent: 'flex-end',
        flex: 2,
        height: null,
        width: null
    },
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    boton: {
        color: 'white',
        fontWeight: 'bold'
    },
    button: {
        width: '78%',
        alignSelf: 'center',
        backgroundColor: 'orange'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        margin: 15
    },
    icon: {
        marginRight: 10,
        color: 'orange'
    },
    icon2: {
        backgroundColor: 'transparent',
        color: 'orange',
        fontSize: 50
    },
    inputRounded: {
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        borderColor: 'orange',
        borderWidth: 1.5
    },
    estiloImageB: {
        backgroundColor: 'rgba(0,0,0,.5)',
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    },
    color: {
        color: 'white'
    },
    view4: {
        flex: 1,
        margin: 20
    }
});