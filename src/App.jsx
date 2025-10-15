import { Route, Routes } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import Menu from '@pages/Menu';
import Cart from '@pages/Cart';
import '@styles/App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
