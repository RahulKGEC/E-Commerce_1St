import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(drawer)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="standalone"
        options={{ title: 'Login' }}
      />
    </Stack>
  );
}