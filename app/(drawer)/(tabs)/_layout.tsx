import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MyContext from '@/components/myComponent/MyContext';
// import { Evillcons } from '@expo/vector-icons';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <MyContext>

    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) =>  <IconSymbol name="house.fill" size={28}  color={color} />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="heart"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <AntDesign size={28} name="hearto" color={color} />,
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          // title: 'Cart',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <AntDesign size={28} name="shoppingcart" color={color} />,
        }}
      />
    </Tabs>
    </MyContext>
  );
}
