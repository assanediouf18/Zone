/**
 * Custom chat component for the app
 */

import { GiftedChat, IMessage } from "react-native-gifted-chat";

interface ZoneChatProps {
    messages: IMessage[],
    onSend: (messages: IMessage[]) => void
}

export default function ZoneChat(props: ZoneChatProps) {
    return (
        <GiftedChat messages={props.messages} onSend={props.onSend} />
    )
}