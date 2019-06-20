## 生命周期函数执行顺序
#Initialization 初始化 setup props and state
constructor()

#Mounting 挂载

componentWillMount()  组件被挂载前自动执行
=> render() 页面渲染
=> componentDidMount() 挂在之后执行

#Updation 更新

props： componentWillReceiveProps => shouldComponentUpdate ? componentWillUpdate => render => componentDidUpdate : return false
states: shouldComponentUpdate ? componentWillUpdate => render => componentDidUpdate : return false

#Unmounting 卸载

componentWillUnmount()


 ![avatar](/public/img/lifecycle.png)

 ## redux
 1. store是唯一的
 2. 只有store能够改变自己的内容
 3. reducer必须是纯函数，纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
 #redeux的API
 1. createStore
 2. store.dispatch
 3. store.getState
 4. store.subscribe