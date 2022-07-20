import { useState } from 'react'

import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'

import Store from './Components/Store'
import Cart from './Components/Cart'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

console.log(initialStoreItems)

export default function App() {
  const [cartItems, setCartItems] = useState([])
  // const []
  // cart should be an array?
  // should use map to copy and update the cart each time it changes

  const addToCart = item => {
    // console.log('Cart', cartItems)
    let cartItem = cartItems.find(cartItem => {
      return cartItem.item.id === item.id
    })
    if (cartItem !== undefined) {
      // alert("Hello?")
      cartItem.quantity++
      const updateCart = [...cartItems]
      setCartItems(updateCart)
    } else {
      cartItem = {
        item: item,
        quantity: 1
      }
      const newCart = [...cartItems, cartItem]
      // console.log('New Cart, Cart Item', newCart, cartItem)
      setCartItems(newCart)
    }

    // use the id as a key to give the the item a 'stable identity'
    // pass the id here from the addToCart onClick to check during the process?
    // PROCESS
    // need to loop through cart checking if an item is already inside
    // - if yes, update existing cart item qty
    // - else, add item to cart with qty of 1
  }

  const reduceQty = item => {
    console.log('Item id', item)
    let cartItem = cartItems.find(cartItem => {
      return cartItem.id === item.id
    })
    if (cartItem.quantity === 1) {
      // remove item at 0 qty
    } else {
      cartItem.quantity--
    }
    const updateQty = [...cartItems]
    // console.log('New Cart, Cart Item', newCart, cartItem)
    setCartItems(updateQty)
  }

  const increaseQty = item => {
    console.log('Item id', item)
    let cartItem = cartItems.find(cartItem => {
      return cartItem.id === item.id
    })
      cartItem.quantity++
      const updateCart = [...cartItems]
      setCartItems(updateCart)
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {initialStoreItems.map((storeItem, itemId) => {
            return (
              <Store key={itemId} storeItem={storeItem} addToCart={addToCart} />
            )
          })}
        </ul>
      </header>

      <main id="cart">
        <h2>Your Basket</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((cartItem, itemId) => {
              return (
                <Cart
                  key={itemId}
                  cartItem={cartItem}
                  reduceQty={reduceQty}
                  increaseQty={increaseQty}
                />
              )
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
