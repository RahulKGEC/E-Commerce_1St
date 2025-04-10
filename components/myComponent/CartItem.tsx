
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { AntDesign, Entypo } from '@expo/vector-icons'


const CartItem = () => {
    return (
        <View>
            <View style={[ { height: 100, width: "85%",marginTop:10, marginHorizontal: "auto", flexDirection: "row", gap: 10, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: "#F8F8F8", borderRadius: 10 }]}>


                <View style={[ { height: 70, width: 70, marginVertical: "auto", justifyContent: "center", alignItems: "center", backgroundColor: "#EDD3D4", borderRadius: 10 }]}>
                    <Image source={require('../../assets/images/headset.png')} style={{ height: 50, width: 50, }} />
                </View>

                <View style={[ { height: 70, width: 100, marginVertical: "auto",marginLeft:13, gap: 10, justifyContent: "center", alignItems: "center" }]}>
                    <Text style={{ fontSize: 12 }}>
                        Apple W-series 6
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "800", alignSelf: "flex-start" }}>
                        $ 45,000
                    </Text>
                </View>
                <View style={[ { height: 70, width: 70, marginVertical: "auto", justifyContent: "center", alignItems: "center", gap: 10 }]}>

                    <Text style={{ fontSize: 11 }}>
                        Size:35
                    </Text>
                    <View style={[ { height: 30, width: 55, borderRadius: 7, flexDirection: "row", gap: 5, alignItems: "center", justifyContent: "center" }]}>


                        <Entypo name="plus" style={{ fontSize: 22, color: "#000" }} />

                        <Text style={{ fontSize: 11 }}>
                            1
                        </Text>

                        <Entypo name="minus" style={{ fontSize: 22, color: "#000" }} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    bord: {
        borderWidth: 2,
        borderColor: "red"
      },
      btxt: {
        fontSize: 20, fontWeight: "600"
      },
})