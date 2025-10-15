import { useSelector } from 'react-redux';
import EmptyState from '@components/common/EmptyState';
import Category from '@components/menu/Category';

function Menu() {
  const menu = useSelector((state) => state.menu);
  const categories = Object.keys(menu ?? {});

  if (!menu) {
    return <EmptyState>메뉴 정보가 없어요!</EmptyState>;
  }

  return (
    <>
      {categories.map((category) => (
        <Category key={category} category={category} menu={menu[category]} />
      ))}
    </>
  );
}

export default Menu;
