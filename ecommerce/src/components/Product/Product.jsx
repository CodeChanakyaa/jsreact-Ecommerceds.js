import { useState } from 'react'
import './Product.css'
import { useAuth0 } from "@auth0/auth0-react";
import ProductList from './Products.json'
import { AiFillStar } from 'react-icons/ai'
import { BsFillCartPlusFill, BsFillHeartFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

const Product = ({ product, setProduct, addToCart }) => {
  {/* detailHandler */ }

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const [progress, setProgress] = useState(250);
  const goto = useNavigate();


  // category filter
  const filterCategory = (pcategory) => {
    const updatedList = ProductList.filter((e) => {
      return e.category === pcategory;
    })
    setProduct(updatedList);
  }

  // all products
  const allProducts = () => {
    setProduct(ProductList);
  }


  // brand filter
  const filterBrands = (pbrand) => {
    const updatedList = ProductList.filter((e) => {
      return e.brand === pbrand;
    })
    setProduct(updatedList);
  }


  // rating filter
  const filterRating = (prating) => {
    const updatedList = ProductList.filter((e) => {
      return Math.floor(e.rating) == prating;
    })
    setProduct(updatedList);
  }


  // price filter
  const filterPrice = (prange) => {
    setProgress(prange);
    const updatedList = ProductList.filter((e) => {
      return (e.price >= prange && e.price < (prange + 500));
    })
    setProduct(updatedList);
  }


  // price filter by progress bar
  const filterProgress = (prange) => {
    const updatedList = ProductList.filter((e) => {
      return (e.price >= Number(prange) && e.price < (Number(prange) + 500));
    })
    setProduct(updatedList);
  }


  // discount filter
  const filterDiscount = (pdiscount) => {
    const updatedList = ProductList.filter((e) => {
      return (Math.ceil(e.discountPercentage) >= pdiscount && e.discountPercentage < (pdiscount + 10));
    })
    setProduct(updatedList);
  }


  // color filter
  const filterColor = (pcolor) => {
    const updatedList = ProductList.filter((e) => {
      return e.color === pcolor;
    })
    setProduct(updatedList);
  }

  return (
    <div className='products'>
      <div className="container">
        <div className="filter">
          <h3>Filters</h3>
          <hr />
          <div className="categories">
            <h5>CATEGORIES</h5>
            <ul>
              <li onClick={() => { allProducts() }}>All</li>
              <li onClick={() => { filterCategory("mobiles") }}>Mobiles & Accessories</li>
              <li onClick={() => { filterCategory("fashion") }}>Skincare & Beauty Products</li>
              <li onClick={() => { filterCategory("laptops") }}>Laptops & Accessories</li>
              <li onClick={() => { filterCategory("groceries") }}>Grocery & Foods</li>
              <li onClick={() => { filterCategory("home-decoration") }}>Decors & Householdes</li>
            </ul>
          </div>

          <hr />
          <div className="brands">
            <h5>BRANDS</h5>
            <ul>
              <li onClick={() => { allProducts() }}>All</li>
              <li onClick={() => { filterBrands("adidas") }}>Adidas Wearings</li>
              <li onClick={() => { filterBrands("bata") }}>Bata Shoes</li>
              <li onClick={() => { filterBrands("$sign") }}>$ign Products</li>
              <li onClick={() => { filterBrands("nike") }}>Nike Fashionings</li>
              <li onClick={() => { filterBrands("apple") }}>Apple Products & Accessories</li>
            </ul>
          </div>

          <hr />
          <div className="price">
            <span>250</span><input type="range" onChangeCapture={(e) => filterProgress(e.target.value)} min={250} max={2500} step="10" id='range' value={progress} onChange={(e) => setProgress(e.target.value)} /><span>{progress}+</span>
            <h5>PRICE</h5>
            <ul>
              <li onClick={() => { filterPrice(0) }}>500 or less</li>
              <li onClick={() => { filterPrice(500) }}>From 500 - 1000</li>
              <li onClick={() => { filterPrice(1000) }}>From 1000 - 1500</li>
              <li onClick={() => { filterPrice(1500) }}>From 1500 - 2000</li>
              <li onClick={() => { filterPrice(2000) }}>From 2000 - 2500</li>
              <li onClick={() => { allProducts() }}>2500 or more</li>
            </ul>
          </div>

          <hr />
          <div className="colors">
            <h5>COLOURS</h5>
            <ul>
              <li className='white' onClick={() => filterColor("white")}>White</li>
              <li className='black' onClick={() => filterColor("black")}>Black</li>
              <li className='navy' onClick={() => filterColor("navy")}>Navy</li>
              <li className='orange' onClick={() => filterColor("orange")}>Orange</li>
              <li className='yellow' onClick={() => filterColor("yellow")}>Yellow</li>
            </ul>
          </div>

          <hr />
          <div className="rating">
            <h5>RATING</h5>
            <ul>
              <li onClick={() => { filterRating(1) }}>1/5 & above</li>
              <li onClick={() => { filterRating(2) }}>2/5 & above</li>
              <li onClick={() => { filterRating(3) }}>3/5 & above</li>
              <li onClick={() => { filterRating(4) }}>4/5 & above</li>
              <li onClick={() => { filterRating(5) }}>5/5 & above</li>
            </ul>
          </div>

          <hr />
          <div className="discount">
            <h5>Discounts</h5>
            <ul>
              <li onClick={() => filterDiscount(10)}>10% or more </li>
              <li onClick={() => filterDiscount(20)}>20% or more </li>
              <li onClick={() => filterDiscount(30)}>30% or more </li>
              <li onClick={() => filterDiscount(40)}>40% or more </li>
              <li onClick={() => filterDiscount(50)}>50% or more </li>
              <li onClick={() => filterDiscount(60)}>60% or more </li>
              <li onClick={() => filterDiscount(70)}>70% or more </li>
              <li onClick={() => filterDiscount(80)}>80% or more </li>
            </ul>
          </div>

          <hr />
          <div className="clear">
            <button onClick={() => { window.location.reload(); }}>CLEAR ALL</button>
          </div>
        </div>

        <div className="product-box">
          <div className="top">
            <div className="heading">
              <span className='h4'>Products </span><span>( Showing total {product.length} products )</span>
            </div>

            <div className="sort">
              <label htmlFor="sortby">Short By : </label>
              <select name="sortby" id="sortby">
                <option value="1">Popularity</option>
                <option value="2">Price - Low to High</option>
                <option value="3">Price - High to Low</option>
                <option value="4">Newest First</option>
                <option value="5">Stock Available</option>
              </select>
            </div>
          </div>

          <div className="wrap">
            {
              product.map((e) => {

                // cart ref
                // const likeRef = useRef();
                // ref={likeRef}
                // onClick={() => { likeRef.current.style.color = "red"; }}

                return (
                  <div key={e.id} className="product">
                    <div className="navigate" onClick={() => { goto(`/detail/${e.id}`) }}> {/* detailHandler(e), */}
                      <div className="image">
                        <img src={e.thumbnail} alt="" />
                      </div>
                      <div className="text">
                        <p className="title">{e.title.slice(0, 18)}</p>
                        <span className='rating'>{e.rating} <AiFillStar className='star' /></span>
                        <div className='p'>
                          <span className="price">₹{e.price}</span>
                          <span className='discount'>{e.discountPercentage}% Off</span>
                        </div>
                      </div>
                    </div>
                    <div className="icon">
                      <li>
                        {
                          isAuthenticated ? (
                            <Link to="/cart">
                              <BsFillCartPlusFill onClick={() => addToCart(e)} />
                            </Link>
                          ) : (
                            <BsFillCartPlusFill onClick={() => loginWithRedirect()} />
                          )
                        }
                      </li>
                      <li ><BsFillHeartFill /></li>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default Product