import React from 'react';

import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

import { signInWithGoogle } from '../../assets/firebase/firebsae.utils';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(Props) {
        super(Props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });

    };

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required />

                    <FormInput name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required />


                    <CustomButton type="submit" > Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} >
                        {' '}
                        Sign In using Google {' '}</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn;