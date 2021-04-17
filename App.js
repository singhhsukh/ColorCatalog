import React from 'react';
import ColorList from './components/ColorList';
import ColorDetails from './components/ColorDetails';
import PetDetails from './components/PetDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const {Navigator, Screen } = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Home" component={ColorList} />
                <Screen name="Details" component={ColorDetails} />
                <Screen name="Pets" component={PetDetails} />
            </Navigator>
        </NavigationContainer>
    );
}