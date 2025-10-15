import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@features/cart/cartSlice';
import ModalWrapper from '@components/common/ModalWrapper';
import ModalMenuInfo from '@components/menu/ModalMenuInfo';
import ModalMenuOption from '@components/menu/ModalMenuOption';
import data from '@assets/data';

function OrderModal({ selectedMenu, closeModal }) {
  const menuOptions = Object.entries(data.options);
  const [selectedOptions, setSelectedOptions] = useState(
    getInitialOptions({ entries: menuOptions })
  );
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changeOption = ({ name, value }) =>
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  const handleBtnClick = () => {
    const item = { selectedOptions, quantity, menuId: selectedMenu.id };

    dispatch(addToCart({ item }));
    closeModal();
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <ModalMenuInfo menu={selectedMenu} />
      <ul className="options">
        {menuOptions.map(([name, optionValues]) => (
          <ModalMenuOption
            key={name}
            name={name}
            optionValues={optionValues}
            selectedOptions={selectedOptions}
            onChange={changeOption}
          />
        ))}
      </ul>
      <div className="submit">
        <label>
          개수
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(+e.target.value)}
          />
        </label>
        <button onClick={handleBtnClick}>장바구니 넣기</button>
      </div>
    </ModalWrapper>
  );
}

function getInitialOptions({ entries }) {
  return entries.reduce(
    (prev, [name, optionValue]) => ({ ...prev, [name]: optionValue[0] }),
    {}
  );
}

export default OrderModal;
