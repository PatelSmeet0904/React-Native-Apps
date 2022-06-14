import { Text, StyleSheet, View } from 'react-native'

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#ffc400',
        borderRadius: 8,
        margin: 30,
    },
    number: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#ffc400',
        padding: 15,
        textAlign: 'center',
    }
})