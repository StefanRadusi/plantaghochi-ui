import * as React from 'react';
import { SimpleButton } from '../../../shared/buttons/SimpleButton/SimpleButton';

interface IRegisterProps {
    registerAction: () => void;
}

export class Register extends React.Component<IRegisterProps> {
    public render() {
        return (
            <div className="login-normalLogin">
                <div className='normalLogin-field'>
                    <p>ojiiouupn,,</p>
                    <input id='login-user' />
                </div>
                <div className='normalLogin-field'>
                    <p>asdkjfalskd</p>
                    <input id='login-password' />
                </div>
                <SimpleButton title="login" onClick={this.props.registerAction}/>
            </div>
        )
    }
}