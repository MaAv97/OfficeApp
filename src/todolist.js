import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import tempdata from './tempdata'
import ToDoListPage from './components/todolistpage'
import AddListModal from './components/addlistmodal'
import TODOModal from './components/todomodal';


export default class todolist extends React.Component {

  state = {
    addToDoVisibile: false,
    lists: tempdata
  }

  toggleAddToDoModal() {
    this.setState({ addToDoVisibile: !this.state.addToDoVisibile })
  }


  renderList = list => {
    return <ToDoListPage list={list} updateList={this.updateList} />
  }

  addList = list => {
    this.setState({ lists: [...this.state.lists, { ...list, id: this.state.lists.length + 1, todos: [] }] });
  };


  updateList = list => {
    this.setState({
      lists: this.state.lists.map(item => {
        return item.id === list.id ? list : item;
      })
    });
  };

  render() {
    return (
      <View style={styles.container}>

        <Modal
          animationType="slide" visible={this.state.addToDoVisibile} onRequestClose={() => this.toggleAddToDoModal()} >
          <AddListModal closeModal={() => this.toggleAddToDoModal()} addList={this.addList} />
        </Modal>

        {/* TITLU SCHITE */}
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
              S
              <Text style={{ fontWeight: "300", color: 'red' }}>c</Text>
              h
              <Text style={{ fontWeight: "300", color: 'red' }}>i</Text>
              ț
              <Text style={{ fontWeight: "300", color: '#F5CA48' }}>e</Text>
          </Text>
          <View style={styles.divider} />
        </View>

        {/* +   BUTON */}
        <View style={{ marginVertical: 20 }}>
          <TouchableOpacity style={styles.addLists} onPress={() => this.toggleAddToDoModal()}>
            <AntDesign name="plus" size={30} color='green'></AntDesign>
          </TouchableOpacity>
          <Text style={styles.add}>Adaugă notiță</Text>
        </View>

        {/* SCHITE */}
        <View style={{ height: 300, paddingLeft: 20 }}>
          <View style={{ marginRight: 20 }}>
            <FlatList
              data={this.state.lists}
              keyExtractor={item => item.name}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => this.renderList(item)}
              keyboardShouldPersistTaps="always"
            />
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  divider:
  {
    backgroundColor: 'black',
    height: 1,
    flex: 1,
    alignSelf: 'center',

  },
  title:
  {
    fontSize: 40,
    fontWeight: "800",
    color: '#8A2081',
    paddingHorizontal: 30
  },
  addLists:
  {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add:
  {
    color: 'black',
    fontWeight: "600",
    fontSize: 20,
    marginTop: 10
  }
})