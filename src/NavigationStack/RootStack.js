import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={'home'} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"home"} component={BottomTab} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AppContainer