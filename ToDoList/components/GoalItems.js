import { View, Text, Pressable, StyleSheet } from "react-native"

function GoalItem(props){
    return(
        <View style={styles.goalList}>
            <Pressable
              onPress={props.onDelete}
              style={({pressed}) => pressed && styles.pressedItem}
            >
              <Text style={styles.goalTexts}>{props.text}</Text>
            </Pressable>
        </View>
    )}

export default GoalItem

const styles = StyleSheet.create({
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
})