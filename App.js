import { useState } from "react";
import { StyleSheet, View, FlatList, Button, StatusBar } from "react-native";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
import { dummyTasks } from "./global";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasks, setTasks] = useState(dummyTasks);

  function onItemPress(id) {
    console.log("Delete ", id);
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={appStyles.container}>
        <Button
          title="Add New Task"
          color="#9e349e"
          onPress={() => setIsModalVisible(true)}
        />
        <TaskInput
          setTasks={setTasks}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />

        <View style={appStyles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={(itemData) => (
              <TaskItem item={itemData.item} onItemPress={onItemPress} />
            )}
          />
        </View>
      </View>
    </>
  );
}

export const appStyles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  tasksContainer: {
    borderBlockColor: "#cccccc",
    borderTopWidth: 1,
    paddingTop: 16,
    flex: 6,
    marginTop: 8,
  },

  text: { color: "brown", marginVertical: 16 },
});
