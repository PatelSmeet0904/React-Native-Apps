import { StyleSheet, View, Text } from 'react-native'

function Guesslist({ roundNumber, guess }) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>#{roundNumber}</Text>
            <Text style={styles.text}>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default Guesslist

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        backgroundColor: '#edc534',
        padding: 8,
        marginVertical: 8
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})