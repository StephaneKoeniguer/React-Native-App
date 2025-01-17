import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {View, Text, ScrollView } from "react-native";
import { s } from './index.style';
import { Header } from '@/components/Header/Header';
import { Card } from "@/components/Card/Card";
import { useState } from "react";

export default function Index() {

    const [todoList, setTodoList] = useState([
        { id: 1, title: 'Faire la café', isCompleted: false },
        { id: 2, title: 'Dormir', isCompleted: true },
        { id: 3, title: 'Travailler', isCompleted: false },
        { id: 4, title: 'Faire la café', isCompleted: false },
        { id: 5, title: 'sortir le chien', isCompleted: true },
        { id: 6, title: 'Tennis', isCompleted: false },
        { id: 7, title: 'jeux videos', isCompleted: false },
        { id: 8, title: 'Lire', isCompleted: true },
        { id: 9, title: 'manger', isCompleted: true },
    ]);

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
     * Render la liste des todos
     */
    function renderTodoList() {
        return todoList.map((todo)=>
            <View style={s.carItem} key={todo.id}>
                <Card onPress={updateTodo} todo={todo}/>
            </View>
        )
    }


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
            </SafeAreaView>
        </SafeAreaProvider>
        <View style={s.footer}>
            <Text>Footer</Text>
        </View>
      </>
  );
}
