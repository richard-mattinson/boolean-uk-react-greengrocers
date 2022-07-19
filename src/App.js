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

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {initialStoreItems.map((storeItem, id) => {
            return (
            <Store 
            key={id}
            storeItem={storeItem}/>
            )
          })
        }
        </ul>
      </header>

      <main id="cart">
        <h2>Your Basket</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* <Cart /> */}
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
