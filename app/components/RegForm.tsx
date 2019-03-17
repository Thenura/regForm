import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    AlertIOS,
} from 'react-native';
import { string } from 'prop-types';

interface IRegFormProps {
  
}

interface IRegFormState {
  firstName: string;
  lastName: string;
  email: string;
  display: string;
}


export default class RegForm extends Component<IRegFormProps, IRegFormState>{

  state: IRegFormState;

  constructor(props: IRegFormProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      display: ""

    };
    
  }

  buttonListener: () => void  = () => {
    const firstName = this.state.firstName
    const lastName = this.state.lastName;
    const email = this.state.email
    AlertIOS.alert('Information', firstName + "\n" + lastName + "\n" + email)
  }

  render() {
    return (
      <View style={styles.regForm}>
        <Text style = {styles.header}>Registration</Text>
        <TextInput 
        style = {styles.inputText} 
        placeholder = "Your First Name" 
        onChangeText={(firstName) => this.setState({firstName})}
        value={this.state.firstName}
        autoCorrect={false}/>

        <TextInput 
        style = {styles.inputText} 
        placeholder = "Your Last Name" 
        onChangeText={(lastName) => this.setState({lastName})}
        value ={this.state.lastName}
        autoCorrect={false}/>

        <TextInput 
        style = {styles.inputText} 
        placeholder = "Your Email" 
        onChangeText={(email) => this.setState({email})}
        value ={this.state.email}
        autoCorrect={false}/>

        <TouchableOpacity 
            style={styles.button} 
            onPress = {this.buttonListener}>
            <Text style={{ fontWeight: "bold",}} >Register Now!</Text>
        </TouchableOpacity>
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