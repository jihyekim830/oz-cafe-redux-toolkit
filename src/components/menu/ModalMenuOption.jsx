function ModalMenuOption({ name, optionValues, selectedOptions, onChange }) {
  return (
    <li className="option">
      {name}
      <ul>
        {optionValues.map((value) => (
          <li key={value}>
            <input
              type="radio"
              name={name}
              checked={selectedOptions[name] === value}
              onChange={() => onChange({ name, value })}
            />
            {value}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default ModalMenuOption;
