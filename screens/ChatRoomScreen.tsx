import React from "react";
import {FlatList, Text} from "react-native";

import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage/indes";

const ChatRoomScreen = () => {

    const route = useRoute();

    // console.log(route.params)

    return (
        <FlatList
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} /> }
        />
    )
}

export default ChatRoomScreen;