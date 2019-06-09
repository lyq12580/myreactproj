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