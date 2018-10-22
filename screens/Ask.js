import React from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import apiService from '../Api/apiService';

export default class AskScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    static navigationOptions = {
        title: 'Ask',
    };

    _handlePostQuestion = () => {
        apiService.PostQuestion(this.state.text);
    }

    render() {
        return (

            <View style={styles.container}>
                <View>
                    <TextInput style={styles.textbox}
                        placeholder="What's in your mind?"
                        multiline={true}
                        onChangeText={(text) => this.setState({ text })} />
                </View>
                <View>
                    <Button
                        style={styles.askbutton}
                        onPress={this._handlePostQuestion}
                        title="Ask"
                        color="#841584"
                        accessibilityLabel="Ask your question"
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
    },
    textbox: {
        padding: 15,
        height: 100,
        borderColor: 'gray',
        borderWidth: 1
    },
    askbutton: {
        backgroundColor: "rgba(92, 99,216, 1)",
        borderWidth: 0,
        borderRadius: 5,
        height: 40,
        width: 80
    }
});
