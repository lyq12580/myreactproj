import React from 'react'//,  {Component} 
import {Input,Button,List } from 'antd'
import 'antd/dist/antd.css';

//只有render函数的组件叫无状态组件
const ItemTodoList = (props) =>{
    return (
                <div style={{marginTop: '10px',marginLeft:'20px'}}>
                <div>
                <Input 
                    value={props.inputValue} 
                    placeholder="Basic usage" 
                    style={{width: '100px',marginRight:'10px'}}
                    onChange={props.handleInputChange}></Input>
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
                </div>
                <List
                    style={{marginTop: '10px',width: '300px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => <List.Item onClick={(index)=> {props.deleteBtnClick(index)}}>{item}</List.Item>}></List>
                </div>
                )
}
// class ItemTodoList extends Component {
//    render() {
//         return (
//         <div style={{marginTop: '10px',marginLeft:'20px'}}>
//         <div>
//         <Input 
//             value={this.props.inputValue} 
//             placeholder="Basic usage" 
//             style={{width: '100px',marginRight:'10px'}}
//             onChange={this.props.handleInputChange}></Input>
//         <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         </div>
//         <List
//             style={{marginTop: '10px',width: '300px'}}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item,index) => <List.Item onClick={(index)=> {this.props.deleteBtnClick(index)}}>{item}</List.Item>}></List>
//         </div>
//         )
// }

// }

export default ItemTodoList;