import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { getFormattedDate } from "../../Utility/date";

function ExpenseItem({ id, description, date, amount }) {
  const navigation = useNavigation();

  function expesePresshandler() {
    navigation.navigate("ManageExpenses", {
      expenseId: id
    });
  }

  return (
    <Pressable
      onPress={expesePresshandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.textColor, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textColor}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.amount]}>₹{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    marginHorizontal: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0505ed",
    padding: 10,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textColor: {
    color: "white",
  },
  description: {
    fontSize: 15,
    fontWeight: "bold",
  },
  amountContainer: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    minWidth: 100,
    alignItems: "center",
  },
  amount: {
    fontSize: 12,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
