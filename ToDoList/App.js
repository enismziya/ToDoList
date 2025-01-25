
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList, Pressable } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goalList, setGoalList] = useState([]);

  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;
    setGoalList(currentGoalList => [
      ...currentGoalList,
      { key: Math.random().toString(), value: enteredGoalText },
    ]);
    setEnteredGoalText("");
  }

  function deleteGoalHandler(goalkey){
    setGoalList(currentGoalList => {
      return currentGoalList.filter((goal) => goal.key !== goalkey)
  })
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Your next goal..."
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
      <FlatList
        data={goalList}
        renderItem={(itemData) => (
          <View style={styles.goalList}>
            <Pressable
              onPress={()=>deleteGoalHandler(itemData.item.key)}
              style={({pressed}) => pressed && styles.pressedItem}
            >
              <Text style={styles.goalTexts}>{itemData.item.value}</Text>
            </Pressable>
          </View>
        )}
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
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 10,
  },
  goalList: {
    marginVertical: 8,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#e3e3e3',
  },
  goalTexts: {
    color: 'black',
    fontSize: 16,
  },
  pressedItem:{
    opacity: 0.4,
  }
});
