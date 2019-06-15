import React,  {Component} from 'react'
import 'antd/dist/antd.css';
import {Input,Button,List } from 'antd'
import store from './store' 
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators'

class TodoList extends Component {

    constructor(props) {
       super(props);
       this.state = store.getState();
       this.handleInputChange = this.handleInputChange.bind(this);
       this.handleStoreChange = this.handleStoreChange.bind(this);
       this.handleBtnClick = this.handleBtnClick.bind(this);
       store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
        <div style={{marginTop: '10px',marginLeft:'20px'}}>
        <div>
        <Input 
            value={this.state.inputValue} 
            placeholder="Basic usage" 
            style={{width: '100px',marginRight:'10px'}}
            onChange={this.handleInputChange}></Input>
        <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
            style={{marginTop: '10px',width: '300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => <List.Item onClick={this.deleteBtnClick.bind(this, index)}>{item}</List.Item>}></List>
        </div>
        )
    }
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