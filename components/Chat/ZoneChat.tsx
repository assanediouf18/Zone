/**
 * Custom chat component for the app
 */

import { ComposerProps, GiftedChat, IMessage } from "react-native-gifted-chat";
import ChatActions from "./ChatActions";
import { useState } from "react";
import ChatComposer from "./ChatComposer";

interface ZoneChatProps {
    messages: IMessage[],
    onSend: (messages: IMessage[]) => void
}

export default function ZoneChat(props: ZoneChatProps) {
    // The idea here  is to show custom buttons to add a picture
    // or open the chat composer
    // I made this choice because I want to encourage users to share photos instead
    // of writing messages
    const [showComposer, setShowComposer] = useState<boolean>(false);

    return (
        <GiftedChat 
            messages={props.messages} 
            onSend={(messages) => {
                setShowComposer(false);
                props.onSend(messages);
            }} 
            renderActions={() => <ChatActions 
                show={!showComposer} 
                visibilityToogler={() => {setShowComposer(true)}}
                {...props} />}
            renderComposer={(props: ComposerProps) => <ChatComposer 
                show={showComposer} 
                composerProps={props} />}
            />
    )
}