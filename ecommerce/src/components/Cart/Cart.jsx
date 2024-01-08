import { Link, useNavigate } from 'react-router-dom'
import './Cart.css'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Cart = ({ cart, setCart }) => {

    const goto = useNavigate();

    const incre = (product) => {
        setCart(
            cart.map((e) => {
                return e.id === product.id ? { ...product, qty: product.qty + 1 } : e;
            })
        )
    }

    const decre = (product) => {
        setCart(
            cart.map((e) => {
                return e.id === product.id ? { ...product, qty: product.qty - 1 } : e;
            })
        )
    }

    const remove = (product) => {
        setCart(
            cart.filter((e) => {
                return e.id !== product.id;
            })
        )
    }

    // total price
    const totalPrice = cart.reduce((price, item) => price + item.price * item.qty, 0);

    // total discounted value
    const totalDiscount = cart.reduce((discounted, item) => discounted + ((((item.price * item.qty) * 100) / (100 - item.discountPercentage)) - item.price * item.qty), 0)

    return (
        <div className='cart'>
            {
                cart.length > 0 ? (
                    <>
                        <div className="addresses">
                            <p>From Saved Address</p>
                            <Link to=""><button>Enter Delivery Location</button></Link>
                        </div>

                        <div className="item-wrap">
                            {
                                cart.map((e) => {
                                    return (
                                        <div key={e.id}>
                                            <div className="item">
                                                <div className="left">
                                                    <img src={e.thumbnail} alt="" />
                                                </div>
                                                <div className="right">
                                                    <h5>{e.title}</h5>
                                                    <p>{e.brand}</p>
                                                    <div className="mrp">
                                                        <span className='p'>₹{e.price}</span><span>{e.discountPercentage}% Off 2 offers applied</span>
                                                    </div>
                                                    <div className="other">
                                                        <div className="plus"><button disabled={e.qty <= 1 ? true : false} onClick={() => decre(e)}><AiOutlineMinus /></button><input readOnly value={e.qty} type="text" /><button onClick={() => incre(e)}><AiOutlinePlus /></button></div>
                                                        <p>SUB TOTAL : ₹{e.price * e.qty}</p>
                                                        <button onClick={() => remove(e)}>REMOVE</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    );
                                })
                            }
                        </div>

                        <div className="price">
                            <h3>Price Details</h3>

                            <hr />
                            <div className="detail">
                                <div className="o">
                                    <p>Price ( {cart.length} items )</p>
                                    {
                                        cart.length > 0 && (
                                            <p style={{ fontWeight: "bold" }}>₹{totalPrice}</p>
                                        )
                                    }
                                </div>
                                <div className="t">
                                    <p>Discount</p>
                                    <p style={{ color: "green" }}>- {Math.round(totalDiscount)}</p>
                                </div>
                                <div className="f">
                                    <p>Delivery Charges</p>
                                    <p style={{ color: "green" }}>Free</p>
                                </div>
                            </div>

                            <hr />
                            <div className="total">
                                <h3>Total Amount</h3>
                                <div className="order">
                                    <h3>₹{totalPrice}</h3>
                                    <button>PLACE ORDER</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='empty'>
                            <p>Missing Cart Items ?</p>
                            <small>Login to see the items you added previously</small> <br />
                            <button onClick={() => goto("/product")}>Shopping Now</button>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Cart