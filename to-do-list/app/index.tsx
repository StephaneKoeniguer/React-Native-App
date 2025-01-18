import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {View, ScrollView, Alert } from "react-native";
import { s } from './index.style';
import { Header } from '@/components/Header/Header';
import { Card } from "@/components/Card/Card";
import { useState } from "react";
import {TabBottomMenu} from "@/components/TabBottomMenu/TabBottomMenu";
import {ButtonAdd} from "@/components/ButtonAdd/ButtonAdd";
import Dialog from "react-native-dialog";

export default function Index() {

    const [selectedTabName, setSelectedTabName] = useState("all");
    const [todoList, setTodoList] = useState([]);
    const [isAddDialogVisible, setIsAddDialogVisible] = useState(false);
    const [inputValue, setInputValue] = useState();

    /**
     * Create todoList filtered
     */
    function getFilteredList() {
        switch (selectedTabName) {
            case "all":
                return todoList;
            case "inProgress":
                return todoList.filter(todo => !todo.isCompleted);
            case "done":
                return todoList.filter(todo => todo.isCompleted);
            default:
                return todoList;
        }
    }

    /**
     * Display dialog for add a new task
     */
    function showAddDialog() {
        setIsAddDialogVisible(true);
    }

    /**
     * Generate a unique id for the task
     */
    function generateId() {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Add a new task
     */
    function addTodo() {
        const newTodo = {
            id: generateId(),
            title: inputValue,
            isCompleted: false
        };
        setTodoList([...todoList, newTodo]);
        setIsAddDialogVisible(false);
    }


    /**
     * Update TODO
     * @param todo
     */
    function updateTodo(todo) {
        const updatedTodo = {
            ...todo,
            isCompleted: !todo.isCompleted
        }
        const indexToUpdate = todoList.findIndex(
            (todo) => todo.id === updatedTodo.id
        );

        // Obliger de passer par le setter à cause du useState
        const updateTodoList = [...todoList];
        updateTodoList[indexToUpdate] = updatedTodo;
        setTodoList(updateTodoList);
    }

    /**
     * Delete a todo
     * @param todoToDelete
     */
    function deleteTodo(todoToDelete) {
        Alert.alert("Suppression", "Supprimer cette tâche ?", [
            {
                text:"Supprimer",
                style: "destructive",
                onPress: () => {
                    setTodoList(todoList.filter(todo => todo.id !== todoToDelete.id))
                }

            },
            {
                text:"Annuler",
                style: "cancel",
            }
        ])
    }

    /**
     * Render la liste des todos
     */
    function renderTodoList() {
        return getFilteredList().map((todo)=>
            <View style={s.carItem} key={todo.id}>
                <Card onLongPress={deleteTodo} onPress={updateTodo} todo={todo}/>
            </View>
        )
    }


  // @ts-ignore
    return (
      <>
        <SafeAreaProvider>
            <SafeAreaView style={s.container}>
                <View style={s.header}>
                    <Header />
                </View>
                <View style={s.main}>
                    <ScrollView>{renderTodoList()}</ScrollView>
                </View>
                <ButtonAdd onPress={showAddDialog}/>
            </SafeAreaView>
        </SafeAreaProvider>
        <View style={s.footer}>
            <TabBottomMenu
                todoList={todoList}
                onPress={setSelectedTabName}
                selectedTabName={selectedTabName}
            />
        </View>
          <Dialog.Container visible={isAddDialogVisible} onBackdropPress={()=> setIsAddDialogVisible(false)}>
              <Dialog.Title>Ajouter une tâche</Dialog.Title>
              <Dialog.Description>Choisir le nom de la tâche</Dialog.Description>
              <Dialog.Input onChangeText={setInputValue}/>
              <Dialog.Button
                  disabled={!inputValue?.trim()}
                  label="Ajouter"
                  onPress={addTodo} />
          </Dialog.Container>
      </>
  );
}
