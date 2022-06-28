import { View, Text, StyleSheet } from "react-native";

function ExpensesSummary({ timePeriod, expenses }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{timePeriod}</Text>
      <Text style={styles.sum}>₹{expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#aeaef8",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 15,
  },
  period: {
    fontSize: 14,
    color: "#0a0aab",
  },
  sum: {
    fontSize: 16,
    color: "#0a0aab",
    fontWeight: "bold",
  },
});
