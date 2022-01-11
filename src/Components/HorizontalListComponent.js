import { FlatList, Text, View } from "react-native"
import React from 'react'

const HorizontalListComponent = () => {
    return (
        <FlatList
            style={{ flex: 1, width: '100%' }}
            contentContainerStyle={{ flex: 1 }}
            horizontal={true}
            data={new Array(3).fill(null)}
            renderItem={({ item, index }) => <View style={{ height: 250, width: '100%', backgroundColor: 'red', borderRadius: 20 }}>
                {index == 0 ? <Text>red</Text> : index == 1 ? <Text>yellow</Text> : <Text>blue</Text>}
            </View>}
        />

    )
}

export default HorizontalListComponent