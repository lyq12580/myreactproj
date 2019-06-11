import React,  {Component} from 'react'
import 'antd/dist/antd.css';
import {Input,Button,List } from 'antd'
import store from './store'
class TodoList extends Component {

    constructor(props) {
       super(props);
       this.state = store.getState();
    }
    render() {
        return (
        <div style={{marginTop: '10px',marginLeft:'20px'}}>
        <div>
        <Input value={this.state.inputValue} placeholder="Basic usage" style={{width: '100px',marginRight:'10px'}}></Input>
        <Button type="primary">提交</Button>
        </div>
        <List
            style={{marginTop: '10px',width: '300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={item => <List.Item>{item}</List.Item>}></List>
        </div>
        )
    }
}

export default TodoList;