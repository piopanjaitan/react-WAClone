import React from "react";
import { ChatRoom } from "../../types";
import {Text, View, Image, TouchableWithoutFeedback} from "react-native";
import styles from "./style";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const navigation = useNavigation();

    const user = chatRoom.users[1];

    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: user.name,
        })
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>

                    <Image source={{ uri: user.imageUri}} style={styles.avatar} />

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>

                </View>
                <Text style={styles.time}>
                    {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                </Text>
                {/*<Text style={styles.time}>Yesterday</Text>*/}
            </View>
        </TouchableWithoutFeedback>




    )
};

export default ChatListItem;