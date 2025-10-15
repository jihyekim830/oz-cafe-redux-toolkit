function CategoryMenuItem({ item, onClick }) {
  return (
    <li className="item" onClick={onClick}>
      <img src={item.img} />
      <section>
        <div>{item.name}</div>
        <div>{item.price}원</div>
      </section>
    </li>
  );
}

export default CategoryMenuItem;
