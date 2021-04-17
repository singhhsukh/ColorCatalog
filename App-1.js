import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Button,
  Image,
  Dimensions,
  Alert,
  ProgressViewIOS,
  Platform,
  ProgressBarAndroid,
  StyleSheet
} from 'react-native';

import fooBal from "./assets/1.jpg";
import icon from "./assets/icon.png";

const { height, width } = Dimensions.get('window');

export default function App1() {
  const onButtonPress = () => {
    alert(`${new Date().toLocaleTimeString()} Button pressed`);
  };

  return (
    <View style={styles.page}>
      {Platform.OS === 'ios' && <ProgressViewIOS progress={0.5} />}
      {Platform.OS === 'android' && (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="Blue"
          progress={0.5}
        />
      )}
      <ActivityIndicator size="large" color="grey" />
      <Button title="Click Me" onPress={onButtonPress} />
      <Text style={styles.text}> Height: {height}</Text>
      <Text style={styles.text}> Width: {width}</Text>
      <Image style={styles.image} source={fooBal} />
      <Image style={styles.image} source={icon} />
    </View>
  );
}


const styles = StyleSheet.create({
    page:{
        marginTop: 10,
        padding: 20
    },
    text:{
        fontSize: 30,
        color: "red",
        backgroundColor: "blue",
        margin: 20,
        padding: 10
    },
    image:{
    width : width,
    height: height
    }
})