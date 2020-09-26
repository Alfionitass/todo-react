import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header';
import Todo from './component/Todo';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import './App.css';

class App extends Component {
  state = {
    todo : [
      {
        text: 'Todo 1',
        completed: false,
        date: new Date(),
        id: 1,
        isEditing: false,
      },
      {
        text: 'Todo 2',
        completed: false,
        date: new Date(),
        id: 2,
        isEditing: false,
      }
    ]
  }

  componentDidMount() {
    this.getStorage();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.todo !== this.state.todo
    ) {
      this.setStorage();
    }
  }

  add = (value) => {
    this.setState({
      todo: [
        ...this.state.todo,
        {
          text: value,
          completed: false,
          date: new Date(),
          id: Math.random(),
          isEditing: false,
        }
      ]
    })
    console.log(this.todo)
  }

  remove = (id) => {
    const newTodo = this.state.todo.filter((todo) => todo.id !== id);
    this.setState({
      todo: newTodo,
    })
    console.log(id)
  }

  edit =(id) => {
    const newTodo = [...this.state.todo];
    const editTodo = newTodo.find((todo) => todo.id === id );
    editTodo.isEditing = !editTodo.isEditing; //isEditing adalah state, buat nyimpan keadaan apakah todonya sdg dlm kondisi diedit atau ngga
    this.setState({
      todo: newTodo,
    })
  }

  doneEdit = (id, text) => {
    const newTodo = [...this.state.todo];
    const editTodo = newTodo.find((todo) => todo.id === id );
    editTodo.isEditing = !editTodo.isEditing; //isEditing adalah state, buat nyimpan keadaan apakah todonya sdg dlm kondisi diedit atau ngga
    editTodo.text = text;
    this.setState({
      todo: newTodo,
    })
    console.log(text)
  }

  completedTodo = (id) => {
    const newTodo = [...this.state.todo];
    const completedTodo = newTodo.find((todo) => todo.id === id );
    completedTodo.completed = !completedTodo.completed; //isEditing adalah state, buat nyimpan keadaan apakah todonya sdg dlm kondisi diedit atau ngga
    this.setState({
      todo: newTodo,
    })
  }

  setStorage = () => {
    localStorage.setItem("todolist", JSON.stringify(this.state.todo));
  }

  getStorage = () => {
    let localTodo = JSON.parse(localStorage.getItem("todolist")); 
    if (!localTodo) {
      localTodo = [
        {
          text: 'Todo 1',
          completed: false,
          date: new Date(),
          id: 1,
          isEditing: false,
        },
        {
          text: 'Todo 2',
          completed: false,
          date: new Date(),
          id: 2,
          isEditing: false,
        }
      ]
    }
    this.setState({
      todo : localTodo
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todo 
          todo={this.state.todo} 
          add={this.add} 
          remove={this.remove}
          edit={this.edit}
          doneEdit={this.doneEdit}
          completedTodo={this.completedTodo}
        />

        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
