export default function Store({ storeItem, addToCart }) {
  const storeImage = `/assets/icons/${storeItem.id}.svg`
  const storeName = storeItem.name
  return (
    <li>
      <div className="store--item-icon">
        <img src={storeImage} alt={storeName} />
      </div>
      <button onClick={() => addToCart(storeItem)}>Add to Basket</button>
    </li>
  )
}
