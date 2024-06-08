import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { CameraCapturedPicture, CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddPhoto() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  let camera = useRef<CameraView>();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function takePicture() {
    camera.current?.takePictureAsync().then((response: CameraCapturedPicture | undefined) => {
      if(response) {
        console.log(response);
      }
    })
  }

  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <CameraView style={styles.camera} facing={facing as CameraType} ref={camera}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button]} onPress={takePicture}>
            <Ionicons
              name="camera"
              size={64}
              color={"white"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {transform: [{scale: 1/2}]}]} onPress={toggleCameraFacing}>
            <MaterialIcons
              name={
                Platform.OS === "ios"
                  ? "flip-camera-ios"
                  : "flip-camera-android"
              }
              size={64}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    margin: 64,
    alignItems: "center"
  },
  button: {
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
