import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem({ item, onItemPress }) {
  return (
    <View style={style.taskItem}>
      <Pressable 
      onPress={() => onItemPress(item.id)}
      style={({pressed}) => pressed && style.pressedItem}
      >
        <Text style={{ color: "white" }}>{item.value}</Text>
      </Pressable>
    </View>
  );
}

export default TaskItem;

const style = StyleSheet.create({
  taskItem: {
    width: "100%",
    marginBottom: 16,
    backgroundColor: "#5e0acc",
    color: "#fff",
    borderRadius: 4,
    fontSize: 16,
    padding: 6,
  },
  pressedItem: {
    opacity: .5,
  }
});
