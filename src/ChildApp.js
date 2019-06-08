import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ChildApp extends Component {
    constructor(props) {
        super(props);
        this.deleteItemChild = this.deleteItemChild.bind(this)
    }
    render() {
        const {content, test} = this.props;
        return (
        <div onClick={this.deleteItemChild}>{test} - {content}</div>
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