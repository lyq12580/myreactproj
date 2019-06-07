import React, {Fragment} from 'react';
import ChildApp from './ChildApp'
import './style.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render () {
    return (
    <Fragment>
      <div>
        {/*下面是一个input */}
        <label htmlFor="insertArea">输入内容</label>
        <input 
          id="insertArea"
          className="input"
          value={this.state.inputvalue}
          onChange={this.handleInputChange}/>
        <button onClick={this.handleBtnClick}>提交</button>
      </div>
      <ul>
        {this.getTodoItem()}
      </ul>
    </Fragment>
   )
  }
  getTodoItem() {
    return  this.state.list.map((item, index) => {
      return (
        <ChildApp key= {index} content={item} index={index} deleteItem={this.handleItemDelete}/>
        )
        // return <li 
        //   key={index} 
        //   onClick={this.handleItemDelete.bind(this, index)}
        //   dangerouslySetInnerHTML={{__html:item}}
        //   >
        //   </li>
      })
  }
  handleInputChange(e) {
    // this.setState({
    //   inputvalue : e.target.value
    // })
    const value = e.target.value
    this.setState(() => ({
      inputvalue: value
    }))
  }
  handleBtnClick() {
    this.setState((prevState) => ({
       list: [...prevState.list, prevState.inputvalue],
       inputvalue:''
    }))
  }
  handleItemDelete(index) {
    // immutable
    // state 不允许做任何的改变
   
    this.setState((prevState) => {
      const list = [...prevState.list];
        list.splice(index, 1)
      return { list }
      
    })
  }
}
export default App;
