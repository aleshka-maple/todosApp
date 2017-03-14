import React, { Component, PropTypes } from 'react'

import styles from './styles/TodoList.less'
import delImage from './ico/Delete-icon-128.png'
import lockedImage from './ico/lock-png-image-38872.png'
import unlockedImage from './ico/unlock-png-image-38843.png'

export default class TodoList extends Component {
    handleDeleteClick(e) {
        e.stopPropagation()
        this.props.deleteTodo(e.target.id)
    }
    handleChangeClick(e) {
        this.props.changeTodo(this.props.list[e.currentTarget.id])
    }
    handleLockClick(e) {
        e.stopPropagation()
        this.props.lockTodo(e.currentTarget.id)
    }

    render() {
        const { list } = this.props
        list.sort((a,b) => a.title < b.title)

        return <div className={ styles.TodoList }>
                <h2>Todos</h2>
                    <section>
                        { list.map(
                            (item, index) => {
                                return <article key={ index } id={ index } className='Todo' onClick={ ::this.handleChangeClick } >
                                    <h3>{ item.title } </h3>
                                    <p>{ item.text }</p>
                                    <img className='button button_delete' id={ index } onClick={ ::this.handleDeleteClick } src={ delImage }></img>
                                    <img className='button button_lock' id={ index }
                                         onClick={ ::this.handleLockClick }
                                         src={ item.locked ? lockedImage : unlockedImage }></img>
                                </article>
                            }
                            )
                        }
                    </section>
            </div>
    }
}


TodoList.propTypes = {
    list: PropTypes.array.isRequired
}
