import React, {redirect} from 'react';
import './Login.css';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",

        }
    }

    loginUser = async (e) => {
        e.preventDefault();
        console.log("aqui")
        const name = this.state.name;
        const password = this.state.password;
        console.log(name, password);
        const res = await axios.post('http://localhost:3001/users/login', {
            name,
            password
        })
        console.log(res);
        // const action = {
        //     type: 'LOGIN',
        //     payload: res.data.user,
        // }
        localStorage.setItem('authToken', res.data.token)
        // store.dispatch(action)
        // return res;
        setTimeout(() => {
            this.props.history.push('/profile')
        }, 2000)
    }

    handleChange =async e => {
        await this.setState({[e.target.name] : e.target.value});
        console.log(this.state);
    }

    render() {
        return (<div>
            <div className='login'>
                <div className='welcomeuser'>Welcome User</div>
                <div className='loginbox1'>
                    <form className="registerbox1" onSubmit={this.loginUser}>
                        <input type="text" name="name" placeholder="Introduzca su nombre"
                        onChange={this.handleChange} value={this.state.name} 
                        />
                        <input type="password" name="password" placeholder="Introduzca su contraseña"
                        onChange={this.handleChange} 
                        />
                        <button type="submit">entrar</button>
                        <a id="noRegistrado" href="./register">
                            Registrarse</a>
                        <a id="recovery" href="./recovery">
                            ¿Olvidaste tu contraseña?</a>
                        <div id="fondoLogin"></div>
                    </form>
                </div>
            </div>
        </div>)
    }
}
export default Login;