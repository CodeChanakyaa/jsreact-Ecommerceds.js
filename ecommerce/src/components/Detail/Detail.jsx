import './Detail.css'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillThunderbolt } from 'react-icons/ai'
import { IoMdStar } from 'react-icons/io'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import ProductList from '../Product/Products.json'

const Detail = ({ addToCart }) => {
    {/* data */ }

    // getting id from url
    const { id } = useParams();

    // find product detail by id
    const data = ProductList.find((e) => {
        return e.id == id;
    })

    // set main view
    const [view, setView] = useState(data.images[0]);

    const goto = useNavigate();

    // total discounted value
    const mrp = ((data.price * 100) / (100 - data.discountPercentage));

    return (
        <div className='detail'>
            <div className="container">
                <div className="left">
                    <div className="image-box">
                        <div className="images">
                            {
                                data.images.map((e, index) => {
                                    return (
                                        <img onMouseOverCapture={() => setView(e)} key={index} src={e} alt="" />
                                    )
                                })
                            }
                        </div>

                        <div className="main">
                            <img src={view} alt="" />
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={() => { addToCart(data); goto("/cart"); }} className='btn-1'><FaShoppingCart className='icon' />ADD TO CART</button>
                        <button className='btn-2'><AiFillThunderbolt className='icon' />BUY NOW</button>
                    </div>
                </div>

                <div className="right">
                    <small>{data.brand}</small>
                    <h5>{data.title}</h5>
                    <span className='h3'>₹{data.price}</span> <strike className="mrp">₹{Math.round(mrp)}</strike> <span className='discount'>{data.discountPercentage}% Off</span>
                    <div>
                        <h5>Product Description :</h5>
                        <p>{data.description}</p>
                    </div>
                    <span className='rating'><span>{data.rating} <IoMdStar className='icon' /></span> ratings & reviews | </span> <span className='stock'>Only {data.stock} stocks left for this item</span>
                    <p className='color' style={{ backgroundColor: data.color }}></p>
                    <span className="check">
                        <input type="text" placeholder='Enter delivery pincode' name="" id="" />
                        <button>Check</button>
                    </span>
                    <p className='delivery'><strike>₹40</strike> Free Delivery Available</p>
                </div>
            </div>
        </div>
    )
}

export default Detail