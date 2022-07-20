export default function Cart({ cartItem, /* update qty? */ }) {
    const cartImage = `/assets/icons/${cartItem.item.id}.svg`
    console.log("My img", cartImage);
  return (
    <div>
      <li>
        <img
          className="cart--item-icon"
          src={cartImage}
          alt={cartItem.name}
        />
        <p>{cartItem.name}</p>
        <button className="quantity-btn remove-btn center">-</button>
        <span className="quantity-text center">{cartItem.quantity}</span>
        <button className="quantity-btn add-btn center">+</button>
      </li>
    </div>
  )
}
