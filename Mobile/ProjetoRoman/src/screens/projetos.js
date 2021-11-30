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
    const resposta = await api.get('/projetos');
    // console.warn(resposta);
    const dadosDaApi = resposta.data;
    this.setState({listaProjetos: dadosDaApi});
  };

  componentDidMount() {
    this.buscarEventos();
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.tituloListar}>Listar Meus Projetos</Text>
        <View style={styles.linha}></View>

        <View style={styles.lista}>
          <FlatList data={this.state.listaProjetos} renderItem={this.renderItem}/>
        </View>
      </View>
    );
  }

  renderItem = ({item}) => (

    <View style={styles.projeto}>
      <Text>{item.nomeProjeto}</Text>
      <Text>{item.idTemaNavigation.nomeTema}</Text>
      <Text>{item.idProfessorNavigation.idEquipeNavigation.nomeEquipe}</Text>
      <Text>{item.idProfessorNavigation.idUsuarioNavigation.userName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  projeto: {
    backgroundColor: '#f1f1f1',
    color: 'C4c4c4'
  },

})

