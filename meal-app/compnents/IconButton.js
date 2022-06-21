import { Pressable,StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

function IconButton({name, color, onPress }) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.buttonPressed}>
            <Ionicons color={color} name={name} size={24}  />
        </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.7
    }
})