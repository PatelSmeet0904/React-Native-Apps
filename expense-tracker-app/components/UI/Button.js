import { Pressable, View, Text, StyleSheet } from "react-native";

function Button({ children, mode, onPress }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flatButton]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    borderRadius: 4,
    padding: 12,
    minWidth: 150,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  flatButton: {
    backgroundColor: "transparent",
  },
  flatText: {
    color: "#bdbdf6",
  },
  pressed: {
    opacity: 0.75,
    borderRadius: 4,
  },
});
