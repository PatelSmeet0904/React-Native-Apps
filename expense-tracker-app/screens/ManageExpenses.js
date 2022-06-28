import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import IconButton from "../components/UI/IconButton";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import Form from "../components/User Input/Form";
import { ExpensesContext } from "../store/expense-context";
import { deleteExpense, storeExpenses, updateExpense } from "../Utility/store";

function ManageExpenses({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  const edittingExpenseId = route.params?.expenseId;
  const isEditting = !!edittingExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === edittingExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditting]);

  async function deleteButtonHandler() {
    setIsSubmitting(true);
    try {
      await deleteExpense(edittingExpenseId);
      expensesCtx.deleteExpense(edittingExpenseId);
      navigation.goBack();
    } catch (error) {
      setError("Not able to delete the item");
      setIsSubmitting(false);
    }
  }

  function cancleButtonHandler() {
    navigation.goBack();
  }

  async function confirmButtonHandler(expenseData) {
    setIsSubmitting(true);
    try {
      if (isEditting) {
        await updateExpense(edittingExpenseId, expenseData);
        expensesCtx.updateExpense(edittingExpenseId, expenseData);
      } else {
        const id = await storeExpenses(expenseData);
        expensesCtx.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Not able to save the data.");
      setIsSubmitting(false);
    }
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <Form
        buttonName={isEditting ? "Update" : "Add"}
        onSubmit={confirmButtonHandler}
        onCancel={cancleButtonHandler}
        defaultValue={selectedExpense}
      />

      {isEditting && (
        <View style={styles.trash}>
          <IconButton
            onPress={deleteButtonHandler}
            icon="trash"
            size={35}
            color="#f75e5e"
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0aab",
    padding: 24,
  },

  trash: {
    alignItems: "center",
    padding: 8,
    marginHorizontal: 5,
    borderTopWidth: 2,
    borderColor: "#f5ca3d",
  },
});
