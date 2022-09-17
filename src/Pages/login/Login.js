
import { useContext, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom'
import Navbar from '../../Components/navbar/Navbar'
import { userContext } from '../../Context/AuthContext';
import './Login.css'
export default function Login() {
    const [user,setUser]=useState({
        firstName:'',
        lastName:''
    })
    const navigate = useNavigate();
    const location = useLocation();
    const loginUser = useContext(userContext)
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: ''
    })
    const login = () => {
        navigate(location.state.previousPath)
        loginUser.setUser(userInfo)
        
    }
    const logout = () => {
        navigate('/')
        loginUser.setUser(user)
    }
    return (
        <>

            <Navbar />
            <div className="container">
                <label>FirstName</label>
                <input type="text" onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}></input>
                <label>LastName</label>
                <input type="text" onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}></input>
                <label>Email</label>
                <input type="email"></input>
                <label>Password</label>
                <input type="password"></input>
                <div className='btn'>
                    <span onClick={login}>Login</span>
                    <span onClick={logout}>LogOut</span>
                </div>
            </div>

        </>
    )
}