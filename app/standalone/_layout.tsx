import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ title: "Login" ,headerShown:false}} />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
