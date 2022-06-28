import { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../Utility/date";

function Form({ buttonName, onCancel, onSubmit, defaultValue }) {
  const [inputValues, setInputvalues] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValue ? getFormattedDate(defaultValue.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description : "",
      isValid: true,
    },
  });

  function inputChangeHandler(identifier, enterdvalue) {
    setInputvalues((currentValue) => {
      return {
        ...currentValue,
        [identifier]: { value: enterdvalue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount.value,
      date: new Date(inputValues.date.value),
      description: inputValues.description.value,
    };

    const isAmountvalid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isDateValid = expenseData.date.toString() !== "Invalid Date";
    const isDescriptionValid = expenseData.description.trim().length > 0;

    if (!isAmountvalid || !isDateValid || !isDescriptionValid) {
      //   Alert.alert("Invalid Input", "Please enter the correct value!!");
      setInputvalues((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: isAmountvalid },
          date: { value: curInputs.date.value, isValid: isDateValid },
          description: {
            value: curInputs.description.value,
            isValid: isDescriptionValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const isFormValid =
    !inputValues.amount.isValid ||
    !inputValues.date.isValid ||
    !inputValues.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.text}>Your Expense</Text>
      <View style={styles.rowInput}>
        <Input
          label="Date"
          invalid={!inputValues.date.isValid}
          style={styles.row}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date.value,
          }}
        />
        <Input
          label="Amount"
          invalid={!inputValues.amount.isValid}
          style={styles.row}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount.value,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputValues.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description.value,
        }}
      />
      {isFormValid && (
        <Text style={styles.errorText}>
          Invalid input- Please enter a correct values!!!
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <Button onPress={onCancel} mode="flat">
          Cancle
        </Button>
        <Button onPress={submitHandler}>{buttonName}</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  rowInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
    marginBottom: 15,
  },
  row: {
    flex: 1,
  },
  errorText: {
    color: "#f75e5e",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
});

export default Form;
