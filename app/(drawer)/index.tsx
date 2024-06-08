import ZoneChat from "@/components/Chat/ZoneChat";
import { PhotoContext } from "@/components/PhotoContext";
import { useCallback, useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

/**
 * 
 * Yes, the home page is a chat page ! Why ?
 * 
 * The idea of the app is that users can send pictures in groups
 * There are 2 kinds of groups:
 *  - public group: there is only one and it is composed of the
 *    friends of the user. When the user posts a new public photo,
 *    or when their friends does, those pics appear in the public chat
 *  - private rooms: the user can create private rooms with some of his/her friends.
 *    All the pictures shared here (and messages) are only available to the members
 *    of the group.
 */
export default function Index() {
  // this represents the state of the app in this demo
  const [messages, setMessages] = useState<IMessage[]>([]);
  const pictures = useContext(PhotoContext);

  // Getting dummy data
  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: "Just a picture to try",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        image: "https://images.pexels.com/photos/23733220/pexels-photo-23733220/free-photo-of-lumineux-leger-noir-et-blanc-ville.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://randomuser.me/api/portraits/women/4.jpg",
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
