import React, {Component} from 'react';
import {
  StyleSheet, 
  View, 
  Button, 
  AppRegistry,
  ListView,
  Text,
  TouchableHighlight
} from 'react-native';

import DataForm from './app/components/DataForm';
import ListItem from "./app/components/Item";

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <DataForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingTop:24
  }
  
});