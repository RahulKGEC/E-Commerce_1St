import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const index = () => {
  const navigate = useRouter()
  return (
    <View>
      <Text>index jiji </Text>
      <TouchableOpacity onPress={()=>navigate.navigate('/(drawer)/(tabs)')}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})