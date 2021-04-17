import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import Color from "color";

export default function ColorDetails( { route,navigation }) {
    const { color: name} = route.params;
    const color = Color(name);
    const colorNegate = {fontSize:30 ,color : color.negate().toString()};
    return(
    <>
        <View style={[styles.container, {backgroundColor: name}]}>
            <Text style={colorNegate}> Color Name:{name} </Text>
            <Text style={colorNegate}> Color:{color.rgb().toString()} </Text>
            <Button title="Pet Details" onPress={() => navigation.navigate("Pets")} />
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});