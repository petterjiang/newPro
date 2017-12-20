import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {increment, decrement} from './actions.js';
import {connect} from 'react-redux';
import {Button} from 'antd';

function My({onIncrement, onDecrement, value}) {
    return (
        <div>
            <h2>My组件</h2>
            <p>本组件是计数器加减组件示例</p>
            <Button onClick={onIncrement}>+</Button>
            <Button onClick={onDecrement}>-</Button>
            <span>Count: {value}</span>
        </div>
    );
}
const mapStateToProps = (state) => ({
    value: state.counter.initVal
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    onIncrement: increment,
    onDecrement: decrement
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(My);