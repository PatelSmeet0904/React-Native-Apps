import {View , StyleSheet} from 'react-native'

function Card({children}){
    return <View style={styles.inputContainer}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
    
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
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
    
});