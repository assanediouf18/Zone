import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }}/>
        <Stack.Screen name="add-photo" options={{ headerShown: false }}/>
        <Stack.Screen name="+not-found" />
      </Stack>
    </SafeAreaProvider>
  );
}
