export default function Store({ storeItem, addToCart }) {

  return (
    <li>
      <div className="store--item-icon">
        <img src={`/assets/icons/${storeItem.id}.svg`} alt={storeItem.name} />
      </div>
      <button /*onClick={add item to cart}*/>Add to Basket</button>
    </li>
  )
}
