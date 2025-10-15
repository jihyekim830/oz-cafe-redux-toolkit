function ModalMenuInfo({ menu }) {
  return (
    <div className="modal-item">
      <img src={menu.img} />
      <div>
        <h3>{menu.name}</h3>
        <div>{menu.description}</div>
      </div>
    </div>
  );
}

export default ModalMenuInfo;
