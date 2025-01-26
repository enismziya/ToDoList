import { View, StyleSheet, TextInput, Button, Modal, Image } from "react-native";
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
                <View style={styles.items}>
                    <Image style={styles.image} source={require("../assets/cloudtarget.png")}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Your next goal..."
                        onChangeText={goalInputHandler}
                        value={enteredGoalText}
                        maxLength={20}
                    />
                    <View style = {styles.buttonContainer}>
                        <View style={styles.buttons}>
                            <Button title="Add" onPress={addGoalHandler}/>
                        </View>
                        <View style={styles.buttons}>
                            <Button title="Cancel" onPress={props.onCancel}/>
                        </View>
                    </View>   
                </View> 
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor:'#a1efff',
      },
      items:{
        alignItems:"center",
        marginTop:"50%",
        width:"100%",
      },
      image:{
        width:200,
        height:200,
        
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#1c9db8',
        width: '70%',
        padding: 12,
        backgroundColor: '#b3eefc',
        color:"black",
        borderRadius: 10,
      },
      buttonContainer:{
        marginTop : 10,
        flexDirection: "row",
      },
      buttons:{
        borderWidth:1, 
        width:100,
        borderRadius:20,
        marginHorizontal:10,
        marginTop:10,
        padding:3,
        borderColor:"darkblue",
        backgroundColor:"#b3eefc",
      }
})