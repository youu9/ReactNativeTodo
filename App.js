import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

class App extends React.Component{
  state = {
    text: "",
    todo: []
  }
  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }
  deleteTodo = (t) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos, 1);
    this.setState({todo: arr});
  }
  renderTodos = () => {
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
        <Text
          style={styles.todo}
          onPress={()=>{this.deleteTodo(t)}}
        >{t}
        </Text>
        </TouchableOpacity>
      )
    })
  }

  render(){
    return(
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>LosTTask</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          <Button
            title="Add Todo"
            color="green"
            onPress={this.addTodo}
          />
          <View style={{marginTop: 100}}/>
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  wholeStyle: {
    flex: 1,
    backgroundColor: "#E0F2F1"
  },
  viewStyle: {
    marginTop:30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    
  },
  inputStyle: {
    height: 40,
    width: 350,
    borderColor: "green",
    borderWidth: 1,
    margin: 20,
  },
  header: {
    fontSize: 30,
    color:'green',
    fontWeight: 'bold'
  },
  todo: {
    fontSize: 24,
    color: 'green'
  }
}
export default App;