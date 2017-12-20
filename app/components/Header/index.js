import React, { PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link,IndexLink} from 'react-router';


function Header () {
    return (
        <div>
            <IndexLink to='/'>首页</IndexLink>
            <Link to='/About'>about</Link>
        </div>
    )
}


// const mapStateToProps = (state) => ({
//     username: state.login.username || 'thisname',
//     errorName: state.login.errorName,
//     obj:state.login.obj,
//     isLoading:state.login.isLoading
//     // initVal:state.counter.initVal
// });
// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     checkName: checkName,
//     checkPassword: checkPassword,
//     appendObj:appendObj,
//     checkLoading:checkLoading
// }, dispatch);

export default connect(null, null)(Header);