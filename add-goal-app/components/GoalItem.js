import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
            onPress={props.onDeleteGoal.bind(this, props.id)} 
            android_ripple={{color: 'purple'}}
            style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 7,
        backgroundColor: '#571edd',
        borderRadius: 7,
    },
    goalText: {
        color: 'white',
        padding: 10,
    },
    pressedItem: {
        opacity: 0.5
    }
})
