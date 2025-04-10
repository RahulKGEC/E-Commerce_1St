import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { AntDesign, Entypo } from '@expo/vector-icons'
import CartItem from '@/components/myComponent/CartItem'
import { CartContext } from '.'
const cart = () => {




  const { cart, wish, setCart, setWish, addToCart, addToWish, deleteFromCart, deleteFromWish } = useContext(CartContext)

  const [count, setCount] = useState(1)

  function updateQTY(id, state) {
    const updatedCart = cart.map((ele) => {
      if (ele.id === id) {
        if (state) {
          return { ...ele, qty: (ele.qty ?? 1) + 1 }
        } else {
          if (ele.qty ?? 1 === 1) {


            return { ...ele, qty: 1 }
          } else {
            return { ...ele, qty: (ele.qty ?? 1) - 1 }

          }
        }
      } else {
        return ele;
      }
    })
    setCart(updatedCart)
  }
  console.log(cart[0].qty)

  return (
    <SafeAreaView>
      <ScrollView style={[
        // styles.bord, 
        { display: "flex" }]}>

//1st
        <View style={{ flex: 1, marginTop: 10, justifyContent: "space-between" }}>
          <View style={[
            // styles.bord,
             { flex: 1 }]}>
            <View>




              {cart.map((item: any, index) => (



                <View key={index} style={[{ height: 100, width: "85%", marginTop: 10, marginHorizontal: "auto", flexDirection: "row", gap: 10, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: "#F8F8F8", borderRadius: 10 }]}>


                  <View style={[{ height: 70, width: 70, marginVertical: "auto", justifyContent: "center", alignItems: "center", backgroundColor: "#EDD3D4", borderRadius: 10 }]}>
                    <Image source={{ uri: item.image }} style={{ height: 50, width: 50, }} />
                  </View>

                  <View style={[{ height: 70, width: 100, marginVertical: "auto", marginLeft: 13, gap: 10, justifyContent: "center", alignItems: "flex-start" }]}>
                    <Text style={{ fontSize: 12 }}>
                      {item.title.slice(0, 19) + "..."}
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: "800", alignSelf: "flex-start" }}>
                      $ {item.price}
                    </Text>
                  </View>
                  <View style={[{ height: 70, width: 70, marginVertical: "auto", justifyContent: "center", alignItems: "center", gap: 10 }]}>

                    <Text style={{ fontSize: 11 }}>
                      Size:35
                    </Text>
                    <View style={[{ height: 30, width: 55, borderRadius: 7, flexDirection: "row", gap: 5, alignItems: "center", justifyContent: "center" }]}>


                      <Entypo name="plus" style={{ fontSize: 22, color: "#000" }} onPress={() => updateQTY(item.id, 1)} />

                      <Text style={{ fontSize: 11 }}>
                        {item?.qty ?? 1}
                      </Text>

                      <Entypo name="minus" style={{ fontSize: 22, color: "#000" }} onPress={() => updateQTY(item.id, 0)} />
                    </View>
                  </View>
                </View>
              ))}
            </View>
            {/* <CartItem />
            <CartItem />
            <CartItem /> */}

          </View>


          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "85%", marginHorizontal: "auto", marginTop: 40, marginBottom: 10 }}>
            <Text style={[{ fontSize: 20, fontWeight: "700" }]}>
              Total
            </Text>
            <Text style={[{ fontSize: 17, fontWeight: "700", color: "#F17547" }]}>
              $ {cart.reduce((accu, item) => accu + Number(Number(item.price) * Number(item.qty ?? 1)), 0).toFixed(2)}
            </Text>
          </View>

          <View>

            <TouchableOpacity style={{ height: 38, width: "85%", backgroundColor: "#F16A26", justifyContent: "center", alignItems: "center", marginHorizontal: "auto", borderRadius: 14, }}>
              <Text style={{ fontSize: 15, color: "white" }}>
                But Now
              </Text>
            </TouchableOpacity>
          </View>




        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default cart

const styles = StyleSheet.create({
  bord: {
    borderWidth: 2,
    borderColor: "red"
  },
  btxt: {
    fontSize: 20, fontWeight: "600"
  },
})