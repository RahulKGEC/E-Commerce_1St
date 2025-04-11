import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { CartContext } from ".";
import { Entypo } from "@expo/vector-icons";

const heart = () => {
  const { wish, setWish, deleteFromWish, removeFromStorage } =
    useContext(CartContext);
  function updateQTY(id, state) {
    console.log("function id",id)
    const updatedWish = wish.map((ele) => {
      if (ele.id === id) {
        if (state) {
          return { ...ele, qty: (ele.qty ?? 1) + 1 };
        } else {
          if (ele.qty ?? 1 === 1) {
            deleteFromWish(id);
          } else {
            return { ...ele, qty: (ele.qty ?? 1) - 1 };
          }
        }
      } else {
        return ele;
      }
    });
    setWish(updatedWish);
  }
  return (
    <ScrollView>
      <View style={{ flex: 1, marginTop: 10, justifyContent: "space-between" }}>
        <View style={[styles.bord, { flex: 1 }]}>
          <View>
            {wish.length &&
              wish.map((item: any, index) => (
                <View
                  key={index}
                  style={[
                    {
                      height: 100,
                      width: "85%",
                      marginTop: 10,
                      marginHorizontal: "auto",
                      flexDirection: "row",
                      gap: 10,
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      backgroundColor: "#F8F8F8",
                      borderRadius: 10,
                    },
                  ]}
                >
                  <View
                    style={[
                      {
                        height: 70,
                        width: 70,
                        marginVertical: "auto",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#EDD3D4",
                        borderRadius: 10,
                      },
                    ]}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={{ height: 50, width: 50 }}
                    />
                  </View>

                  <View
                    style={[
                      {
                        height: 70,
                        width: 100,
                        marginVertical: "auto",
                        marginLeft: 13,
                        gap: 10,
                        justifyContent: "center",
                        alignItems: "flex-start",
                      },
                    ]}
                  >
                    <Text style={{ fontSize: 12 }}>
                      {item.title.slice(0, 19) + "..."}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "800",
                        alignSelf: "flex-start",
                      }}
                    >
                      $ {item.price}
                    </Text>
                  </View>
                  <View
                    style={[
                      {
                        height: 70,
                        width: 70,
                        marginVertical: "auto",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                      },
                    ]}
                  >
                    <Text style={{ fontSize: 11 }}>Size:35</Text>
                    <View
                      style={[
                        {
                          height: 30,
                          width: 55,
                          borderRadius: 7,
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      ]}
                    >
                      <Entypo
                        name="plus"
                        style={{ fontSize: 22, color: "#000" }}
                        onPress={() => updateQTY(item?.id, 1)}
                      />

                      <Text style={{ fontSize: 11 }}>{item?.qty ?? 1}</Text>

                      <Entypo
                        name="minus"
                        style={{ fontSize: 22, color: "#000" }}
                        onPress={() =>{ updateQTY(item?.id, 0) ,console.log("heart minus",item.id)}}
                      />
                    </View>
                  </View>
                </View>
              ))}
          </View>
          {/* <CartItem />
            <CartItem />
            <CartItem /> */}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
            marginHorizontal: "auto",
            marginTop: 40,
            marginBottom: 10,
          }}
        >
          <Text style={[{ fontSize: 20, fontWeight: "700" }]}>Total</Text>
          <Text style={[{ fontSize: 17, fontWeight: "700", color: "#F17547" }]}>
            ${" "}
            {wish
              .reduce(
                (accu, item) =>
                  accu + Number(Number(item.price) * Number(item.qty ?? 1)),
                0
              )
              .toFixed(2)}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              height: 38,
              width: "85%",
              backgroundColor: "#F16A26",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: "auto",
              borderRadius: 14,
            }}
          >
            <Text style={{ fontSize: 15, color: "white" }}>But Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default heart;

const styles = StyleSheet.create({});
