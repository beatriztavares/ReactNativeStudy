import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const ItemDetail = (props) => {
    let modalContent = null;

    if(props.selectedItem){
        modalContent = (
            <View>
                <Image source={props.selectedItem.image} style={styles.imageStyle} />
                <Text style={styles.nameStyle}>{props.selectedItem.name}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.onModalClosed} transparent="true" visible={props.selectedItem !== null} animationType="fade" >
            <View style={styles.modalContainer}>
                {modalContent}
                <View style={styles.buttonsView}>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted} />
                    <Button title="Close" onPress={props.onModalClosed} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 40, 
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center"
    },
    imageStyle: {
        height: 200
    },
    nameStyle: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28,
        margin: 10
    }
});

export default ItemDetail;