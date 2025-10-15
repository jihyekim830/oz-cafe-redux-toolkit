import { useSelector } from 'react-redux';
import EmptyState from '@components/common/EmptyState';
import CartItem from '@components/cart/CartItem';

function Cart() {
  const menu = useSelector((state) => state.menu);
  const cart = useSelector((state) => state.cart);
  const mergedMenu = !menu ? [] : [...menu.커피, ...menu.논커피];

  if (!menu) {
    return <EmptyState>메뉴 정보가 없어요!</EmptyState>;
  }

  if (cart.length === 0) {
    return <EmptyState>장바구니에 담긴 상품이 없어요!</EmptyState>;
  }

  return (
    <>
      <h2>장바구니</h2>
      <ul className="cart">
        {cart.map((item) => (
          <CartItem
            key={item.cartId}
            id={item.cartId}
            item={mergedMenu.find((menu) => menu.id === item.menuId)}
            options={item.selectedOptions}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </>
  );
}

export default Cart;
