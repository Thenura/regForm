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
import {StackNavigator} from "react-navigation"
import DataForm from './app/components/DataForm';
import DisplayScreen from "./app/components/DisplayScreen";

export default class App extends Component{
  static navigationOptions = {
      title: "Intro Screen"
  }
    render() {
    return (
      <AppStackNavigator>
        <View style={styles.container}>
          <DataForm/>
        </View>
      </AppStackNavigator>
     
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