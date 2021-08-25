// action
function searchProduct(query) {
    dispatch({
      type: "SEARCH_PRODUCT",
      payload: {
        query: query,
      },
    });
  }
  
  
//reducer
 case "SEARCH_PRODUCT":
      return {
        ...state,
        products:
          action.payload.query !== ""
            ? state.products.filter((item) =>
                item.title
                  .toLowerCase()
                  .includes(action.payload.query.toLowerCase())
              )
            : state.initialProducts,
      };
