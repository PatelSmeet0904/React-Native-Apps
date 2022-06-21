import { Text, View, StyleSheet } from 'react-native'

function Subtitle({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 24,
        borderBottomColor: '#d3a071',
        borderBottomWidth: 2
    },
    text: {
        color: '#d3a071',
        margin: 4,
        fontSize: 18,
        fontWeight: 'bold'
    }
})