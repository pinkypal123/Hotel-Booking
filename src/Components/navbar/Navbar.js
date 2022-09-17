import { useContext } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { userContext } from '../../Context/AuthContext'
import './Navbar.css'
const Navbar = () => {
    const location=useLocation()
    const navigate = useNavigate()
    const loginUser=useContext(userContext)
    const isLoginUSer=loginUser.user.firstName?true:false;
    const loginPage = () => {
        navigate('/login')
    }
    function home(){
navigate('/')
    }
    return (
        // <div className="navbar">
            <div className="navContainer">
                <span className="logo" onClick={home}>TajHotel</span>
                <div className="navItems">
                    {/* <button className="navButton" onClick={loginPage}>Login</button> */}
                    {/* <button className="navButton">LogOut</button> */}
                    {
                        isLoginUSer?<button className='navButton'>Welcome {loginUser.user.firstName}</button>:<button className="navButton" onClick={loginPage}>Login</button>
                    }
                </div>
            </div>
        // </div>
    )
}
export default Navbar;