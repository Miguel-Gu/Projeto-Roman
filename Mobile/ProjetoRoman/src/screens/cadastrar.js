import React, { Component, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from './services/api';

import { TouchableOpacity } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Cadastrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IdTema: 0,
            IdProfessor: 0,
            NomeProjeto: '',
        }
    }


    cadastrarProjeto = async () => {

        try {
            const token = await AsyncStorage.getItem('userToken');

            const resposta = await api.post(
                '/projetos',
                {
                    IdTema: this.state.IdTema,
                    IdProfessor: this.state.IdProfessor,
                    NomeProjeto: this.state.NomeProjeto,
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                },
            )

            if (resposta.status == 201) {
                console.warn('Projeto cadastrado com sucesso');
            }
            else {
                console.warn('Falha ao cadastrar projeto');
            }

        } catch (error) {
            console.warn(error);
        }
    }


    render() {
        return (
            <View style={styles.main}>
                <ImageBackground source={require('../../assets/img/FundoCadastro.png')} />
                <View style={styles.cabcalho}>
                    <Text style={styles.cabecalhoText}>Novo Projeto</Text>
                    <View style={styles.linhaCabecalho}></View>
                </View>

                <View style={styles.boxInputs}>
                    <TextInput
                        style={styles.InputsCadastro}
                        placeholder="Nome do projeto"
                        placeholderTextColor="#9E9E9E"
                        onChangeText={NomeProjeto => this.setState({ NomeProjeto })}
                    />

                    <Picker
                        style={styles.InputsCadastro}
                        selectedValue={this.state.IdTema}
                        onValueChange={tema => this.setState({ IdTema: tema })}

                    >
                        <Picker.Item label="Selecione um Tema" value={null} />
                        <Picker.Item key='1' label='Gestão' value={1} />
                        <Picker.Item key='2' label='HQs' value={2} />

                    </Picker>

                    <Picker
                        style={styles.InputsCadastro}
                        selectedValue={this.state.IdProfessor}
                        onValueChange={professor => this.setState({ IdProfessor: professor })}

                    >
                        <Picker.Item label="Selecione um Professor" value={null} />
                        <Picker.Item key='1' label='Gustavo' value={1} />
                        <Picker.Item key='2' label='Matheus' value={2} />
                        <Picker.Item key='3' label='Jhon' value={3} />

                    </Picker>


                    <TouchableOpacity
                        style={styles.btnCadastro}
                        onPress={this.cadastrarProjeto}
                    >
                        <Text style={styles.cadastroBtnText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    main: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 50,
    },
    
    cabecalhoText: {
      fontSize: 20,
      color: '#000',
      marginLeft: 61,
      marginBottom: 10,
  
    },
    linhaCabecalho: {
        width: 288,
        height: 1,
        marginLeft: 61,
        backgroundColor: '#000'
    },
  
    boxInputs: {
      alignItems: 'center',
      justifyContent: 'space-around',
      flex: 1
    },
  
    InputsCadastro: {
      fontSize: 16,
      width: 288,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      paddingLeft: 20,
    },
  
  
    btnCadastro: {
      width: 288,
      height: 50,
      backgroundColor: '#5C79DA',
      borderRadius: 10,
      
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    cadastroBtnText: {
        fontSize: 22,
        color: '#fff'

    },
  
  });