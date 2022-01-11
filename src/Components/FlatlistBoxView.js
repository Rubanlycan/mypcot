import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import OrderIllus from '../assets/order_illus.svg'
import Subscriptions_illustration_image from '../assets/subscriptions-illustration-image.svg'
import Customers_illustration_image from '../assets/customers-illustration-image.svg'

const getImgComp = {
    orderimg: <OrderIllus />,
    subscribeImg: <Subscriptions_illustration_image />,
    customerImg: <Customers_illustration_image />,
}
const FlatlistBoxView = ({ contentImg, containerStyle, btnname, btnColor, flatIndex }) => {
    let obj = getImgComp['orderimg']
    return (

        <View style={containerStyle}>
            <View style={{ flex: 0.5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                {/* <RequireLocalSvgOnly asset={require('../assets/order_illus.svg')} /> */}
                {flatIndex == 0 ? <OrderIllus /> : flatIndex == 1 ? <Customers_illustration_image /> : <Subscriptions_illustration_image />}
                <View style={{ backgroundColor: btnColor, borderRadius: 20 }}>
                    <Text style={{ color: '#fff', paddingHorizontal: 30, paddingVertical: 10 }}>{btnname}</Text>
                </View>
            </View>
            <View style={{ flex: 0.6, }}>
                <View style={[styles.box, { backgroundColor: btnColor, top: 0 }]}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>You have <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}> 3</Text> <Text style={{ color: '#fff', textAlign: 'center' }}>active orders</Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        {[require(`../assets/images/selmon.jpeg`), require(`../assets/images/aamir.jpeg`), require(`../assets/images/elon.jpeg`)].map((i, index) => < Image style={{ zindex: 1 + index, resizeMode: 'contain', height: 32, width: 32, borderRadius: 150, position: 'relative', bottom: -20 }} source={i} />)}
                    </View>
                </View>
                <View style={[{
                    backgroundColor: "#fff", top: 100, left: 20, shadowColor: "#000",

                }, styles.box]}>
                    <Text style={{ textAlign: 'center' }}><Text style={{ color: '#2c3d63', textAlign: 'center', fontSize: 20, }}>02 </Text><Text style={{ color: '#ccc', textAlign: 'center' }}> pending request</Text> <Text style={{ color: '#2c3d63', textAlign: 'center', }}>Orders From</Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        {[require(`../assets/images/selmon.jpeg`), require(`../assets/images/aamir.jpeg`)].map((i, index) => < Image style={{ zindex: 1 + index, resizeMode: 'contain', height: 32, width: 32, borderRadius: 150, position: 'relative', bottom: -0 }} source={i} />)}
                    </View>
                </View>
            </View>

        </View>
    )
}

export default FlatlistBoxView

const styles = StyleSheet.create({
    box: {
        position: 'absolute',

        height: 80,
        width: 120,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,

    }
})