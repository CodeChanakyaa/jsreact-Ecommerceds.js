import './Footer.css'
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="about">
          <div className="logo">
            <Link className="f-link" to="/"><p>{props.data.logo}</p></Link>
          </div>
          <div className="detail">
            <p>{props.data.detailText}</p>
            <div className="icon">
              <Link className="f-link" to={props.data.twitter}><li><BsTwitter className='f-icon' /></li></Link>
              <Link className="f-link" to={props.data.youtube}><li><BsYoutube className='f-icon' /></li></Link>
              <Link className="f-link" to={props.data.instagram}><li><BsInstagram className='f-icon' /></li></Link>
              <Link className="f-link" to={props.data.facebook}><li><BsFacebook className='f-icon' /></li></Link>
            </div>
          </div>
        </div>
        <div className="page">
          <h3>Pages</h3>
          <ul>
            <Link className="f-link" to="/"><li>Home</li></Link>
            <Link className="f-link" to="/about"><li>About</li></Link>
            <Link className="f-link" to="/contact"><li>Contact</li></Link>
            <Link className="f-link" to="/product"><li>Wholesale</li></Link>
          </ul>
        </div>
        <div className="policy">
          <h3>Consumer Policy</h3>
          <ul>
            <Link className="f-link" to="#"><li>Terms of use</li></Link>
            <Link className="f-link" to="#"><li>Security</li></Link>
            <Link className="f-link" to="#"><li>Privacy</li></Link>
            <Link className="f-link" to="#"><li>Cancellation & Returns</li></Link>
          </ul>
        </div>
        <div className="help">
          <h3>Help</h3>
          <ul>
            <Link className="f-link" to="#"><li>Payments</li></Link>
            <Link className="f-link" to="#"><li>Shipping</li></Link>
            <Link className="f-link" to="#"><li>FAQ</li></Link>
            <Link className="f-link" to="#"><li>Cancellation & Returns</li></Link>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default Footer