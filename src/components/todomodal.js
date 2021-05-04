import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    FlatList,
    Keyboard,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'

export default class todomodal extends React.Component {

    state = {
        newTodo: ""
    };


    toggleTodoCompleted = index => {
        let list = this.props.list;
        list.todos[index].completed = !list.todos[index].completed;
        this.props.updateList(list);
    };

    addTodo = () => {
        let list = this.props.list;
        list.todos.push({ title: this.state.newTodo, completed: false })
        this.props.updateList(list);
        this.setState({ newTodo: "" });

        Keyboard.dismiss();
    };

    renderTodo = (todo, index) => {
        return (
            <View style={styles.TodoContainer}>
                <TouchableOpacity onPress={() => this.toggleTodoCompleted(index)}>
                    <Ionicons
                        name={todo.completed ? "ios-square" : "ios-square-outline"}
                        size={20}
                        color={'gray'}
                        style={{ width: 30 }}
                    />
                </TouchableOpacity>
                <Text style={
                    styles.todo,
                    {
                        textDecorationLine: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? 'gray' : 'black'
                    }}>{todo.title}</Text>
            </View>
        );
    };

    render() {
        const list = this.props.list
        const taskCount = list.todos.length;
        const completedCount = list.todos.filter(todo => todo.completed).length;
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>


                <SafeAreaView style={styles.container}>
                    {/* CLOSE ICON */}
                    <TouchableOpacity style={{ position: 'absolute', right: 10, paddingBottom: 700 }} onPress={this.props.closeModal}>
                        <AntDesign name="close" size={20} color='black'></AntDesign>
                    </TouchableOpacity>

                    {/* HEADER */}
                    <View style={[styles.section, styles.header, { borderBottomColor: list.color }]}>
                        <View>
                            <Text style={styles.title}>{list.name}</Text>
                            <Text style={styles.taskCount}>{completedCount} din {taskCount} sarcini</Text>
                        </View>
                    </View>

                    {/* AFISARE SCHITA */}
                    <View style={[styles.section, { flex: 3 }]}>
                        <FlatList
                            data={list.todos}
                            renderItem={({ item, index }) => this.renderTodo(item, index)}
                            keyExtractor={item => item.title}
                            contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 60 }}
                            showsVerticalScrollIndicator={false}
                        >
                        </FlatList>
                    </View>
                    {/* SECTIUNEA DE INPUT */}
                    <View style={[styles.section, styles.footer]}>
                        <TextInput
                            style={
                                [styles.input, { borderColor: list.color }]}
                            onChangeText={text => this.setState({ newTodo: text })}
                            value={this.state.newTodo}
                        />
                        <TouchableOpacity style={[styles.addTodo, { backgroundColor: list.color }]} onPress={() => this.addTodo()} >
                            <AntDesign name="plus" size={20} color='white'></AntDesign>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    section:
    {
        flex: 1,
        alignSelf: 'stretch'
    },
    header:
    {
        justifyContent: 'flex-end',
        marginLeft: 60,
        borderBottomWidth: 3
    },
    title:
    {
        fontSize: 30,
        fontWeight: "800",
        color: 'black'
    },
    taskCount:
    {
        marginTop: 5,
        marginBottom: 20,
        color: 'gray',
        fontWeight: "600"
    },
    footer:
    {
        paddingHorizontal: 30,
        flexDirection: "row",
        alignItems: 'center'
    },
    input:
    {
        flex: 1,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        marginRight: 10,
        paddingHorizontal: 10
    },
    addTodo:
    {
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TodoContainer:
    {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    todo:
    {
        color: 'black',
        fontWeight: "700",
        fontSize: 20
    }
});