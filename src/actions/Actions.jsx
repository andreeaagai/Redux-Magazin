export const fetchCart = () => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/cart");
    const data = await res.json();
    dispatch({ type: "SET_CART", payload: data });
  } catch (err) {
    console.error(err);
  }
};

export const addToCart = (product) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: product.name,
        price: product.price
      }),
    });

    const data = await res.json();
    dispatch({ type: "ADD_TO_CART", payload: data });
  } catch (err) {
    console.error(err);
  }
};

export const removeFromCart = (_id) => async (dispatch) => {
  try {
    await fetch(`http://localhost:5000/cart/${_id}`, { method: "DELETE" });
    dispatch({ type: "REMOVE_FROM_CART", payload: _id });
  } catch (err) {
    console.error(err);
  }
};
