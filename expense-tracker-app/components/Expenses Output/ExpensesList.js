import { View, FlatList, Text } from 'react-native'
import ExpenseItem from './ExpenseItem'

function renderExpensesList(itemData) {
    return (
        <ExpenseItem {...itemData.item} />
    )
}

function ExpensesList({ expenses }) {
    return (
        <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={renderExpensesList} />
    )
}

export default ExpensesList