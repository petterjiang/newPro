import React from 'react';
// import {view as Counter} from '../components/Counter';
import My from '../components/My/index';
import Login from '../components/Login';
class Home extends React.Component {
    render (){
        return (
            <div>
                我是hone，<br/>

                下面是带有redux的计数器例子
                <My />


                <Login />
            </div>
        )
    }
}
export default Home;