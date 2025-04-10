import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { CartContext } from '.'

const home = () => {
  const route = useRouter()
   const {id}=useLocalSearchParams()
   const [detail,setDetail]=useState({})
const {cart, wish, addToCart,addToWish,deleteFromCart,deleteFromWish} = useContext(CartContext)
useEffect(()=>{
  fetch(`https://fakestoreapi.com/products/${Number(id)}`)
  .then(response => response.json())
  .then(data =>{ console.log(data), setDetail(data)});
},[Number(id)])






  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={[{ backgroundColor: "#F2F2F2", width: "100%", height: 300, justifyContent: "center", alignItems: "center", borderBottomEndRadius: "50%", borderBottomStartRadius: "50%" },]}>
          <Image source={{uri:detail.image}} style={{ height: 200, width: 200, }} />
        </View>
        <View style={{ position: "absolute", top: 10, left: 10 }}>
          <TouchableOpacity onPress={() => { route.back() }}>

            <AntDesign name="arrowleft" size={28} style={{}} />
          </TouchableOpacity>
        </View>




        <View>
          <Text style={{ marginLeft: 25 }}>
            {detail?.title?.slice(0,26)+" ..."}
          </Text>

        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "85%", marginHorizontal: "auto", marginTop: 25, marginBottom: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>

            <Text style={[{ fontSize: 16, fontWeight: "700" }]}>
              $ {detail.price}
            </Text>
            <Text style={[{ fontSize: 10, fontWeight: "900", color: "#D9D9D9" }]}>
              $ 66,000
            </Text>
          </View>
          <Text style={[{ fontSize: 13, fontWeight: "700", color: "black" }]}>
            Available in stock
          </Text>
        </View>





        <Text style={[{ fontSize: 17, fontWeight: "700", color: "black", marginLeft: 25 }]}>
          About
        </Text>


        <Text style={[{ fontSize: 13, fontWeight: "300", color: "black", marginLeft: 25, marginTop: 15, marginBottom: 12 }]}>
          {detail.description}
        </Text>

        <ScrollView horizontal={true} style={{ marginVertical: 12, marginLeft: 25 }}>
          <View style={[, { backgroundColor: "#C9C9C9", borderRadius: 10, height: 38, width: 38, justifyContent: "center", alignItems: "center", marginRight: 12 }]}>
            <Text>{detail?.rating?.count}</Text>
          </View>
          <View style={[, { backgroundColor: "#C9C9C9", borderRadius: 10, height: 38, width: 38, justifyContent: "center", alignItems: "center", marginRight: 12 }]}>
            <Text>{detail?.rating?.rate}</Text>
          </View>
          <View style={[, { backgroundColor: "#C9C9C9", borderRadius: 10, height: 38, width: 38, justifyContent: "center", alignItems: "center", marginRight: 12 }]}>
            <Text>35</Text>
          </View>
          <View style={[, { backgroundColor: "#C9C9C9", borderRadius: 10, height: 38, width: 38, justifyContent: "center", alignItems: "center", marginRight: 12 }]}>
            <Text>35</Text>
          </View>
          <View style={[, { backgroundColor: "#C9C9C9", borderRadius: 10, height: 38, width: 38, justifyContent: "center", alignItems: "center", marginRight: 12 }]}>
            <Text>35</Text>
          </View>
          <View style={[, { backgroundColor: "#C9C9C9", borderRadius: 10, height: 38, width: 38, justifyContent: "center", alignItems: "center", marginRight: 12 }]}>
            <Text>35</Text>
          </View>
          <View style={[, { backgroundColor: "#C9C9C9", borderRadius: 10, height: 38, width: 38, justifyContent: "center", alignItems: "center", marginRight: 12 }]}>
            <Text>35</Text>
          </View>


        </ScrollView>

        <TouchableOpacity  onPress={()=>{addToCart(detail)}} style={{ height: 38, width: "88%", backgroundColor: "#F16A26", justifyContent: "center", alignItems: "center", marginHorizontal: "auto", borderRadius: 14, marginTop: 19 }}>
          <Text style={{ fontSize: 15, color: "white" }}>
            But Now
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
  bord: {
    borderWidth: 2,
    borderColor: "red"
  },
  btxt: {
    fontSize: 20, fontWeight: "600"
  },
})