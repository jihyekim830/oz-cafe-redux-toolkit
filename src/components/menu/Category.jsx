import { useState } from 'react';
import CategoryMenuItem from '@components/menu/CategoryMenuItem';
import OrderModal from '@components/menu/OrderModal';

function Category({ category, menu }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openModal = ({ menu }) => {
    setSelectedMenu(menu);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedMenu(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section>
        <h2>{category}</h2>
        <ul className="menu">
          {menu.map((item) => (
            <CategoryMenuItem
              key={item.name}
              item={item}
              onClick={() => openModal({ menu: item })}
            />
          ))}
        </ul>
      </section>
      {isModalOpen && (
        <OrderModal selectedMenu={selectedMenu} closeModal={closeModal} />
      )}
    </>
  );
}

export default Category;
