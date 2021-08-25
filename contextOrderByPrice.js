//action
function orderByPrice(products, order) {
    dispatch({
      type: "ORDER_BY_PRICE",
      payload: {
        products: products,
        order: order,
      },
    });
  }


//reducer
case "ORDER_BY_PRICE":
      const proo = action.payload.products.slice();
      return {
        ...state,
        products:
          action.payload.order !== ""
            ? proo.sort((a, b) =>
                action.payload.order === "lowest"
                  ? a.price > b.price
                    ? 1
                    : -1
                  : a.price < b.price
                  ? 1
                  : 1
              )
            : proo.sort((a, b) => (a.id > b.id ? 1 : -1)),
      };

