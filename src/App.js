import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState('0');

  const addCart = (item) => {
    const nameList = cart.map((cartItem) => cartItem.name);

    if (!nameList.includes(item.name)) {
      setCart([...cart, { ...item, count: 1 }]);
    } else {
      const newCart = [...cart];
      const foundItemIndex = newCart.findIndex(
        (value) => value.name === item.name
      );
      newCart[foundItemIndex].count += 1;
    }

    calculateTotal(item.price);
  };
  const calculateTotal = (price) => {
    setTotalPrice(Number(totalPrice) + Number(price));
  };

  const removeItem = (removedItem) => {
    const renewedCart = cart.filter((item) => item !== removedItem);
    setCart(renewedCart);
    const factor = removedItem.count;
    const newPrice = Number(totalPrice) - factor * Number(removedItem.price);
    setTotalPrice(newPrice);
  };

  const decreaseCount = (item) => {
    const newCart = [...cart];
    const foundItemIndex = newCart.findIndex(
      (value) => value.name === item.name
    );
    const foundItem = newCart[foundItemIndex];

    foundItem.count -= 1;
    setCart([...newCart]);
    setTotalPrice(Number(totalPrice) - Number(foundItem.price));
    if (foundItem.count === 0) {
      removeItem(item);
    }
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Header />
              <Products addCart={addCart} />
            </div>
          )}
        />
        <Route
          path="/cart"
          exact
          render={() => (
            <div>
              <Header />
              <Cart
                cart={cart}
                totalPrice={totalPrice}
                removeItem={removeItem}
                decreaseCount={decreaseCount}
              />
            </div>
          )}
        />
        <Route
          path="/:itemID"
          render={() => (
            <div>
              <Header />
              <ProductDetail />
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
