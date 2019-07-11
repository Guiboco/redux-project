import React from 'react';
import axios from 'axios';
import './Register.css';
import { isEmail } from 'validator'
import store from '../../../redux/store.js';
import {registerUser} from '../../../redux/actions/user'
class Register extends React.Component { //componente de clase

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname: "",
            email: "",
            password: "",
            errorEmail: "",
            errorPassword: "",
            backendInfo: '',
        }
        this.emailInput = React.createRef()
    }

    handleSubmit = async event => {
        event.preventDefault();
        try {
            await this.validateForm();
            if (this.state.errorEmail.length === 0 && this.state.errorPassword.length === 0) {
                const res= await registerUser(this.state)
                this.setState({ backendInfo: res.data.info })
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    validateForm = () => {
        // this.validateName();
        return new Promise((resolve, rejects) => {
            this.validateEmail();
            this.validatePassword();
            resolve('form validado');

        })
    }
    validatePassword = () => {
        console.log(this.state.password)
        const password = this.state.password
        if (password.length === 0) this.setState({ validForm: false, errorPassword: "password is required" })
        else if (password.length < 8) {
            this.setState({ validForm: false, errorPassword: "password must be at least 8 characters" })
        } else { this.setState({ errorPassword: "" }) }
    }
    validateEmail = () => {
        if (this.state.email.length === 0) this.setState({ validForm: false, errorEmail: "Email is required" });
        else if (!isEmail(this.state.email)) this.setState({ validForm: false, errorEmail: "must be an email" });
        else { this.setState({ errorEmail: "" }) };
    }

    handleChange = event => this.setState({ [event.target.name]: event.target.value })

    render() {

        if (this.props.history.location.hash === "#email" && this.emailInput.current) this.emailInput.current.focus()
        return (
            <div className='register'>

                <div className='welcomeguest'>Welcome Guest</div>

                <form className="registerbox1" onSubmit={this.handleSubmit}>

                    <input type="text" name="name" placeholder="Introduzca su nombre"
                        onChange={this.handleChange} value={this.state.name} />

                    <input type="text" name="email" placeholder="Introduzca su email"
                        onChange={this.handleChange} value={this.state.email} ref={this.emailInput} />

                    <div className="error"> {this.state.errorEmail} </div>

                    <input type="password" name="password" placeholder="Introduzca su contraseña"
                        onChange={this.handleChange} />

                    <div className="error"> {this.state.errorPassword} </div>

                    <button type="submit">Enviar</button>
                </form>
                {this.state.backendInfo}
            </div>
        )

    }
}
export default Register;