import React, {Component} from 'react'

class ChildApp extends Component {
    constructor(props) {
        super(props);
        this.deleteItemChild = this.deleteItemChild.bind(this)
    }
    render() {
        const {content} = this.props;
        return (
        <div onClick={this.deleteItemChild}>{content}</div>
         )  
    }
    deleteItemChild() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}
export default ChildApp;