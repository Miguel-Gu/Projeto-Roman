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
            listaTemas: [],
            listaProfessores: [],
        }
    }

    buscarTemas = async () => {

        try {
            
            const token = await AsyncStorage.getItem('userToken');

            if (token != null) {
                
                const resposta = await api.get('/temas',
                {
                    headers: {
                      Authorization: 'Bearer ' + token,
                    },
                  });

                if (resposta.status == 200) {
                    console.warn(resposta);
                    const dadosDaApi = resposta.data;
                    this.setState({listaTemas: dadosDaApi})
                }
            }
        } catch (error) {
            console.warn(erro);
        }
    }


    buscarProfessores = async () => {

        try {
            
            const token = await AsyncStorage.getItem('userToken');

            if (token != null) {
                
                const resposta = await api.get('/professores',
                {
                    headers: {
                      Authorization: 'Bearer ' + token,
                    },
                  });

                if (resposta.status == 200) {
                    console.warn(resposta);
                    const dadosDaApi = resposta.data;
                    this.setState({listaProfessores: dadosDaApi})
                }
            }
        } catch (error) {
            console.warn(erro);
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

    componentDidMount(){
        this.buscarTemas();
        this.buscarProfessores();
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
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        {
                            this.state.listaTemas.map((tema) => {
                                return (
                                    <Picker.Item label={tema.nomeTema} value={tema.Idtema}/>
                                )
                            })
                        }
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