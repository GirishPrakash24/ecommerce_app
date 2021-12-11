import React from 'react';

import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

import { auth, signInWithGoogle } from '../../assets/firebase/firebsae.utils';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(Props) {
        super(Props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;


        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

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

                    <div className='buttons'>
                        <CustomButton type="submit" > Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In using Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;