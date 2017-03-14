import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoEdit from '../components/TodoEdit'
import TodoList from '../components/TodoList'
import * as actions from '../actions/Actions'

import styles from './styles/App.less' // eslint-disable-line

class App extends Component {
    render() {
        const { todoList, todoEdit } = this.props
        const { addTodo, saveTodo, changeTodo, deleteTodo, lockTodo } = this.props.actions

        return <div className='app'>
            <TodoList list={ todoList } changeTodo={ changeTodo } deleteTodo={ deleteTodo } lockTodo={ lockTodo } />
            <TodoEdit title={ todoEdit.title }
                      text={ todoEdit.text }
                      id={ todoEdit.id }
                      locked={ todoEdit.locked }
                      addTodo={ addTodo }
                      saveTodo={ saveTodo }
            />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList,
        todoEdit: state.todoEdit
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)