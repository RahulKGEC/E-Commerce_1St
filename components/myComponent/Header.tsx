import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const Header = ({onPress}:any) => {



    
  return (
    <View>
      <View style={{flexDirection:'row', justifyContent:"space-between" , marginHorizontal:15,marginVertical:15}}>
       
       <View style={{height:35,width: 35, alignItems:"center",justifyContent:"center",borderRadius:"50%",backgroundColor:"#C9C9C9"}}>

        <Ionicons name="menu" size={26} onPress={onPress}/>
       </View>
       <View style={{height:35,width: 35, alignItems:"center",justifyContent:"center",borderRadius:"50%",backgroundColor:"#C9C9C9"}}>
        <FontAwesome name="search" size={24}/>
       </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})