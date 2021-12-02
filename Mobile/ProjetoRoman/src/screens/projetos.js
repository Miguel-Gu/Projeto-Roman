import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View, ImageBackground } from 'react-native';

import api from './services/api';

import { TouchableOpacity } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Projetos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProjetos: [],
        };
    }

    buscarEventos = async () => {

        try {
            const token = await AsyncStorage.getItem('userToken');

            if (token != null) {

                const resposta = await api.get('/projetos',
                    {
                        headers: {
                            Authorization: 'Bearer ' + token,
                        },
                    });

                if (resposta.status == 200) {
                    console.warn(resposta);
                    const dadosDaApi = resposta.data;
                    this.setState({ listaProjetos: dadosDaApi })

                }
            }
        } catch (error) {
            console.warn(error);
        }
    };

    redirecionaCadastro = async () => {
        this.props.navigation.navigate('cadastrar');
    }

    redirecionaListagem = async () => {
        this.props.navigation.navigate('projetos');
    }


    componentDidMount() {
        this.buscarEventos();
    }

    render() {
        return (
            <View style={styles.main}>
                <ImageBackground source={require('../../assets/img/fundo.png')} />
                <View style={styles.mainHeader}>
                    <View style={styles.containerMainHeader}>
                        <Text style={styles.logoMainHeader}>Roman</Text>

                        <TouchableOpacity
                            onPress={this.redirecionaCadastro}>

                            <Text>
                                Cadastrar
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.redirecionaListagem}>
                            <Text>
                                Listar
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.mainbody}>
                    <FlatList
                        contentContainerStyle={styles.mainBodyContent}
                        data={this.state.listaProjetos}
                        renderItem={this.renderItem}
                    />
                </View>

                <View style={styles.recente}>
                    <Image
                        source={require('../../assets/img/relogio.png')}
                        style={styles.relogioRecente}
                    />
                    <Text style={styles.infoRecente}>MEUS PROJETOS</Text>
                </View>

            </View>
        );
    }

    renderItem = ({ item }) => (

        <View style={styles.projeto}>
            <View style={styles.projetoBloco1}>
                <View style={styles.descricao}>
                    <Text style={styles.dTitulo}>{item.nomeProjeto}</Text>
                    <Text style={styles.dSubTitulo}>{item.idTemaNavigation.nomeTema}</Text>
                </View>
                <View style={styles.botaoOlho}>
                    <TouchableOpacity
                        onPress={() => this.verMais(item)}
                        style={styles.botaoOlho}>

                        <Image
                            source={require('../../assets/img/Olho.png')}
                            style={styles.botaoOlhoImagem}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.projetoBloco2}>
                <Text style={styles.flatItemInfo1}> Professor: {item.idProfessorNavigation.idUsuarioNavigation.userName}</Text>
                <Text style={styles.flatItemInfo2}> Equipe: {item.idProfessorNavigation.idEquipeNavigation.nomeEquipe}</Text>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    // conteÃºdo da main
    main: {
        flex: 1,
        backgroundColor: '#ECECEC',
        justifyContent: 'center',
    },

    mainHeader: {
        height: 63,
        display: 'flex',
        backgroundColor: '#2C344F',
        marginTop: 89,
    },

    containerMainHeader: {
        height: 29,
        width: 500,
        display: 'flex',
        justifyContent: 'space-between',
    },

    botaoHamburguer: {
        height: 23,
        width: 29,
        display: 'flex',
    },

    palito: {
        height: 4.84,
        width: 29,
        backgroundColor: 'white',
    },

    logoMainHeader: {
        fontFamily: 'Poppins',
        fontSize: 22,
        color: '#FFA319',
        weight: 600,
    },

    //conteudo body


    mainBodyContent: {
        paddingTop: 25,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    recente: {
        paddingTop: 25,
        height: 24,
        width: 190,
        display: 'flex',
        alignItems: 'center',
    },

    relogioRecente: {
        height: 24,
        width: 24,
    },

    infoRecente: {
        fontFamily: 'Poppins',
        fontSize: 16,
        color: '#2C344F',
    },

    projeto: {
        width: 272,
        height: 144,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,

    },

    projetoBloco1: {
        width: 272,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
    },

    dTitulo: {
        fontSize: 14,
        color: 'black',
    },

    dSubTitulo: {
        fontSize: 10,
        color: 'black',
    },

    dDescricao: {
        fontSize: 10,
        color: 'black',
    },

    botaoOlho: {
        height: 33,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoOlhoImagem: {
        height: 12,
        width: 22,
    },

    projetoBloco2: {
        height: 34,
        width: 272,
        justifyContent: 'center',
        alignItems: 'center',
    },

    flatItemInfo1: {
        fontFamily: 'Poppins',
        color: '#909090',
        fontSize: 10,
    },

    flatItemInfo2: {
        fontSize: 10,
        color: '#909090',
        fontFamily: 'Poppins',
    },

})