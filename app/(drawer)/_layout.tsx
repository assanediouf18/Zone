import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { useState } from "react";
import { CameraCapturedPicture } from "expo-camera";
import { PhotoContext } from "@/components/PhotoContext";

export default function Layout() {
  // The idea is to use a context here to keep the infos about
  // the pictures selected by the user
  const [pictures, setPictures] = useState<CameraCapturedPicture[]>([]);
  return (
    <PhotoContext.Provider value={pictures}>
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
                headerShown: false,
              }}
            />
          </Drawer>
        </GestureHandlerRootView>
    </PhotoContext.Provider>
  );
}
