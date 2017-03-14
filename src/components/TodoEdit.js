import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import styles from './styles/TodoEdit.less'

export default class TodoEdit extends Component {
    collectData() {
        return {
            id: this.props.id,
            title: ReactDOM.findDOMNode(this.refs.title).value,
            text: ReactDOM.findDOMNode(this.refs.text).value
        }
    }
    handleAddClick(e) {
        if (!this.collectData().title.trim().length) return
        this.props.addTodo(this.collectData())
        e.preventDefault()
    }
    handleSaveClick() {
        this.props.saveTodo(this.collectData())
    }
    componentWillUpdate(nextProps) {
        this.refs.title.value = nextProps.title;
        this.refs.text.value = nextProps.text;
    }

    render() {
        const { title, text, locked } = this.props

        return <form className={ styles.TodoEdit }>
            <h1>Todo</h1>

            <label htmlFor='TodoEditTitle'>Title</label>
            <br/><input type='text' className='TodoEditTitle' ref='title' defaultValue={ title } required/>

            <br/><label htmlFor='TodoEditText'>Text</label>
            <br/><textarea className='TodoEditText' ref='text' defaultValue={ text } rows='6'></textarea>

            <br/><button className='button button_add' type='submit' onClick={ ::this.handleAddClick }>Add</button>
            <button className='button button_save' disabled={ locked } type='button' onClick={ ::this.handleSaveClick }>Save</button>
        </form>
    }
}
