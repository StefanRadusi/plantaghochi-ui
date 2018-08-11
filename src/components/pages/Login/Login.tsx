import * as React from 'react';

import groot from '../../../media/img/groot.jpg';
import { NormalLogin } from './NormalLogin/NormalLogin';

import './Login.css';
import { SimpleButton } from '../../shared/buttons/SimpleButton/SimpleButton';
import { Register } from './Register/Register';

interface ILoginState {
    registerShow: boolean;
}

export class Login extends React.Component<{}, ILoginState> {
    public state = {
        registerShow : false
    };

    private toogleRegisterComponent = () => {
        console.log("switch to register");
        this.setState({
            registerShow : !this.state.registerShow
        })
    }

    private logInToApp = () => {
        console.log("send for login");
    }

    private registerToApp = () => {
        console.log("register to app");
    }

    public render() {
        return (
            <div className='LoginPage'>
                <div className="login-welcome">
                    <img src={groot} />
                    <p> Welcome to <span>PlantaGochi</span> </p>
                </div>

                <div className="login-credetials">
                    <div className={this.state.registerShow ? "login-normal-login-container hideByTranslateRight" : "login-normal-login-container"}>
                        <NormalLogin logInAction={this.logInToApp}/>
                        <div className='login-or-register'>
                            <div className="login-or">
                                <div className="login-or-line"/>
                                <p>OR</p>
                            </div>
                            <SimpleButton title="register" onClick={this.toogleRegisterComponent}/>
                        </div>
                    </div>
                    <div className={this.state.registerShow ? 'login-register-container' : 'login-register-containe hideByTranslateLeft'}>
                        <Register registerAction={this.registerToApp} />
                    </div>
                </div>
            </div>
        )
    }
}