import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = props => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem} >
            <Image 
                resizeMode="contain" 
                style={styles.imageItem} 
                source={props.image} />
            <Text style={styles.textItem}>{props.text}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        margin: 5,
        backgroundColor: "#FFFF77",
        flexDirection: "row",
        alignItems: "center",
    },
    imageItem: {
        margin: 8,
        width: 60, 
        height:60
    },
    textItem: {
        fontSize: 20
    }
});

export default listItem;
