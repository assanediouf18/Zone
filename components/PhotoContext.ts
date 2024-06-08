import { CameraCapturedPicture } from "expo-camera";
import { createContext } from "react";

export const PhotoContext = createContext<CameraCapturedPicture[]>([]);