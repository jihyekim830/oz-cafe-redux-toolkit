import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">☕ 오즈 카페</Link>
      </h1>
      <nav>
        <Link to="/">메인</Link>
        <Link to="/cart">장바구니</Link>
      </nav>
    </header>
  );
}

export default Header;
