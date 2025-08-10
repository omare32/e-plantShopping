import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector
import ProductList from './ProductList';
import CartItem from './CartItem'; // Import the CartItem component
import AboutUs from './AboutUs';
import './App.css';

function App() {
  // State to manage which view is currently active
  const [currentView, setCurrentView] = useState('landing');

  // Get cart items from the Redux store
  const cartItems = useSelector(state => state.cart.items);

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navigateTo = (view) => {
    setCurrentView(view);
  };

  // The navigation bar component to be displayed on product and cart pages
  const Navbar = () => (
    <nav className="navbar">
      <div className="tag" onClick={() => navigateTo('landing')}>
        <a href="#home">
          <div className="tag_home_link">
            <h3>Paradise Nursery</h3>
            <p>Where Green Meets Serenity</p>
          </div>
        </a>
      </div>
      <ul className="ul">
        <div className="luxury">
          <li onClick={() => navigateTo('products')}>
            <a href="#plants">Plants</a>
          </li>
        </div>
        <div className="cart" onClick={() => navigateTo('cart')}>
          <a href="#cart">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
            </svg>
            {totalQuantity > 0 && <span className="cart_quantity_count">{totalQuantity}</span>}
          </a>
        </div>
      </ul>
    </nav>
  );

  return (
    <div className="app-container">
      {currentView === 'landing' && (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1>Welcome To Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={() => navigateTo('products')}>
                Get Started
              </button>
            </div>
            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      )}

      {currentView === 'products' && (
        <div>
          <Navbar />
          <ProductList />
        </div>
      )}

      {currentView === 'cart' && (
        <div>
          <Navbar />
          <CartItem onContinueShopping={() => navigateTo('products')} />
        </div>
      )}
    </div>
  );
}

export default App;