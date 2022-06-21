import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native'
import {useNavigation} from '@react-navigation/native'

function MealItem({ id, title, img, duration, complexity, affordability }) {

    const navigation = useNavigation()

    function selectedMealhandler(){
        navigation.navigate('MealDetails', {mealID: id})
    }
    
    return (
        <View style={styles.container}>
            <Pressable 
            android_ripple={{ color: 'grey' }} 
            style={({ pressed }) => pressed ? styles.buttonPressed : null}
            onPress={selectedMealhandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: img }} style={styles.img} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.details}>{duration}m</Text>
                        <Text style={styles.details}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.details}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    container:{
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 8,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.25,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    img: {
        height: 180,
        width: '100%',
    },
    title: {
        textAlign: 'center',
        padding: 8,
        fontSize: 18,
        fontWeight: 'bold'
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
    details: {
        fontSize: 11,
        marginHorizontal: 4
    }
})