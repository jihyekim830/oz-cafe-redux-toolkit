function addOrUpdateToCart({ state, item }) {
  const existingItem = getExistingItem({
    state,
    menuId: item.menuId,
    options: item.selectedOptions,
  });

  if (existingItem)
    return getUpdatedCartWithQuantity({
      state,
      existingItem,
      quantity: item.quantity,
    });

  return [...state, { ...item, cartId: Date.now() }];
}

function getUpdatedCartWithQuantity({ state, existingItem, quantity }) {
  return state.map((item) => {
    if (item.cartId !== existingItem.cartId) return item;

    return {
      ...existingItem,
      quantity: existingItem.quantity + quantity,
    };
  });
}

function getExistingItem({ state, menuId, options }) {
  return state.find(
    (item) =>
      item.menuId === menuId &&
      isOptionsSame({
        optionsA: item.selectedOptions,
        optionsB: options,
      })
  );
}

function isOptionsSame({ optionsA, optionsB }) {
  for (const optionName in optionsA) {
    if (optionsA[optionName] !== optionsB[optionName]) return false;
  }

  return true;
}

export { addOrUpdateToCart };
