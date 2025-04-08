import { Image, StyleSheet, Animated, Platform, View, Text, ScrollView, SafeAreaView, TouchableOpacity, Pressable, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen() {
  const offers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [bg, setBg] = useState('#F2F2F2');
  const [data, setData] = useState([])

  const [expanded, setExpanded] = useState(false);
  const widthAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data) => { console.log(data), setData(data) })
  }, [])
  const toggleSearch = () => {
    if (expanded) {
      // collapse faster
      Animated.timing(widthAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      setExpanded(true);
      // expand faster
      Animated.timing(widthAnim, {
        toValue: 200,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };



  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView style={{}}>


        <View style={{
          position: "absolute",
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          backgroundColor: '#CFCFCF',
          borderRadius: 25,
          margin: 10,
          alignSelf: 'flex-end',
        }}>
          <TouchableOpacity onPress={toggleSearch}>
            <AntDesign name="search1" size={20} color="black" style={{ padding: 5 }} />
          </TouchableOpacity>

          <Animated.View style={{ width: widthAnim, overflow: 'hidden' }}>
            {expanded && (
              <TextInput
                placeholder="Search..."
                style={{
                  height: 42,
                  paddingHorizontal: 10,
                  fontSize: 14,
                }}
                autoFocus
              />
            )}
          </Animated.View>
        </View>



        <View>
          <Text style={[{}, styles.btxt]}>Hello Fola</Text>
          <Text style={{ fontSize: 13, marginTop: 3 }}> Let's start shopping!</Text>
        </View>


        <View style={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
        // you can replace with real data

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {offers.map((item, index) => (
              <View
                key={index}
                style={{
                  height: 120,
                  width: 250,
                  borderRadius: 20,
                  padding: 15,
                  backgroundColor: "#F17547",
                  position: "relative",
                  marginRight: 19,
                }}>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "700" }}>
                  20% OFF DURING THE
                </Text>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
                  WEEKEND
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "white",
                    width: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 5,
                    borderRadius: 13,
                    marginTop: 13,
                  }}>
                  <Text style={{ fontWeight: "600", color: "#F17547" }}>Get Now</Text>
                </TouchableOpacity>
                <Image
                  source={require('../../../assets/images/bag.png')}
                  style={{
                    width: 120,
                    height: 100,
                    position: "absolute",
                    right: 0,
                    top: 15,
                  }}
                />
              </View>
            ))}
          </ScrollView>

        </View>

        //2nd
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={[styles.btxt]}>Top Categories</Text>
          <Text style={{ color: "#F17547", fontSize: 15 }}>See All</Text>
        </View>

//3rd
        <View style={{ marginVertical: 20 }}>
          <ScrollView horizontal={true}>

            {offers.map((item, index) => (

              <Pressable
                onPressIn={() => setBg('#F17547')}
                onPressOut={() => setBg('#F2F2F2')}
                key={index}
                style={{
                  height: 64,
                  width: 64,
                  marginHorizontal: 10,
                  borderRadius: 10,
                  backgroundColor: bg,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={require('../../../assets/images/bag.png')}
                  style={{ width: 50, height: 50 }}
                />
              </Pressable>
            ))}

          </ScrollView>
        </View>

//4th
        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>


          <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap", gap: 15 }}>
            {data && data.map((item, index) => (

              <View style={[styles.bord, { height: 204, width: "47%", backgroundColor: "#F2F2F2", borderRadius: 14, position: "relative" }]}>

                <Image source={{ uri: item.image }} height={90} width={90} style={{ position: "absolute", top: "25%", left: "21%" }} resizeMode="cover" />
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      marginLeft: 10,
                      width: 70,
                      justifyContent: "center",
                      alignItems: "center",
                      paddingVertical: 4,
                      paddingHorizontal: 1,
                      borderRadius: 13,
                      marginTop: 10,
                    }}>
                    <Text style={{ fontWeight: "600", color: "black", fontSize: 12 }}>50% OFF</Text>
                  </TouchableOpacity>
                  <View style={[{ borderWidth: 2, borderColor: "#CFCFCF", height: 20, width: 20, position: "relative", right: 11, top: 3, borderRadius: "50%" }]}>

                    <AntDesign name="heart" size={10} color="#CFCFCF" style={{ position: "absolute", right: 3, top: 4 }} />
                  </View>




                </View>
                <Text style={{ fontSize: 17, fontWeight: "400", position: "absolute", bottom: 30, left: 10 }}>
                  {item.title.slice(0, 13)}
                </Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between", position: "relative" }}>

                  <Text style={{ fontSize: 18, fontWeight: "700", position: "absolute", top: 135, left: 10 }}>
                    ₹ {Number(item.price.toFixed(0)).toLocaleString()}

                  </Text>
                  <Text style={{ fontSize: 10, fontWeight: "700", position: "absolute", top: 140, left: 100, color: "#AFAFAF", textDecorationLine: "line-through" }}>
                    ₹ {item.price}
                  </Text>
                </View>
              </View>

            ))}






          </View>

        </View>



      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: "50%",
    backgroundColor: "#CFCFCF"
  },
  inputContainer: {
    height: 25,
    // marginLeft: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  bord: {
    borderWidth: 2,
    borderColor: "red"
  },
  btxt: {
    fontSize: 20, fontWeight: "600"
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
