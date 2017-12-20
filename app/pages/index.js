import React from 'react';
import Header from '../components/Header';

class App extends React.Component {
    render (){
        return (
            <div className='warp'>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}
export default App;