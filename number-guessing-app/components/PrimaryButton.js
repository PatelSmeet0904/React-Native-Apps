import { StyleSheet, View, Text, Pressable } from 'react-native';

function PrimaryButton({ children, buttonHandler }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                onPress={buttonHandler}
                android_ripple={{ color: '#971b3e' }}
            >
                <Text style={styles.button}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 5,
        elevation: 5,
        borderRadius: 25,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#710d35',
        padding: 10
    },
    button: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    pressed: {
        opacity: 0.75
    }
})