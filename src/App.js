import React, {Fragment} from 'react';
import ChildApp from './ChildApp';
import Test from './Test';
import './style.css'
// import axios from 'axios'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: '',
      list: [],
      show:true
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.toggle = this.toggle.bind(this)
  }
  render () {
    // 当组件的state和props改变时，render函数会重新执行
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
      <Test content={this.state.inputvalue}/>
      <div className={this.state.show? 'show' : 'hide'}>hello</div>
      <button onClick={this.toggle}>toggle</button>
    </Fragment>
   )
  }
    // ajax请求数据
  //   componentDidMount() {
  //     axios.get('/api/list').then((res) => {
  //       console.log(res)
  //         this.setState(() => ({
  //             list: [...res.data]
  //         }))
  //        alert('success')
  //     }).catch(() => {
  //         alert('error')
  //     })
  //  }
   
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
  toggle() {
    this.setState(() => (
      {
        show: this.state.show? false : true
      }
    ))
  }
}
export default App;
