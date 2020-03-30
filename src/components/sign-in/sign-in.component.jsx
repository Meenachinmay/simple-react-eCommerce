import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span style={{ fontWeight: 'normal', fontSize: '20px' }}>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" value={this.state.email} name="email" handleChange={this.handleChange} label="Email"/>
                
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password"/>

                    <div className="buttons">
                        <CustomButton type="submit" btnText="Sign In"/>
                        <button className="custom-button-google-sign-in" onClick={signInWithGoogle}>Sign In with Google</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;