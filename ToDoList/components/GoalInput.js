import { View, StyleSheet, TextInput, Button, Modal } from "react-native";
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
        <Modal visible = {props.visible} animationType="slide">
            <View style = {styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your next goal..."
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style = {styles.buttonContainer}>
                    <Button title="Add" onPress={addGoalHandler}/>
                    <Button title="Cancel" onPress={props.onCancel}/>
                </View>    
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },
      textInput: {
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
      },
      buttonContainer:{
        marginTop : 10,
        flexDirection: "row",
      }
})