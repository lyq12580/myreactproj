import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_LIST_ITEM} from './actionTypes'
const defaultState = {
    inputValue: '123',
    list: [1,2]
}

export default (state= defaultState, action) => {
if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    // newState.inputValue =''
    return newState;
}
if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    console.log(newState)
    return newState;
}
if(action.type === DELETE_LIST_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    newState.inputValue = '';
    console.log(newState)
    return newState;
}
    return state;
}