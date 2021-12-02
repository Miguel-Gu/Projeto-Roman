import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import Picker from '@react-native-picker/picker'
import api from './services/api';

import {TouchableOpacity} from 'react-native-gesture-handler';

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
                    IdTema: this.state.idtema,
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
            <View>
                <Text>Novo Projeto</Text>
                <View></View>

                <View>
                    <TextInput 
                        placeholder="Nome do projeto"
                        onChangeText={NomeProjeto => this.setState({NomeProjeto})}
                    />

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={IdTema => this.setState({IdTema})}

                        selectedValue={selectedValue}
                    >

                        <Picker.Item label="Gestão" value="1"/>
                        <Picker.Item label="HQs" value="2"/>

                    </Picker>

                    <Picker
                        style={{ height: 50, width: 150 }}
                        onValueChange={IdProfessor => this.setState({IdProfessor})}   
                        
                        selectedValue={selectedValue}
                    >

                        <Picker.Item label="Selecione um professor" value=""/>
                        <Picker.Item label="Gustavo" value="1"/>
                        <Picker.Item label="Matheus" value="2"/>
                        <Picker.Item label="Jhon" value="3"/>
                    </Picker>

                    <TouchableOpacity
                        onPress={this.cadastrarProjeto}
                    >
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}