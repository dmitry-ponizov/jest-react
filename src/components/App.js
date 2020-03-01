import React from 'react';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from 'actions'


const App = ({isAuth, authChange}) => {
    const renderButton = () => {
        return isAuth ? 
        <button onClick={() => authChange(false)} >Sign out</button> : 
        <button onClick={() => authChange(true)} >Sign in</button>
    }
    const renderHeader = () => {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post A Comment</Link>
                </li>
                <li>
                    {renderButton()}
                </li>
            </ul>
        )
    }
    return (
        <div>
            {renderHeader()}
            <Switch>
                <Route path="/" component={CommentList} exact />
                <Route path="/post" component={CommentBox} />
            </Switch>
        </div>
    )
}
const  mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, actions)(App);