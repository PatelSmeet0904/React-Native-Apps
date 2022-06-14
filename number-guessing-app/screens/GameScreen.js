import { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Alert, FlatList, Dimensions, useWindowDimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import Guesslist from '../components/GuessList';

let minBoundary = 1
let maxBoundary = 100

function generateRandomNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min

    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude)
    } else {
        return randomNumber
    }
}

function GameScreen({ userGuess, onGameOver }) {

    const initialGuess = generateRandomNumber(1, 100, userGuess)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])
    const { width, height } = useWindowDimensions()

    useEffect(() => {
        if (currentGuess === userGuess) {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userGuess, onGameOver])

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])

    function nextGuesshandler(direction) {

        if ((direction === 'lower' && currentGuess < userGuess) ||
            (direction === 'higher' && currentGuess > userGuess)) {
            Alert.alert("Don't lie!", "You know this that's wrong hint...", [{ text: 'Sorry!!', style: 'cancel' }])
            return
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }

        // console.log(minBoundary, maxBoundary);
        const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRandomNumber)
        setGuessRounds(previousGuesses => [newRandomNumber, ...previousGuesses])
    }

    const listLength = guessRounds.length

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Text style={styles.text}>Higher or Lower</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <PrimaryButton buttonHandler={nextGuesshandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" color="white" size={24} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton buttonHandler={nextGuesshandler.bind(this, 'higher')}>
                            <Ionicons name="md-add" color="white" size={24} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    );

    if (width > 500) {
        content = (
            <>
                <View style={styles.buttonContainerWide}>
                    <View style={styles.button}>
                        <PrimaryButton buttonHandler={nextGuesshandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" color="white" size={24} />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.button}>
                        <PrimaryButton buttonHandler={nextGuesshandler.bind(this, 'higher')}>
                            <Ionicons name="md-add" color="white" size={24} />
                        </PrimaryButton>
                    </View>
                </View>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Title>Opponent's Guess</Title>
            </View>
            {content}
            <View style={styles.listContainer}>
                {/*guessRounds.map((guessRound) => <Text key={guessRound}>{guessRound}</Text>)*/}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) =>
                        <Guesslist roundNumber={listLength - itemData.index} guess={itemData.item} />
                    }
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

export default GameScreen;

const deviceWidth = Dimensions.get('window').width;
// padding: deviceWidth < 350 ? 12 : 24

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: deviceWidth < 350 ? 12 : 24,
        marginTop: 50,
    },
    titleContainer: {
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        color: '#fdc91f',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    buttonContainerWide: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})