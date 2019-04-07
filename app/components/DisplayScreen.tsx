import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    AlertIOS,
    AsyncStorage
} from 'react-native';
import { string } from 'prop-types';

export default class RegForm extends Component{

  render() {
    return (
        <View>
            <Text>
              Second Screen
            </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  regForm: {
    flex:1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 24
  },
  header:{
    fontSize: 24,
    color: "#000000",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomWidth: 1,
    justifyContent: "center",
    fontWeight: "bold"
  },
  inputText:{
    marginBottom:20,
    backgroundColor: "#fff",
    borderRadius: 12,
    height: 40,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    paddingLeft: 10
  },
  button:{
    alignSelf: "stretch",
    padding: 10,
    borderRadius:12,
    alignItems: "center",
    backgroundColor: "#59cbbd",
    marginTop: 32,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    }
  }

});