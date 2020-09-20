import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

const SignIn  = ({googleSignInStart,emailSignInStart }) => {

    const [credentials,setCredentials] = useState({email: '',password: ''});

    const {email, password} = credentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(credentials);
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setCredentials({...credentials, [name]: value})
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    type='email' 
                    name='email' 
                    value={email} 
                    handleChange={handleChange}
                    label='email'
                    required 
                />
                <FormInput 
                    type='password' 
                    name='password' 
                    value={password} 
                    handleChange={handleChange} 
                    label='password'
                    required 
                />
                <div className='buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (credentials) => dispatch(emailSignInStart(credentials))
})
export default connect(null, mapDispatchToProps)(SignIn);