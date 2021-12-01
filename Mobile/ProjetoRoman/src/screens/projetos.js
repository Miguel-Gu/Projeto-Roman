import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import api from './services/api';

import {TouchableOpacity} from 'react-native-gesture-handler';

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
          this.setState({listaProjetos: dadosDaApi})
          
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  componentDidMount() {
    this.buscarEventos();
  }

  render() {
    return (
      <View>
        <Text>Listar Meus Projetos</Text>
        <View></View>

        <View>
          <FlatList data={this.state.listaProjetos} renderItem={this.renderItem}/>
        </View>
      </View>
    );
  }

  renderItem = ({item}) => (

    <View>
      <Text>{item.nomeProjeto}</Text>
      <Text>{item.idTemaNavigation.nomeTema}</Text>
      <Text>{item.idProfessorNavigation.idEquipeNavigation.nomeEquipe}</Text>
      <Text>{item.idProfessorNavigation.idUsuarioNavigation.userName}</Text>
    </View>
  )
}