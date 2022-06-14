import { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Alert, useWindowDimensions, ScrollView, KeyboardAvoidingView } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import Card from '../components/Card';

function StartGameScreen({ onConfirmNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('')
    const { width, height } = useWindowDimensions()

    function inputNumberHandler(enterdText) {
        setEnteredNumber(enterdText)
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const num = parseInt(enteredNumber)

        if (isNaN(num) || num <= 0 || num > 99) {
            Alert.alert(
                'Invalid Input!!',
                'Input should be a number between 1 to 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
        }

        onConfirmNumber(num)
    }

    const marginTop = height < 450 ? 30 : 100

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, { marginTop: marginTop }]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <Text style={styles.text}>Enter a Number</Text>
                        <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' value={enteredNumber}
                            onChangeText={inputNumberHandler} />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <PrimaryButton buttonHandler={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.button}>
                                <PrimaryButton buttonHandler={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        // marginTop:100
    },
    text: {
        fontSize: 24,
        color: '#fdc91f'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 25,
        padding: 20,
        backgroundColor: '#4d0116',
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.75,
        shadowRadius: 5,
    },
    numberInput: {
        width: 60,
        height: 60,
        borderBottomColor: '#ffc400',
        borderBottomWidth: 3,
        color: '#ffc400',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1
    }
});