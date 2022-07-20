export default function Cart({ cartItem, reduceQty, increaseQty }) {
    const cartImage = `/assets/icons/${cartItem.item.id}.svg`;
    const cartName = cartItem.item.name;
    const cartQuantity = cartItem.quantity
    // console.log("My img", cartImage);
  return (
    <div>
      <li>
        <img
          className="cart--item-icon"
          src={cartImage}
          alt={cartName}
        />
        <p id="cart--item-name">{cartName}</p>
        
        <button 
        className="quantity-btn remove-btn center"
        onClick={() => reduceQty(cartItem)}>-</button>
        
        <span className="quantity-text center">{cartQuantity}</span>
        
        <button 
        className="quantity-btn add-btn center"
        onClick={() => increaseQty(cartItem)}>+</button>
      </li>
    </div>
  )
}
