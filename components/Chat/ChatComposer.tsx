import { Composer, ComposerProps } from "react-native-gifted-chat"

export interface ChatComposerProps {
    show: boolean,
    composerProps: ComposerProps
}

export default function ChatComposer(props: ChatComposerProps) {
    return props.show && <Composer {...props.composerProps} />
}