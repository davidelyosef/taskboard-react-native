import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";

function TaskInput({ setTasks, isModalVisible, setIsModalVisible }) {
  const [text, setText] = useState("");

  function taskInputHandler(enteredText) {
    setText(enteredText);
  }

  function addTaskHandler() {
    console.log(text);
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        value: text,
        id: Math.random(),
      },
    ]);
    onTextReset();
    setIsModalVisible(false);
  }

  function onTextReset() {
    setText("");
  }

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={style.inputFlexbox}>
        <Image source={require('../assets/goal.png')} style={style.image} tintColor={'#5e0acc'} />
        <TextInput
          style={style.textInput}
          placeholder="Your task"
          onChangeText={taskInputHandler}
          defaultValue={text}
        />
        <View style={style.buttonsWrapper}>
          <View style={style.buttonWrapper}>
            <Button
              onPress={addTaskHandler}
              title="Add Task"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={style.buttonWrapper}>
            <Button title="Cancel" color={"red"} onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  inputFlexbox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f7f9fa",
  },

  image: {
    width: 100,
    height: 100,
    objectFit: 'contain',
    margin: 20,
  },

  buttonsWrapper: {
    flexDirection: "row",
    marginTop: 20,
    columnGap: 12,
  },

  buttonWrapper: {
    width: '35%'
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#841584",
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
});

export default TaskInput;
