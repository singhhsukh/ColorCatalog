import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, SafeAreaView, Image, StyleSheet, ActivityIndicator, RefreshControl} from 'react-native';

export default function PetDetails(){
    const[pet, setPet] = useState();
    const[loading, setLoading] = useState(false);
    const loadPet = async() => {
        setLoading(true);
        const res = await fetch("http://pet-library.moonhighway.com/api/randomPet");
        const data = await res.json();
        await Image.prefetch(data.photo.full);
        setPet(data);
        setLoading(false);
    }

    useEffect(() => {
        loadPet();
    },[]);

    if (!pet) return <ActivityIndicator size="large" />;

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={<RefreshControl refershing = {loading} onRefresh={loadPet} />}
            >
                <Image style={styles.pic} source= {{uri: pet.photo.full }} />
                <Text style={styles.paragraph}> {pet.name} - {pet.category} </Text>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingTop: 5,
        backgroundColor: 'white',
        padding: 8
    },
    pic:{
    height:500,
    width:500,
    justifyContent:'center'
    },
    paragraph:{
    margin :24,
    fontSize:18,
    textAlign:'center'
    }
});