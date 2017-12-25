import { combineReducers } from 'redux'
import counter from '../components/My/reducer';
import login from '../components/LoginTest/reducer';

export default combineReducers({
    //集成所有reducer，通过定义的状态名称counter到mapStateToProps访问引入的reducer；
    counter:counter,
    login:login
})