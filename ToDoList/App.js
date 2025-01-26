import { useState } from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItems';

export default function App() {
  const [goalList, setGoalList] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) return;
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { key: Math.random().toString(), value: enteredGoalText },
    ]);
  }

  function deleteGoalHandler(key) {
    setGoalList((currentGoalList) => {
      return currentGoalList.filter((goal) => goal.key !== key);
    });
  }

  return (
    <View style={styles.container}>
      <GoalInput
      onAddGoal={addGoalHandler}
      />
      <FlatList
        data={goalList}
        renderItem={(itemData) => {
          return(<GoalItem
          text = {itemData.item.value}
          onDelete = {() => deleteGoalHandler(itemData.item.key)}
          />
        )
        }}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
  },
});
