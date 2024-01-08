import './App.css'
import Nav from './components/Nav/Nav'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ProductList from './components/Product/Products.json'
import { useEffect, useState } from 'react'
import Cart from './components/Cart/Cart'
import Detail from './components/Detail/Detail'
import dynamicData from '../src/components/Manager/DynamicData.json'

const navbarData = dynamicData.navbar

const footerData = dynamicData.footer

function App() {

  // product page state
  const [product, setProduct] = useState(ProductList);

  // cart
  const [cart, setCart] = useState([]);

  // get cart data from local storage on every rerender
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    cartItems && setCart(cartItems);
  }, [])

  // save cart data on local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // product detail data | no refresh
  // const [detailData, setDetailData] = useState();

  // add to cart
  const addToCart = (product) => {
    const checkExist = cart.find((e) => {
      return e.id === product.id;
    });

    if (checkExist) {
      alert("Item already added to cart.");
    }
    else {
      setCart([...cart, { ...product, qty: 1 }])
    }
  };

  // search filter
  const searchBtn = (topic = "") => {
    const updatedList = ProductList.filter((e) => {
      return (e.title.toLowerCase().includes(topic.toLowerCase()) || e.category.toLowerCase().includes(topic.toLowerCase()));
    })
    setProduct(updatedList);
  }

  // detail handler | no refresh
  // const detailHandler = (product) => {
  //   const itemData = ProductList.find((e) => {
  //     return e.id === product.id;
  //   })
  //   setDetailData(itemData);
  // }

  return (
    <Router>
      <Nav searchBtn={searchBtn} data={navbarData} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product addToCart={addToCart} product={product} setProduct={setProduct} />} /> {/* detailHandler={detailHandler} */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/detail/:id' element={<Detail addToCart={addToCart} />} /> {/* data={detailData} */}
      </Routes>
      <Footer data={footerData} />
    </Router>
  )
}

export default App
