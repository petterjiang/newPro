import {CHECKNAME, CHECKPASSWORD,APPENDOBJ,CHECKLOADING} from './actionTypes.js';
import inputJudgment from '../../util/inputJudgment';

//reducer例子，修改state必须使用Object.assign替换原来的state，否则是错误的
//这里的state初始化就是代表本reducer的状态，输出后直接在组件中可以通过mapStateToProps访问
const initState = {
    username:'',
    password:'',
    errorName:'',
    errorPassword:'',
    isLoading:true,
    obj:[{name:'默认名称',listid:'默认ID'}]
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHECKNAME:
    {
      const newVal = action.val;
        let error = '';

        if(!inputJudgment.validatemobile(newVal))
        {
            error='请输入正确的手机号码';
        }else{
            error = ''
        }
      return Object.assign({},state, {errorName:error});
    }
      case APPENDOBJ:
      {
       return Object.assign({},state, {obj:action.obj});
      }
      case CHECKLOADING:
      {
          const flag = action.load;
          console.log(action.load)
          return Object.assign({},state,{isLoading:flag})
      }
    case CHECKPASSWORD:
    {
        const newVal = action.val;
        return Object.assign({}, {password:newVal});
    }
    default:
      return state
  }
}
