import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "My Zone",
            title: "My Zone",
          }}
        />
        <Drawer.Screen
          name="add-photo"
          options={{
            headerShown: false
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
