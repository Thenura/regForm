import React, { Component } from "react"

import {
    View, 
    Text, 
    StyleSheet
} from "react-native"

class ChartForm extends Component{
    render(){
        return (
            <View style = {styles.container}>
                <Text>ChartForm</Text>
            </View>
        )
    }
}
export default ChartForm;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
})