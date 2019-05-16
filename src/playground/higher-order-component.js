import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> info is {props.info}</p>
    </div>
)

const withAdmin = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is PRIVATE!!!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth && <WrappedComponent {...props}/>}
            {!props.isAuth && <p>Please login</p>}
        </div>
    );
};



const AdminInfo = withAdmin(Info);
const AuthInfo = requireAuth(Info);

ReactDOM.render(<AuthInfo isAuth={true} info="lalaghjgjkgjkgkjgk" />, document.getElementById('app'));
