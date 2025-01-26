import { useState } from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItems';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modelVisible, setModelVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) return;
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { key: Math.random().toString(), value: enteredGoalText },
    ]);
    setModelVisible(false);
  }

  function deleteGoalHandler(key) {
    setGoalList((currentGoalList) => {
      return currentGoalList.filter((goal) => goal.key !== key);
    });
  }

  function startAddGoalHandler(){
    setModelVisible(true)
  }

  function endAddGoalHandler(){
    setModelVisible(false)
  }

  return (
    <View style={styles.container}>
      <Button
      onPress={startAddGoalHandler}
      title='Add New Goal'/>
      <GoalInput
      visible = {modelVisible}
      onAddGoal={addGoalHandler}
      onCancel={endAddGoalHandler}
      />
      <View>
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
