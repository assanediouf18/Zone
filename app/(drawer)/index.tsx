import ZoneChat from "@/components/ZoneChat";
import { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

export default function Index() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ZoneChat messages={messages} onSend={messages => onSend(messages)} />
    </View>
  );
}
