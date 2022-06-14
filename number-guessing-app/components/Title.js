import { Text, StyleSheet, Platform } from 'react-native'

function Title({children}){
    return <Text style={styles.text}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: 'white',
        padding: 10,
        textAlign: 'center',
        color: 'white',
        maxWidth: '80%', // it will apply when the 300 is > 80% of screen
        width: 300,
        // justifyContent: 'center',
        // alignItems: 'center'
                 
    }
})