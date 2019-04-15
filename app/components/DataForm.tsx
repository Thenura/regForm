import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    AlertIOS,
    AsyncStorage,
    FlatList
} from 'react-native';
import { string, number } from 'prop-types';
import {UserManager} from "../users/UserManager"
import {UserService} from "../users/UserService"
import {IUser, IDictionary} from "../models/interfaces"

interface IRegFormProps {
  userManager: UserManager
}

interface IRegFormState {
  firstName: string;
  lastName: string;
  email: string;
  display: string;
}

export default class RegForm extends Component<IRegFormProps, IRegFormState>{

  state: IRegFormState;
  //public userManager: UserManager;

  constructor(props: IRegFormProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      display: "",
      
    }
  }

 onRegisterNowButtonTapped: () => void = () => {
   UserManager.createUser(contactData)
   this.userManager.createUser(contactData);
    
 // }

  //onViewSubmissionButtonTapped: () => void = () => {
    // let users: IUser[] = userManager.getAllUsers();
  //}

  
  saveData: () => void = async () => {
    let contactData: IUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };

    try {
      let values: string | null = await AsyncStorage.getItem("user");

      if (values) {
        // An array already exists
        let existingDictionary: IDictionary<IUser> = JSON.parse(values);
        existingDictionary[contactData.email] = contactData;
        await AsyncStorage.setItem('user', JSON.stringify(existingDictionary));
      
      } else {
        // No data exists yet
        let newDictionary: IDictionary<IUser> = {};
        newDictionary[contactData.email] = contactData;
        await AsyncStorage.setItem('user', JSON.stringify(newDictionary));
      }
    } catch (error) {
      console.log(error);
    }

  }

  showData = async () => {
      try {
          const retrieve = await AsyncStorage.getItem("user");

          if (retrieve) {
            const values: IDictionary<IUser> = JSON.parse(retrieve);
            console.log('Retrieved data', values);
          } else {
            console.log('No data exists yet.');
          }
      }
      catch(error){
        console.log(error)
      }
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
            onPress = {this.saveData}>
            <Text style={{ fontWeight: "bold",}} >Register Now!</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.button} 
            onPress = {this.showData}>
            <Text style={{ fontWeight: "bold",}} >View Submission</Text>
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