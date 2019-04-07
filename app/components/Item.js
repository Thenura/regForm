import React, { Component } from "react"
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight
} from "react-native";

import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAR7hDTrrSSHd1ghjEYYUIKGtwY7d_MBb4",
    authDomain: "namecollect-81f5e.firebaseapp.com",
    databaseURL: "https://namecollect-81f5e.firebaseio.com",
    projectId: "namecollect-81f5e",
    storageBucket: "namecollect-81f5e.appspot.com",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Item extends Component {
    constructor(){
        super();
        let ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.state = {
            itemDataSource: ds
        }

        this.itemsRef = this,getRef().child("items")

        this.renderRow = this.renderRow.bind(this)
        this.pressRow = this.pressRow.bind(this)
    }
    
    getRef(){
        return firebaseApp.database().ref();

    }
    componentWillMount(){
        this.getItems(this.itemsRef);
    }

    componentDidMount(){
        this.getItems(this.itemsRef);
    }

    getItems(itemsRef) {
        let items = [{title: 'Item One'}, {title: 'Item Two'}]
        // itemsRef.on('value', (snap) => {
        //     let items = []

        //     snap.forEach((child) => {
        //         let item = {
        //             title: child.val().title,
        //             _key: child.key
        //         }
        //         console.log('Item', item);
        //         items.push(item);
        //     })
        //     this.setState({
        //         itemDataSource: this.state.itemDataSource.cloneWithRows(items)
        //     })
        // })
        this.setState({
            itemDataSource: this.state.itemDataSource.cloneWithRows(items)
        })
    }
    
    pressRow(item){
        console.log(item)
    }
    renderRow(item){
        return (
            <TouchableHighlight onPress={() => {
                this.pressRow(item)
            }}>
                <View>
                    <Text>
                        {item.title}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
    render() {
        return (
            <ListView
            dataSource={this.state.itemDataSource}
            renderRow={this.renderRow}
          />
        )
    }
}