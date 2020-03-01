import React, { useCallback, useEffect} from 'react'
import { connect } from 'react-redux'

export default (ChildComponent) => {
    const ComposedComponent = props => {
        const shouldNavigateAway = useCallback(() => {
            if (!props.isAuth) {
                props.history.push('/')
            }
        }, [props.isAuth, props.history])

        useEffect(() => {
            shouldNavigateAway()
        }, [shouldNavigateAway])

        return <ChildComponent {...props}/ >
    }

    const  mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    return connect(mapStateToProps)(ComposedComponent);
}