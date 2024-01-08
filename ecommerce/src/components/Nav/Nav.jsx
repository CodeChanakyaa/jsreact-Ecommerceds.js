import './Nav.css'
import { BsFillBagHeartFill, BsFillCartCheckFill } from 'react-icons/bs'
import { BiLogIn, BiUserCircle, BiSearchAlt } from 'react-icons/bi'
// import Img from '../../assets/logo-removebg-preview.png'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import dynamicData from '../Manager/DynamicData.json'

const navListData = dynamicData.navlist

const Nav = (props) => {

    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
    const [search, setSearch] = useState("");

    return (
        <>
            <div className="main-header">
                <div className="container">
                    <div className="logo">
                        {/* <img src={Img} alt="logo.png" /> */}
                        <Link to="/"><p>{props.data.logo}</p></Link>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder={props.data.searchText} onChange={(e) => setSearch(e.target.value)} />
                        <Link to="/product"><button onClick={() => props.searchBtn(search)}><BiSearchAlt className='search' /></button></Link>
                    </div>
                    <div className="icon">
                        <div className="account">
                            <div className="user-icon">
                                {
                                    isAuthenticated ? (
                                        <>
                                            <button><BiUserCircle className='u-icon' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} /></button>
                                            <p>Hello, {user.name}</p>
                                        </>
                                    )
                                        : (
                                            <button><BiLogIn className='u-icon' onClick={() => loginWithRedirect()} /></button>
                                        )
                                }
                            </div>
                        </div>
                        <div className="other-icon">
                            <Link to="/"><BsFillBagHeartFill className='o-icon' /></Link>
                            <Link to="/cart"><BsFillCartCheckFill className='o-icon' /></Link>
                        </div>
                    </div>
                </div>
            </div >
            <div className="header">
                <ul className='nav'>
                    {
                        navListData.map((e, index) => {
                            return (
                                <li onClick={() => props.searchBtn(e.category)} key={index}>
                                    <Link className='link' to={e.path}>
                                        <img src={e.image} alt="" />
                                        <p>{e.title}</p>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Nav