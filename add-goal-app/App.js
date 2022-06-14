import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisibal, setModalIsVisibal] = useState(false)
  const [goals, setGoals] = useState([])

  function addGoalHandler(inputText) {
    // console.log(inputText);
    setGoals((previousGoals) =>
      [...previousGoals, { text: inputText, id: Math.random().toString() }]
    )
    setModalIsVisibal(false)
  }

  function deleteGoalHandler(id) {
    // console.log('delete');
    setGoals((goals) => {
      return goals.filter((goal) => goal.id !== id)
    })
  }

  function startAddGoalHandler(){
    setModalIsVisibal(true)
  }

  function cancleAddGoalHandler(){
    setModalIsVisibal(false)
  }

  return (
    <View style={styles.container}>
      <Button title='Add New Goal!' color='#e9acff' onPress={startAddGoalHandler} />
      <GoalInput visible={modalIsVisibal} onAddGoal={addGoalHandler} onCancle={cancleAddGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteGoal={deleteGoalHandler} />
          }}
          keyExtractor={(item, index) =>{
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#520185',
  },
  
  goalContainer: {
    flex: 3,
    marginTop: 20,
    marginLeft: 8,
  },
  
});