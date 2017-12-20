import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {checkName, checkPassword,appendObj,checkLoading} from './actions.js';
import {connect} from 'react-redux';
import {Input,Button,Spin} from 'antd';

//引入首次装载组件延时渲染组件和样式
import Transition from 'react-addons-css-transition-group';
import '../../resource/css/fade.css';

function List (props) {
    return (
        <div>
            <div>props.name:{props.name}</div>
            -----------------
            <div>props.listid:{props.listid}</div>
            ==========================
        </div>
    )
}

class Login extends React.Component{
    constructor (props){
        super(props);

    }
    componentDidMount(){
        const obj = [{
            name:'张三',
            listid:'0'
        },{
            name:'李四',
            listid:'1'
        }];
        setTimeout(()=>{
            this.props.appendObj(obj);
            this.props.checkLoading(false)
        },3000)
    }
    renderObj (){
        let resp = this.props.obj.map((data)=>{
            return (
                    <List name={data.name} key={data.listid} listid={data.listid} />
            )
        });
        return (
            <Transition transitionName='fade' transitionEnterTimeout={500} transitionLeaveTimeout={200} transitionAppear={true} transitionAppearTimeout={500} >
                {resp}
            </Transition>
        )
    }
    render (){
        const {checkName,username,errorName,isLoading} = this.props;
        return (
            <div className='loginBox'>
                <Input type='text' onChange={checkName} />
                <div>
                    username: {username}
                </div>
                ==========================================
                <div className="errorName">
                    {errorName}
                </div>
                {isLoading}
                {isLoading?<Spin />:this.renderObj()}
                <Input type='password' />
                <Button>登录</Button>
            </div>
        );
    }
}
// ({username,errorName,checkName}) {
//     return (
//         <div className='loginBox'>
//             <Input type='text' onChange={checkName} />
//             <div>
//                username: {username}
//
//             </div>
//             <div className="errorName">
//                 {errorName}
//             </div>
//             <Input type='password' />
//             <Button>登录</Button>
//         </div>
//     );
// }
const mapStateToProps = (state) => ({
    username: state.login.username || 'thisname',
    errorName: state.login.errorName,
    obj:state.login.obj,
    isLoading:state.login.isLoading
    // initVal:state.counter.initVal
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    checkName: checkName,
    checkPassword: checkPassword,
    appendObj:appendObj,
    checkLoading:checkLoading

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);