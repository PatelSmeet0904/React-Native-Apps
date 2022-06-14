import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

function GoalInput(props) {

    const [inputText, setInputText] = useState('')

    function inputHandler(text) {
        setInputText(text)
    }

    function addGoalHandler() {
        props.onAddGoal(inputText)
        setInputText('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.img} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.textInput} placeholder='Your goal !!' onChangeText={inputHandler}
                    value={inputText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#e9acff' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancle' onPress={props.onCancle} color='#fe60ec' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        backgroundColor: '#520185'
    },
    textInput: {
        padding: 10,
        width: '80%',
        borderWidth: 1,
        borderColor: '#e5c0e8',
        backgroundColor: '#e5c0e8',
        borderRadius: 6,
        color: '#340154'
    },
    buttonContainer: {
        margin: 8,
        // borderWidth: 1,
        flexDirection: 'row',
    },
    button: {
        margin: 8,
        width: '35%',
        padding: 7,
        // borderWidth: 1,
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 10,
    }
})
