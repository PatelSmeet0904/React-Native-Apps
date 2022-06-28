import { View, StyleSheet, Text } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({ expenses, expensePeriod, fallBackText }) {
  let content = <Text style={styles.text}>{fallBackText}</Text>;

  if (expenses.length > 0){
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary timePeriod={expensePeriod} expenses={expenses} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0aab",
    paddingBottom: 0,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    marginTop: 30,
  },
});
