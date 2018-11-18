import React from 'react';
import { FlatList, StyleSheet } from 'react-native'

import ListItem from "./ListItem";

const ListContainer = (props) => {
    return (
        <FlatList 
            style={styles.listContainer} 
            data={props.list}
            renderItem={(info) => (
                <ListItem 
                    key={info.item.key} 
                    text={info.item.name} 
                    image={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}/>
            )} />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default ListContainer;