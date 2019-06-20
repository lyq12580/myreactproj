import React,  {Component} from 'react'
import ItemtodoList from './ItemTodoList'

import store from './store' 
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators'
// import { thisExpression } from '@babel/types';

class TodoList extends Component {

    constructor(props) {
       super(props);
       this.state = store.getState();
       this.handleInputChange = this.handleInputChange.bind(this);
       this.handleStoreChange = this.handleStoreChange.bind(this);
       this.handleBtnClick = this.handleBtnClick.bind(this);
       this.deleteBtnClick = this.deleteBtnClick.bind(this);
       store.subscribe(this.handleStoreChange)
    }
    render() {
       return  (
       <ItemtodoList 
            list={this.state.list}
            inputValue={this.state.inputValue} 
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            deleteBtnClick={this.deleteBtnClick}></ItemtodoList>
    )}
    handleInputChange(e) {
       const action = getInputChangeAction(e.target.value)
       store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }
    deleteBtnClick(index) {
      const action = getDeleteItemAction(index)
      store.dispatch(action);
    }
}

export default TodoList;