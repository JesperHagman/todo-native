import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {

    return (
        <View style={styles.item}>

            <View style={styles.itemLeft}>
               {/* <TouchableOpacity style={styles.square}></TouchableOpacity> */}
                <Text style={styles.itemText}> {props.text} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        marginBottom: 20,
        width: "auto"
    },  
})

export default Task