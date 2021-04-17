import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import ColorButton from "./ColorButton";
import Colorform from "./ColorFORM";
import { useColors } from "../hooks"

export default function ColorList({ navigation }) {
//  const [backgroundColor, setBackgroundColor] = useState("blue");
//    <FlatList style={[styles.container, { backgroundColor }]}
  const {colors,addColor} = useColors();

  return (
  <>
    <Colorform onNewColor ={addColor} />
    <FlatList style={styles.container}
        data = {colors}
        renderItem = {({ item }) =>{
            return(
                <ColorButton key={item.id} backgroundColor={item.color}
                 onPress={() => navigation.navigate("Details",{ color: item.color })
                 }
                />
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