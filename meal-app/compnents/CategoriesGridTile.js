import { Pressable, View, Text, StyleSheet } from 'react-native'

function CategoriesGridTile({ title, color, onPress }) {
    return (
        <View style={styles.tile}>
            <Pressable android_ripple={{ color: 'grey' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={onPress}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoriesGridTile

const styles = StyleSheet.create({
    tile: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 8,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 8
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.75
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})