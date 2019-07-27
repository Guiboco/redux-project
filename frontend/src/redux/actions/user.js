import store from "../store.js";
import react from 'react';
import axios from 'axios';
import userReducer from '../reducers/user';



export const registerUser = async ({ name, email, password }) => {
const baseApiUrl =process.env.NODE_ENV === "production"? "http://pelisguille.herokuapp.com": 'http://localhost:3001';
    const res = await axios.post('http://localhost:3001/users/register', {
        name,
        email,
        password
    })
    const action = {
        type: 'REGISTER',
        payload: res.data.user,
    }
    localStorage.setItem('authToken', res.data.token) //añadimos el token al localStorage
    store.dispatch(action)
    return res;
}

export const getAllUsers = async () => {
    const baseApiUrl =process.env.NODE_ENV === "production"? "http://pelisguille.herokuapp.com": 'http://localhost:3001';
    const res = await axios.get(baseApiUrl + '/users/findAll');// hago la petición de todos los usuarios al backend
    const action = {
        type: 'GET_ALL',
        payload: res.data
    }
    console.log(action)
    store.dispatch(action);
}

export const updateProfile = async (user) => {
    try {
        const baseApiUrl =process.env.NODE_ENV === "production"? "http://pelisguille.herokuapp.com": 'http://localhost:3001';
        const token = localStorage.getItem('authToken') //sacamos del localStorage el token
        if (!token) throw new Error('you are not authentificated') //si no hay token le enviamos un error.
       await axios.patch(baseApiUrl + '/users/updateProfile', user, {
            headers: { 'authenticate': token }
        });
    } catch (error) {
        console.log(error);

    }
}


export const loginUser = async (name,password) =>{
    const baseApiUrl =process.env.NODE_ENV === "production"? "http://pelisguille.herokuapp.com": 'http://localhost:3001';
    const res = await axios.post(baseApiUrl + '/users/register',{
        name,
        password
    })
    const action = {
        type: 'LOGIN',
        payload:res.data.user,
    }
    localStorage.setItem('authToken', res.data.token)
    store.dispatch(action)
    return res;
}
// router.post('/login', (req, res) => {
//     UserModel.findOne({
//       $or: [ // checks if either the username or the email are in the database
//         { userName: req.body.usernameEmail },
//         { email: req.body.usernameEmail }
//       ]
//     })
//       .then(user => {
//         if (!user) return res.status(400).send('USER FAIL'); // if the user/email does not exist in the db responds with this message
//         console.log("esto es el usuario ", user)
//         if (user.confirmedEmail === false) return res.status(400).send('You have to verify your email'); //if the user exist but the email is not confirmed yet. It responds with this message.
//         bcrypt.compare(req.body.password, user.password).then(isMatch => { // the first argument is the plain text password entered by the user, the second argument is the password hash in the db.
//           if (!isMatch) return res.status(400).send('PASSWORD FAIL'); // if there is no match between the password entered by the user and the one in the db it responds with "Wrong Credentials"
//           const token = user.generateAuthToken(); // calls the method generateAuthToken from the UserModel
//           user['token'] = token; // here we create a user property which is going to contain the generated token
//           res.json(user); // json can be replaced with send, it does the same. If both the username/email and the password are correct, it responds with the user as a json.
//         }).catch(console.log);
//         res.redirect('/');
//       });
//   })