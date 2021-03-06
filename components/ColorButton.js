import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  StyleSheet
} from 'react-native';


export default function ColorButton ({ backgroundColor, onPress = f => f }){
    return(
        <TouchableHighlight style={styles.button}
            onPress={() => onPress(backgroundColor)}
            underlayColor="orange" >
            <View style={styles.row}    >
                <View style={[styles.sample,{ backgroundColor }]} />
                <Text style={styles.buttonText}>{ backgroundColor }</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button:{
        margin:10,
        padding:10,
        borderWidth:2,
        borderRadius:10,
        backgroundColor: "rgba(255,255,255,0.8)",
        alignSelf: "stretch"
    },
    buttonText:{
        fontSize: 30,
        textAlign: "center"
    },
    sample:{
    height:20,
    width:20,
    margin:10,
    borderRadius:10,
    backgroundColor:"white"
    },
    row:{
    flexDirection: "row",
    alignItems: "center"
    }
});