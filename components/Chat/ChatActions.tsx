import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ChatActionsProps {
    show: boolean;
    visibilityToogler: () => void
}

export default function ChatActions(props: ChatActionsProps) {
    return props.show && (
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
            <Ionicons name="add" size={32} />
            <Link href={"add-photo"}>
                <Ionicons name="camera" size={32} />
            </Link>
            <TouchableOpacity onPress={() => props.visibilityToogler()}>
                <Ionicons name="chatbox" size={32} />
            </TouchableOpacity>
        </View>
    )
}