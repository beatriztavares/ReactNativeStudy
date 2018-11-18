import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class Form extends Component {
    state = {
        text: "",
        index: 0
    }

    textChangedHandler = (val) => {
        this.setState({
            text: val
        });
    }

    submitPressed = () => {
        if (this.state.text.trim() === ""){
            return;
        }
        this.setState(prevState => {
            return {
                index: prevState.index + 1
            };
        });
        this.props.onSubmit(this.state.text, this.state.index);
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="text"
                    value={this.state.text}
                    onChangeText={this.textChangedHandler} />

                <Button
                    style={styles.button}
                    title="Add"
                    onPress={this.submitPressed} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    input: {
        width: "70%",
    },
    button: {
        width: "30%",
    },
});