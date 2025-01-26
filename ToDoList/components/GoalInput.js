import { View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(text) {
        setEnteredGoalText(text);
    }
    
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return(
        <View>
            <TextInput
                style={styles.textInput}
                placeholder="Your next goal..."
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 10,
        borderRadius: 10,
    },
})