// import React from 'react';
// import Axios from 'axios';
// import { connect } from 'react-redux';
// import store from '../../../redux/store.js';

// class Users extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             users: [],

//         }
//     }
//     async componentDidMount(){
//         try {
//             const res= await Axios.get('http://localhost:3001/users/all')
//             this.setState({users:res.data});
//         } catch (error) {
//             console.log(error);
//         }
//        }

//     render(){
//         return(
//         <div className='Users'>
//             Estos son los usuarios:
//             {this.state.users.map(user =>(<div>{user.name}</div>))}
//         </div>
//         )}
// }


// const Users = props => {
//     async componentDidMount() {
//         try {
//             const res = await Axios.get('http://localhost:3001/users/all')
//             console.log('no peta');

//             store.dispatch({
//                 type: 'GET_ALL',
//                 payload: res.data
//             });
//             console.log('ni aqui');

//         } catch (error) {
//             console.log(error);
//         }
//     }

// render() {
//        return (
//        <div className="users">
//            Estos son los usuarios:
//            {this.props.users && this.props.users.map(user=>(
//            <div key={user._id}>
//                <h4>{user.name}</h4>
//                <span>{user.email}</span>
//            </div>
//            ))}
//        </div>
//        )
//    }
// }

// const mapStateToProps = state => {
//     return {
//         users: state.userReducer.users
//     }
// }

// export default connect(mapStateToProps)(Users);

/*esto es con con hook*/

import React, {useEffect} from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import store from '../../../redux/store.js';
import { getAllUsers } from '../../../redux/actions/user.js';
import './Users.css';

const Users = props => {
    useEffect( () => {
       getAllUsers()
        
           },[])
           return (
            <div className="users">
                <h1>Estos son los usuarios:</h1>
                {props.users && props.users.map(user=>(
                <div className='user' key={user._id}>
                    <h4>{user.name}</h4>
                    <span>{user.email}</span>
                </div>
                ))}
            </div>
            )
}

const mapStateToProps = state => {
    return {
        users: state.userReducer.users
    }
}

export default connect(mapStateToProps)(Users);