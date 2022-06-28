import { View, StyleSheet, TextInput, Text } from "react-native";

function Input({ label, invalid, style, textInputConfig }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.errorBox);
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, invalid && styles.errorText]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    marginHorizontal: 4,
  },
  text: {
    color: "#af90fa",
    marginBottom: 4,
  },
  errorText: {
    color: "#f75e5e",
  },
  errorBox: {
    backgroundColor: "#e77e7e",
  },
  input: {
    backgroundColor: "#aeaef8",
    color: "#0a0aab",
    fontSize: 18,
    borderRadius: 6,
    padding: 8,
  },
  inputMultiline: {
    minHeight: 100,
  },
});
