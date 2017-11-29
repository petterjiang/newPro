import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {increment, decrement} from './actions.js';
import {connect} from 'react-redux';
import {Button} from 'antd';

function My({onIncrement, onDecrement, value}) {
    return (
        <div>
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