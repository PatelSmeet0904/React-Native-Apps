import { Text, View, StyleSheet } from 'react-native'

function List({ data }) {
    return data.map((dataPoint) => (
        <View key={dataPoint} style={styles.container}>
            <Text style={styles.text}>{dataPoint}</Text>
        </View>
    ))
}

export default List;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 24,
        backgroundColor: '#e6b587',
        borderRadius: 8,
        marginVertical: 4
    },
    text: {
        margin: 4,
        fontSize: 14,
        textAlign: 'center'
    }
})