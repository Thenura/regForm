import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from 'react-navigation'

import RegForm from './app/components/RegForm';
import ChartForm from './app/components/ChartForm';

export default class App extends Component{

  render() {
    return (
      <View style={styles.container}>
        <RegForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  }
  
});