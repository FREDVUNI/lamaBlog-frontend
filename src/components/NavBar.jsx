import React,{ useContext } from 'react'
import Logo from "../img/logo.png"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

const NavBar = () => {
    const { currentUser,logout } = useContext(AuthContext)
    // console.log(currentUser.username)
    // const [openMenu,setOpenMenu] = useState(false)
     
    return (
        <>
        <div className="navbar">
            <div className="navBar__bars">
                <i className="fas fa-bars"></i>
            </div>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo"/>
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className="link" to="/?cat=science">
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className="link" to="/?cat=technology">
                        <h6>TECHNOLOGY</h6>
                    </Link>
                    <Link className="link" to="/?cat=cinema">
                        <h6>CINEMA</h6>
                    </Link>
                    <Link className="link" to="/?cat=design">
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className="link" to="/?cat=food">
                        <h6>FOOD</h6>
                    </Link>
                    <span className="spanTags">{ currentUser?.username }</span>
                    {currentUser ? <span onClick={logout}>Logout</span>: <Link className="link" to="/login">LogIn</Link>}
                    <span className="write">
                        <Link className="link" to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar
