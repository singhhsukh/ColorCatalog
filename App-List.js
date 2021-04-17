import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import ColorButton from "./components/ColorButton";
import Colorform from "./components/ColorFORM";
import { useColors } from "./hooks"

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const {colors,addColor} = useColors();

  return (
  <>
    <Colorform onNewColor ={addColor} />
    <FlatList style={[styles.container, { backgroundColor }]}
        data = {colors}
        renderItem = {({ item }) =>{
            return(
                <ColorButton key={item.id} backgroundColor={item.color} onPress={setBackgroundColor}/>
            );
           }
        }
    />
  </>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        display:"flex"
    }
});