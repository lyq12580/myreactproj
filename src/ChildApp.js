import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import axios from 'axios'
class ChildApp extends Component {
    constructor(props) {
        super(props);
        this.deleteItemChild = this.deleteItemChild.bind(this)
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextProps.content !== this.props.content) {
    //         return true;
    //     } else {
    //      return false;   
    //     } 
    // }
    render() {
        console.log('child app')
        const {content} = this.props;
        return (
        <div onClick={this.deleteItemChild}> {content}</div>
         )  
    }
  
    deleteItemChild() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}
ChildApp.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
ChildApp.defaultProps = {
    test: 'hello world'
}

export default ChildApp;