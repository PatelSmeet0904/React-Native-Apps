import { Image, Text, View, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton'

function GameOverScreen({ totalRound, userNumber, onStartNewGame }) {

    const { width, height } = useWindowDimensions()
    let imgSize = 300

    if (width < 380 || height < 450) {
        imgSize = 200
    }

    const imageStyle = {
        width: imgSize,
        height: imgSize,
        borderRadius: imgSize / 2
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>Game Over!</Title>
                <Image style={[styles.img, imageStyle]} source={require('../assets/images/success.png')} />
                <Text style={styles.summaryText}>Your Phone needed <Text style={styles.highlight}>{totalRound}</Text> rounds to guess the  number <Text style={styles.highlight}>{userNumber}</Text></Text>
                <View style={styles.button}>
                    <PrimaryButton buttonHandler={onStartNewGame}>Start New Game</PrimaryButton>
                </View>
            </View>
        </ScrollView>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    img: {
        // width: 300,
        // height: 300,
        // borderRadius: 150,
        borderWidth: 3,
        overflow: 'hidden',
        borderColor: 'black',
        margin: 30
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10
    },
    highlight: {
        fontWeight: 'bold',
        color: "#7a0172"
    },
    button: {
        padding: 6
    }
})