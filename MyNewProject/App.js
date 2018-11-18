/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Form from './src/components/Form';
import ListContainer from './src/components/List/ListContainer';
import ItemDetail from './src/components/List/ItemDetail';

export default class App extends Component {
    state = {
        list: [],
        selectedItem: null
    }

    addItem = (textInput, index) => {
        this.setState(prevState => {
            return {
                list: prevState.list.concat({
                    key: index, 
                    name: textInput,
                    image: {
                        uri: "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000qddE2MAI/592c2c7de4b0172057d24cca.jpg&w=620&h=400"
                    }
                })
            };
        })
    }

    deleteItem = () =>{
        this.setState(prevState => {
            return {
                list: prevState.list.filter(text => {
                    return text.key !== prevState.selectedItem.key;
                }),
                selectedItem: null
            };
        });
    }

    onItemSelected = (key) => {
        this.setState((prevState) => {
            return {
                selectedItem: prevState.list.find((item) => {
                    return item.key === key;
                })
            };
        });
    }

    closeModal = () => {
        this.setState({
            selectedItem: null
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ItemDetail selectedItem={this.state.selectedItem} onItemDeleted={this.deleteItem} onModalClosed={this.closeModal} />
                <Form onSubmit={this.addItem} />
                <ListContainer list={this.state.list} onItemSelected={this.onItemSelected} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingBottom: 60,
        paddingRight: 30,
        paddingLeft: 30, 
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    }
});
