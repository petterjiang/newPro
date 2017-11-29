import {INCREMENT, DECREMENT} from './actionTypes.js';

//reducer例子，修改state必须使用Object.assign替换原来的state，否则是错误的
//这里的state初始化就是代表本reducer的状态，输出后直接在组件中可以通过mapStateToProps访问
const initState = {
    initVal:0
};

export default (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
    {const newVal = state.initVal+1;
      return Object.assign({}, {initVal:newVal});}
    case DECREMENT:
    {const newVal = state.initVal-1;
        return Object.assign({}, {initVal:newVal});
    }
    default:
      return state
  }
}
