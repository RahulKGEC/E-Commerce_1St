import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { CartContext } from "@/app/(drawer)/(tabs)";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyContext = ({ children }: any) => {
  const [wish, setWish] = useState<any>([]);
  const [cart, setCart] = useState<any>([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const cartData: any = await AsyncStorage.getItem("cart");

        const wishData: any = await AsyncStorage.getItem("wishData");
        // console.log("><><><><><><><", wishData);
        if (cartData.length > 0 && cart.length === 0)
          setCart(JSON.parse(cartData));
        if (wishData.length > 0 && wish.length === 0)
          setWish(JSON.parse(wishData));
      } catch (e) {
        console.log("Error loading data:", e);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const cartBaba = async () => {
      await AsyncStorage.setItem("cart", JSON.stringify(cart));
      await AsyncStorage.setItem("wishData", JSON.stringify(wish));
    };
    cartBaba();
  }, [cart, wish]);

  // useEffect(() => {
  //   const wishBaba = async () => {
  //     console.log(">>>>>>>>>>>>>>>>", wish);
  //      await AsyncStorage.setItem("wishData", JSON.stringify(wish));
  //   };
  //   wishBaba();
  // }, [wish]);

  const addToCart = (newItem: any) => {
    const existing = cart.find((ele: any) => ele.id === newItem.id);
    if (existing) {
      const updatedCart: any = cart.map((ele: any) =>
        ele.id === newItem.id ? newItem : ele
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const deleteFromCart = (id1: any) => {
    const filteredArray = cart.filter((ele: any) => ele.id !== id1);
    setCart(filteredArray);
  };

  const addToWish = (newItem: any) => {
    setWish([...wish, newItem]);
  };

  const deleteFromWish = (id1: any) => {
    const filteredArray = wish.filter((ele: any) => ele.id !== id1);
    setWish(filteredArray);
  };
  // const removeFromStorage = (id1) => {
  //   await AsyncStorage.removeItem("username");
  //   console.log("Removed");
  // };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        deleteFromCart,
        addToWish,
        deleteFromWish,
        cart,
        wish,
        setCart,
        setWish,
        // removeFromStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default MyContext;

const styles = StyleSheet.create({});



















// import { StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import { CartContext } from '@/app/(drawer)/(tabs)'

// const MyContext = ({ children }) => {

//     const [wish, setWish] = useState([])
//     const [cart, setCart] = useState([])

//     const addToCart = (newItem) => {
//         const existing = cart.find((ele) => ele.id === newItem.id);

//         if (existing) {
//           const updatedCart = cart.map((ele) => {
//             if (ele.id === newItem.id) {
//               return newItem; // or { ...ele, qty: ele.qty + 1 } if you want to increase
//             } else {
//               return ele;
//             }
//           });
//           setCart(updatedCart);
//         } else {
//           setCart([...cart, newItem]);
//         }
//       };

//     const deleteFromCart = (id1) => {
//         const filteredArray = cart.filter((ele) => ele.id !== id1);
//         setCart(filteredArray);
//     };

//     const addToWish = (newItem) => {
//         setWish([...wish, newItem]);
//     };

//     const deleteFromWish = (id1) => {
//         const filteredArray = wish.filter((ele) => ele.id !== id1);
//         setWish(filteredArray);
//     };

//     return (
//         <CartContext.Provider value={{ addToCart, deleteFromCart, addToWish, deleteFromWish, cart, wish, setCart, setWish }}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export default MyContext

// const styles = StyleSheet.create({})
