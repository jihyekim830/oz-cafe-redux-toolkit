import { useDispatch } from 'react-redux';
import { removeFromCart } from '@features/cart/cartSlice';

function CartItem({ id, item, options, quantity }) {
  const dispatch = useDispatch();
  const itemOptions = Object.entries(options);

  return (
    <li className="cart-item">
      <div className="cart-item-info">
        <img src={item.img} />
        <div>{item.name}</div>
      </div>
      <div className="cart-item-option">
        {itemOptions.map(([name, optionValue]) => (
          <div key={name}>
            {name} : {optionValue}
          </div>
        ))}
        <div>개수 : {quantity}</div>
      </div>
      <button
        className="cart-item-delete"
        onClick={() => dispatch(removeFromCart({ id }))}
      >
        삭제
      </button>
    </li>
  );
}

export default CartItem;
