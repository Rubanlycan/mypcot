import React from 'react'
import { Text, View, StatusBar, ScrollView, SafeAreaView, Platform, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native'
import { SvgCssUri } from 'react-native-svg'
import OrderIllus from '../assets/order_illus.svg'
import Subscriptions_illustration_image from '../assets/subscriptions-illustration-image.svg'
import Customers_illustration_image from '../assets/customers-illustration-image.svg'
import Menu from '../assets/menu.svg'
import Heart from '../assets/heart.svg'
import Khata from '../assets/khata.svg'
import Bell from '../assets/bell.svg'
import Search from '../assets/search_icon.svg'
import FlatlistBoxView from '../Components/FlatlistBoxView'
import Icon from 'react-native-vector-icons/Entypo'



const calendarArr = [{
    "day": "Mon",
    "date": "20"
}, {
    "day": "Tue",
    "date": "21"
}, {
    "day": "Wed",
    "date": "22"
}, {
    "day": "Thu",
    "date": "23"
}, {
    "day": "Fri",
    "date": "24"
}, {
    "day": "Sat",
    "date": "25"
}, {
    "day": "Sun",
    "date": "26"
},]
const array = [{
    bgColor: "#33A1CC",
    btnname: "Orders",
    btnColor: "#cc5e33",
    contentImg: () => <OrderIllus />

}, {
    bgColor: "#DCB223",
    btnname: "Subscriptions",
    btnColor: "#234ddc",
    contentImg: () => <Subscriptions_illustration_image />
}, {
    bgColor: "#31CE95",
    btnname: "View Customers",
    btnColor: "#ce316a",
    contentImg: () => <Customers_illustration_image />
},]
const HomeScreen = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [calIndex, setCalIndex] = React.useState(0)
    return (
        <ScrollView contentContainerStyle={{ justifyContent: 'space-between', }} style={{
            paddingHorizontal: 20,
            backgroundColor: '#ededed',

            top: Platform.OS === "ios" ? null : StatusBar.currentHeight,
            marginBottom:
                Platform.OS === "ios" ? null : StatusBar.currentHeight,
        }}>
            <SafeAreaView style={{ flex: 1, paddingBottom: 40 }}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    translucent={true}
                    backgroundColor="#ededed"
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flex: 0.5, flexDirection: 'row' }}>
                        <Menu />
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Heart />
                        <Bell />
                        {/* <RequireLocalSvgOnly asset={require('../assets/profile.svg')} /> */}
                    </View>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 40 }}>
                    <View>
                        <Text style={{ fontSize: 20, color: '#627398' }}>Welcome, <Text style={{ fontSize: 24 }}>Mypcot !!</Text></Text>
                        <Text style={{ fontSize: 16, color: '#a7afbc' }}>here is your dashboard...</Text>
                    </View>
                    <Search />
                </View>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={array}

                    renderItem={({ item, index }) => <FlatlistBoxView
                        flatIndex={index}
                        containerStyle={[styles.parentFlatlistView, { width: windowWidth / 1.12, backgroundColor: item.bgColor }]}
                        contentImg={item.contentImg}
                        btnColor={item.btnColor}
                        btnname={item.btnname} />}


                />



                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                    <View style={{ marginHorizontal: 5 }}>
                        <Text>January 23, 2021</Text>
                        <Text style={{ fontSize: 26, color: '#2c3d63' }}>Today</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderColor: '#d7d7d7',
                        borderWidth: 2,
                        borderRadius: 20,
                        justifyContent: 'center',
                        marginHorizontal: 5,
                        paddingHorizontal: 20,


                    }}>

                        <Text style={{ fontSize: 16, textTransform: 'uppercase', color: '#2c3d63' }}>Timeline</Text>
                        <Icon name={"chevron-down"} size={16} color="#2c3d63" />

                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderColor: '#ccc',
                        borderWidth: 2,
                        borderRadius: 20,
                        justifyContent: 'center',
                        marginHorizontal: 5,
                        paddingHorizontal: 20,

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center', borderRadius: 10,
                        }}>
                            <Khata />
                            <Text style={{ fontSize: 18, paddingLeft: 5, color: '#2c3d63' }}>Jan, 2021</Text>
                        </View>

                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginVertical: 30 }}>
                    {
                        calendarArr.map((a, i) => <TouchableOpacity onPress={() => setCalIndex(i)}><Text style={{ color: calIndex == i ? '#0f8181' : '#d1d4dd', fontSize: 20 }}>{a.day}</Text>
                            <Text style={{ color: calIndex == i ? '#0f8181' : '#2c3d63', textAlign: 'center', fontSize: 20 }}>{a.date}</Text>
                            {calIndex == i ? <Icon name={"dot-single"} size={24} color="#0f8181" style={{ alignSelf: 'center' }} /> : null}</TouchableOpacity>)
                    }
                </View>
                <View style={{
                    flex: 1,
                    shadowColor: "#ccc",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 5,

                    flexDirection: 'row', justifyContent: 'space-between', height: 200, width: windowWidth / 1.12,
                }}>
                    <View style={{ flex: 1, flexDirection: 'row', borderRadius: 20, backgroundColor: '#fff', }}>
                        <View style={{ flex: 0.7, paddingVertical: 25, paddingHorizontal: 30, justifyContent: 'space-between', }}>
                            <View>
                                <Text style={{ fontSize: 22, color: '#2C3D63' }}>new order created</Text>
                                <Text numberOfLines={1} style={{ fontSize: 16 }}>new order created with order</Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ textAlign: 'left', color: '#fe804e' }}>09:00 AM</Text>
                                <Icon name={"arrow-long-right"} size={16} color={'#fe804e'} />
                            </View>


                        </View>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name={"text-document"} size={52} color={'#fe804e'} />
                        </View>
                    </View>


                </View>
            </SafeAreaView>
        </ScrollView >
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    parentFlatlistView: {
        flexDirection: 'row', borderRadius: 20,
        marginHorizontal: 4, height: 250,

    }
})