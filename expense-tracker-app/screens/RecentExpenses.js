import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/Expenses Output/ExpensesOutput";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../Utility/date";
import { fetchExpenses } from "../Utility/store";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpense(expenses);
      } catch (error) {
        setError("Not able to fetch the data.");
      }
      setIsFetching(false);
    }

    getExpenses();
  });

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const dateBefore7Days = getDateMinusDays(today, 7);

    return expense.date >= dateBefore7Days && expense.date <= today;
  });

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensePeriod="Last 7 days"
      fallBackText="No recordes of expenses for last 7 days."
    />
  );
}

export default RecentExpenses;
