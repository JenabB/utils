import React, { useState } from "react";

const CartItem = () => {
  const [input, setInput] = useState(0);

  const handleChange = (e) => {
    let val = parseInt(e.target.value, 10);

    if (isNaN(val)) {
      setInput("");
    } else {
      val = val >= 0 ? val : 1;
      setInput(val);
    }
  };

  return (
    <div className="lg:m-4 m-2 shadow-lg rounded-lg">
      <div className="px-4">
        <label htmlFor="quantity">Quantity</label>
        <input
          className="bg-gray-200 ml-4 w-2/4 pl-2 rounded-lg"
          min="1"
          type="number"
          id="quantity"
          name="quantity"
          value={input}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CartItem;
