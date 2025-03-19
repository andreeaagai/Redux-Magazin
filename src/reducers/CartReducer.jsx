// Reducerul va manipula starea globală pe baza acțiunilor primite.

const initialState = {
  cart: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const productInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (productInCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 } // Dacă produsul există, crește cantitatea
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }], // Dacă nu există, adăugăm produsul
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload), // Eliminăm produsul din coș
      };

    default:
      return state;
  }
}

export default cartReducer;
