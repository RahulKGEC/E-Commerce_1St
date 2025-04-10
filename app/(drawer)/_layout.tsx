import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{
      headerShown:false
    }}>
      <Drawer.Screen
        name="(tabs)"
        options={{ title: 'Main App' }}
      />
      <Drawer.Screen
        name="profile"
        options={{ title: 'Profile' }}
      />
    </Drawer>
  );
}