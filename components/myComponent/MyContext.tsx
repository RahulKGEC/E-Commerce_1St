import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CartContext } from '@/app/(drawer)/(tabs)'

const MyContext = ({ children }) => {

    const [wish, setWish] = useState([])
    const [cart, setCart] = useState([])



    const addToCart = (newItem) => {
        const existing = cart.find((ele) => ele.id === newItem.id);
      
        if (existing) {
          const updatedCart = cart.map((ele) => {
            if (ele.id === newItem.id) {
              return newItem; // or { ...ele, qty: ele.qty + 1 } if you want to increase
            } else {
              return ele;
            }
          });
          setCart(updatedCart);
        } else {
          setCart([...cart, newItem]);
        }
      };
      

    const deleteFromCart = (id1) => {
        const filteredArray = cart.filter((ele) => ele.id !== id1);
        setCart(filteredArray);
    };

    const addToWish = (newItem) => {
        setWish([...wish, newItem]);
    };

    const deleteFromWish = (id1) => {
        const filteredArray = wish.filter((ele) => ele.id !== id1);
        setWish(filteredArray);
    };

    return (
        <CartContext.Provider value={{ addToCart, deleteFromCart, addToWish, deleteFromWish, cart, wish, setCart, setWish }}>
            {children}
        </CartContext.Provider>
    )
}

export default MyContext

const styles = StyleSheet.create({})