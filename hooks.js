import { useState,useEffect } from 'react';
import { generate } from 'shortid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useColors = () => {
    const [colors,setColors] = useState([]);

    const loadColors = async() => {
        const colorData = await AsyncStorage.getItem('@ColorListStoreL:Colors');
        if (colorData) {
            const colors = JSON.parse(colorData);
            setColors(colors);
        }
    }

    useEffect(() => {
        if (colors.length) return;
        loadColors();
    },[]);

    //Save colors
    useEffect(() => {
        AsyncStorage.setItem('@ColorListStoreL:Colors',JSON.stringify(colors));
    },[colors]);

    const addColor = color => {
    const newColor = { id : generate(), color };
    setColors([newColor,...colors]);
    };
    return {colors,addColor};
  };