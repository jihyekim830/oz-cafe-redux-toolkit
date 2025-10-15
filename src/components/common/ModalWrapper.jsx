function ModalWrapper({ closeModal, children }) {
  return (
    <section className="modal-backdrop" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </section>
  );
}

export default ModalWrapper;
