import { Image, StyleSheet, Animated, Platform, View, Text, ScrollView, SafeAreaView, TouchableOpacity, Pressable, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';
import Header from '@/components/myComponent/Header';
import { DrawerActions } from '@react-navigation/native';

export const CartContext = createContext(null)



export default function HomeScreen() {
  const navigation = useNavigation()


  const drawerOpen = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }
  const { addToCart, wish,setCart,setWish, cart,addToWish, deleteFromCart,deleteFromWish} = useContext(CartContext)
  const offers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [bg, setBg] = useState(null);
  const [data, setData] = useState([])
  const [heartFill, setHeartFill] = useState(null)
  // const [wish, setWish] = useState<any>([])
  const router = useRouter()
  const [box, setBox] = useState<any>([
    {
      id: 1,
      title: "watch",
      image: "https://in.images.search.yahoo.com/images/view;_ylt=AwrKEb4XYfdnNJ4URhu9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzU3YTE0MzkwMDAzNjgyNTFkZmQ3MTYwNmE2ZWFhY2ExBGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimage%2Bwatch%26type%3DE210IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=1000&h=1000&imgurl=pngimg.com%2Fuploads%2Fwatches%2Fwatches_PNG9863.png&rurl=http%3A%2F%2Fpngimg.com%2Fdownload%2F9863&size=1065KB&p=image+watch&oid=57a1439000368251dfd71606a6eaaca1&fr2=piv-web&fr=mcafee&tt=watches+PNG+image&b=0&ni=21&no=2&ts=&tab=organic&sigr=epCm5Gq7McF1&sigb=ryHfxUOVO3rX&sigi=HSYxwnWYycw9&sigt=.D.eOL7s8Ql_&.crumb=U6NU9SILv66&fr=mcafee&fr2=piv-web&type=E210IN826G0",
      screen: "/(drawer)/profile",

    },
    {
      id: 2,
      title: "bag",
      image: "https://in.images.search.yahoo.com/images/view;_ylt=AwrKEb4XYfdnNJ4URhu9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzU3YTE0MzkwMDAzNjgyNTFkZmQ3MTYwNmE2ZWFhY2ExBGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimage%2Bwatch%26type%3DE210IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=1000&h=1000&imgurl=pngimg.com%2Fuploads%2Fwatches%2Fwatches_PNG9863.png&rurl=http%3A%2F%2Fpngimg.com%2Fdownload%2F9863&size=1065KB&p=image+watch&oid=57a1439000368251dfd71606a6eaaca1&fr2=piv-web&fr=mcafee&tt=watches+PNG+image&b=0&ni=21&no=2&ts=&tab=organic&sigr=epCm5Gq7McF1&sigb=ryHfxUOVO3rX&sigi=HSYxwnWYycw9&sigt=.D.eOL7s8Ql_&.crumb=U6NU9SILv66&fr=mcafee&fr2=piv-web&type=E210IN826G0",
      screen: "/(drawer)/(tabs)/home",

    },
    {
      id: 3,
      title: "shoe",
      image: "https://in.images.search.yahoo.com/images/view;_ylt=AwrKEb4XYfdnNJ4URhu9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzU3YTE0MzkwMDAzNjgyNTFkZmQ3MTYwNmE2ZWFhY2ExBGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimage%2Bwatch%26type%3DE210IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=1000&h=1000&imgurl=pngimg.com%2Fuploads%2Fwatches%2Fwatches_PNG9863.png&rurl=http%3A%2F%2Fpngimg.com%2Fdownload%2F9863&size=1065KB&p=image+watch&oid=57a1439000368251dfd71606a6eaaca1&fr2=piv-web&fr=mcafee&tt=watches+PNG+image&b=0&ni=21&no=2&ts=&tab=organic&sigr=epCm5Gq7McF1&sigb=ryHfxUOVO3rX&sigi=HSYxwnWYycw9&sigt=.D.eOL7s8Ql_&.crumb=U6NU9SILv66&fr=mcafee&fr2=piv-web&type=E210IN826G0",
      screen: "/(drawer)/(tabs)/heart",

    },
    {
      id: 4,
      title: "glass",
      image: "https://in.images.search.yahoo.com/images/view;_ylt=AwrKEb4XYfdnNJ4URhu9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzU3YTE0MzkwMDAzNjgyNTFkZmQ3MTYwNmE2ZWFhY2ExBGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimage%2Bwatch%26type%3DE210IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=1000&h=1000&imgurl=pngimg.com%2Fuploads%2Fwatches%2Fwatches_PNG9863.png&rurl=http%3A%2F%2Fpngimg.com%2Fdownload%2F9863&size=1065KB&p=image+watch&oid=57a1439000368251dfd71606a6eaaca1&fr2=piv-web&fr=mcafee&tt=watches+PNG+image&b=0&ni=21&no=2&ts=&tab=organic&sigr=epCm5Gq7McF1&sigb=ryHfxUOVO3rX&sigi=HSYxwnWYycw9&sigt=.D.eOL7s8Ql_&.crumb=U6NU9SILv66&fr=mcafee&fr2=piv-web&type=E210IN826G0",
      screen: "/(drawer)/(tabs)/cart",

    },
  ])


  const [expanded, setExpanded] = useState(false);
  const widthAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data) => { setData(data) })
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


  // const drawNavigation = useDrawerNavigation()
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView style={{}}>

        <Header onPress={drawerOpen} />
        {/* <View style={{
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
        </View>  */}



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

            {box.map((item: any, index: any) => (



              <Pressable
                onPress={() => router.push(item.screen)}
                onPressIn={() => setBg(item?.id)}
                onPressOut={() => setBg(null)}
                key={item.id}
                style={{
                  height: 64,
                  width: 64,
                  marginHorizontal: 10,
                  borderRadius: 10,
                  backgroundColor: bg == item?.id ? '#F17547' : '#F2F2F2',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={{ uri: "https://tse1.mm.bing.net/th?id=OIP.tiFhZ6EMukg0B6lm2su47gHaLt&pid=Api&P=0&h=180" }}
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

              <TouchableOpacity style={[{ height: 204, width: "47%", backgroundColor: "#F2F2F2", borderRadius: 14, position: "relative" }]} onPress={() => { router.push(`/(drawer)/(tabs)/home?id=${item.id}`) }}>
                {/* <View > */}

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
                  <View style={[{ borderWidth: 2, borderColor: "#CFCFCF", height: 30, width: 30, position: "relative", right: 11, top: 3, borderRadius: "50%" }]}>
                    {wish?.some((ele)=> ele.id === item.id)?
                      <AntDesign name="heart" size={20} color="red" style={{ position: "absolute", right: 3, top: 4 }} onPress={() => deleteFromWish(item?.id)} />
                      :
                      <AntDesign name="hearto" size={20} color="#CFCFCF" style={{ position: "absolute", right: 3, top: 4 }} onPress={() => addToWish(item)} />

                    }
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
                {/* </View> */}
              </TouchableOpacity>

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
