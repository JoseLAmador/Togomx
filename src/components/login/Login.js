import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {Button, Input, Item, Icon, Spinner, Toast} from 'native-base';
import firebase, {firebaseAuth} from '../firebase/Firebase';
import {Actions} from 'react-native-router-flux';
import Video from 'react-native-video';
import videopp from '../../assets/video/videopp.mp4';


export default class Login extends Component < {} > {
    state = {
        email:'',
        contraseña:'',
        error: '',
        loading: false,
        login: {
            correo: '',
            password: ''
        }
    };

    constructor(props){
        super(props);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLoginFailed = this.onLoginFailed.bind(this);
    };

    onButtonPress(){
        const {correo, password} = this.state.login;
        this.setState({error:'', loading: true});
        firebaseAuth.signInWithEmailAndPassword(correo,password)
            .then(this.onLoginSuccess).catch(this.onLoginFailed);
    };

    onLoginFailed(r){
        console.log(r);
        this.setState({error: 'Autenticación Fallida', loading:false});
        Toast.show({text:'Usuario/Contraseña inválidos', position:'bottom',
            buttonText:'OK', type:'danger'
        })
    };

    onLoginSuccess(r){
        console.log(r);
        this.setState({email:'', contraseña:'' ,error:'', loading:false});
        console.log('Welcome Perro')
        Toast.show({text:'Bienvenido', position:'bottom', duration: 5000, type:'success'})

    };


    spinnerInicio(){
        if(this.state.loading){
            return(
                <Button rounded block style={styles.buttonSpinner}>
                    <Spinner color='white'/>
                </Button>
            );
        }
            return(
                <Button rounded block style={styles.button} onPress={this.onButtonPress.bind(this)}>
                    <Text style={styles.boton}>INICIAR SESIÓN</Text>
                </Button>
            );
    };

    handleChange = (field, value) => {
        const login = this.state.login;
        login[field]= value;
        this.setState({login});
    };

    render(){
        return(
            <View style={styles.img}>
                <StatusBar backgroundColor="orange" barStyle="light-content"/>
                <Video
                    source={videopp}
                    rate={1.0}
                    muted={true}
                    resizeMode={"cover"}
                    repeat
                    style={styles.video}
                />

                <View>
                    <Item style={styles.inputRounded}>
                        <Input
                            name="correo"
                            placeholder="Correo electrónico"
                            keyboardType='email-address'
                            placeholderTextColor='#fff'
                            returnKeyType='next'
                            autoCapitalize='none'
                            style={styles.color}
                            value={this.state.correo}
                            onChangeText={value => this.handleChange("correo",value)}
                        />
                    </Item>

                    <Item style={styles.inputRounded}>
                        <Input
                            name="password"
                            placeholder="Contraseña"
                            secureTextEntry={true}
                            placeholderTextColor='#fff'
                            style={styles.color}
                            value={this.state.password}
                            onChangeText={value => this.handleChange("password",value)}
                        />
                    </Item>

                    {this.spinnerInicio()}
                </View>

                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <View style={styles.view}>
                            <TouchableOpacity onPress={()=> Actions.Recover()} >
                                <Text style={styles.text}>¿Olvidaste tu Contraseña?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


            </View>
        );
    };
};

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    img: {
        justifyContent: 'flex-end',
        flex: 2,
        height: null,
        width: null
    },
    texto: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 20,
        backgroundColor: 'transparent'
    },
    view: {
        margin: 15
    },
    view2: {
        justifyContent: 'flex-end',
        backgroundColor: 'transparent'
    },
    view3: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 10
    },
    view4: {
        flex: 1,
        margin: 20
    },
    inputRounded: {
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        borderColor: 'orange',
        borderWidth: 1.5,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    boton: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf:'center',
    },
    text: {
        color: 'white'
    },
    text1: {
        color: 'white',
        fontSize: 18
    },
    adelante: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20
    },
    button: {
        width: '78%',
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor: 'orange',
    },
    icon: {
        backgroundColor: 'transparent',
        color: 'orange',
        fontSize: 50
    },
    buttonSpinner: {
        marginRight: 140,
        marginLeft: 140,
        marginBottom: 10,
        backgroundColor: 'orange'
    },
    color: {
        color: 'white'
    },
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
});

