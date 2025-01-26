import { View, Text, Pressable, StyleSheet, Image } from "react-native"

function GoalItem(props){
    return(
    <View style={styles.container}>
        <View style={styles.goalList}>
            <View style={styles.goalListRows}>
                <Text style={styles.goalTexts}>{props.text}</Text>
                <View style= {styles.pressables}>
                <Pressable
                onPress={props.onDelete}
                style={({pressed}) => pressed && styles.pressedItem}
                >
                <Image style={styles.image} source={require("../assets/tick.png")}/>
                </Pressable>
                </View>
            </View>
        </View>
        <Pressable
        onPress={props.onDelete}
        style={({pressed}) => pressed && styles.pressedItem}
        >
            <Image style={styles.image} source={require("../assets/trashcan.png")}/>
        </Pressable> 
    </View>
    )}

export default GoalItem

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    goalList: {
        marginVertical: 8,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#90e0f0',
        flex:1,
    },
    goalListRows:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    pressables:{
        flexDirection:"row",
        marginHorizontal:5,
    },
    goalTexts: {
        color: 'black',
        fontSize: 16,
    },
    pressedItem:{
        opacity: 0.4,
    },
    image:{
        width:25,
        height:25,
        marginLeft:10
    }
})