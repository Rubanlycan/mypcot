import React from 'react'
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homesvg from '../assets/homesvg.svg'
import Customer from '../assets/customer.svg'
import Khata from '../assets/khata.svg'
import Order from '../assets/order.svg'

import HomeScreen from '../Screens/HomeScreen';
import CustomerScreen from '../Screens/CustomerScreen';
import KhataScreen from '../Screens/KhataScreen';
import OrderScreen from '../Screens/OrderScreen';


const BottomTabStack = createBottomTabNavigator()

const CustomTabButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ top: -30, }}>
            {children}
        </TouchableOpacity>
    )
}
const BottomTab = (props) => {
    return (
        <View style={{ flex: 1 }}>

            <BottomTabStack.Navigator
                tabBarOptions={{

                    showLabel: false

                }}
                tab
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: { height: 60 },
                })} >
                <BottomTabStack.Screen name="Home" component={HomeScreen} options={{

                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <Homesvg />
                            <Text style={{ color: focused ? '#2c3d63' : '#ccc' }}>Home</Text>
                        </View>

                    )
                }}

                />
                <BottomTabStack.Screen name="Customer " component={CustomerScreen} options={{

                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', right: 25 }}>
                            <Customer />

                            <Text style={{ color: focused ? '#2c3d63' : '#ccc' }}>Customer</Text>
                        </View>

                    )
                }} />
                <BottomTabStack.Screen name=" Add" component={HomeScreen} options={{

                    tabBarIcon: ({ focused }) => (
                        <>
                            <View style={{
                                position: 'absolute',
                                bottom: -18,
                                width: 90,
                                height: 48,
                                backgroundColor: "#ededed",
                                borderBottomLeftRadius: 45,
                                borderBottomRightRadius: 45,
                            }}>
                            </View>
                            <Image source={require('../assets/add.png')} style={{ resizeMode: 'contain', height: 75, width: 75, }} />



                        </>

                    ),
                    tabBarButton: (props) => <CustomTabButton {...props} />
                }} />
                <BottomTabStack.Screen name="Khata" component={KhataScreen} options={{

                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', left: 25 }}>
                            <Khata />

                            <Text style={{ color: focused ? '#2c3d63' : '#ccc' }}>Khata</Text>
                        </View>

                    )
                }} />
                <BottomTabStack.Screen name="Order" component={OrderScreen} options={{

                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <Order />
                            <Text style={{ color: focused ? '#2c3d63' : '#ccc' }}>Order</Text>
                        </View>

                    )
                }} />
            </BottomTabStack.Navigator>
        </View >

    )
}

export default BottomTab

const styles = StyleSheet.create({
    floatbtn: {
        overflow: 'hidden',
        width: 80,
        height: 40,
        backgroundColor: "gold",
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,

        // borderLeftColor: '#ededed',
        // borderLeftWidth: 12,
        // borderRightColor: '#ededed',
        // borderRightWidth: 12,
        // borderBottomColor: '#ededed',
        // borderBottomWidth: 12,
    }
})