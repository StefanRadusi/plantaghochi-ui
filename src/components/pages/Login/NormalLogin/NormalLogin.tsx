import * as React from 'react';
import { SimpleButton } from '../../../shared/buttons/SimpleButton/SimpleButton';
import './NormalLogin.css';

interface INormalLoginProps {
    logInAction: () => void;
}

export class NormalLogin extends React.Component<INormalLoginProps> {
    public render() {
        return (
            <div className="login-normalLogin">
                <div className='normalLogin-field'>
                    <p>User</p>
                    <input id='login-user' />
                </div>
                <div className='normalLogin-field'>
                    <p>Password</p>
                    <input id='login-password' />
                </div>
                <SimpleButton title="login" onClick={this.props.logInAction}/>
            </div>
        )
    }
}