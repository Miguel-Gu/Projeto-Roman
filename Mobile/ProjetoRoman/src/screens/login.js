import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
        };
    }

    realizarLogin = async () => {

        console.warn(this.state.email + ' ' + this.state.senha);

        const resposta = await api.post('/login', {
            email: this.state.email,
            senha: this.state.senha,
        });
        const token = resposta.data.token;
        await AsyncStorage.setItem('userToken', token);

        if (resposta.status == 200) {
            this.props.navigation.navigate('Main');
        }

        console.warn(token);

    };
    render() {
        return (
            <ImageBackground source={require('../../assets/img/TelaLogin.png')}>
                <View style={styles.overlay} />
                <View style={styles.main}>
                    <Image
                        source={require('../../assets/img/Logo.png')}
                        style={styles.ImgLogoLogin}
                    />
                    <TextInput
                        style={styles.inputLogin}
                        placeholder="email"
                        placeholderTextColor="#FFF"
                        keyboardType="email-address"
                        onChangeText={email => this.setState({ email })}
                    />

                    <TextInput
                        style={styles.inputLogin}
                        placeholder="senha"
                        placeholderTextColor="#FFF"
                        keyboardType="default"
                        secureTextEntry={true}

                        onChangeText={senha => this.setState({ senha })}
                    />

                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={this.realizarLogin}>
                        <Text style={styles.btnLoginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground >

        );
    }
}
const styles = StyleSheet.create({

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(183,39,255,0.79)',
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    ImgLogoLogin: {
        width: 89,
        height: 90,
    },
    inputLogin: {
        width: 240, 
        marginBottom: 40, 
        fontSize: 18,
        color: '#FFF',
        borderBottomColor: '#FFF', 
        borderBottomWidth: 2, 
      },
    
      btnLoginText: {
        fontSize: 12,
        fontFamily: '', 
        color: '#FFF', 

        textTransform: 'uppercase', 
      },
      btnLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 38,
        width: 199,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 1,    
      },
});