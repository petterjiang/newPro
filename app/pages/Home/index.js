import React from 'react';
// import {view as Counter} from '../components/Counter';
import My from '../../components/My/index';
import Login from '../../components/Login';
class Home extends React.Component {
    render (){
        return (
            <div>
                <h1>我是首页入口</h1>，
                <br/>
                下面是首页入口引入的带有redux的两个组件
                --------------------------------------
                <br/>
                <br/>

                <My />
                =========================
                <h2>Login组件</h2>
                <Login />
            </div>
        )
    }
}
export default Home;