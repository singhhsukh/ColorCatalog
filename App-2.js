import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import ColorButton from "./components/ColorButton"


export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return (
    <View style={[styles.container, { backgroundColor }]}>
        <ColorButton backgroundColor="red" onPress={setBackgroundColor}/>
        <ColorButton backgroundColor="blue" onPress={setBackgroundColor}/>
        <ColorButton backgroundColor="yellow" onPress={setBackgroundColor}/>
        <ColorButton backgroundColor="white" onPress={setBackgroundColor}/>
        <ColorButton backgroundColor="black" onPress={setBackgroundColor}/>
        <ColorButton backgroundColor="cyan" onPress={setBackgroundColor}/>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
    }
});