//global state
const initialState = {
  saved: localStorage.getItem("saved")
    ? JSON.parse(localStorage.getItem("saved"))
    : [],
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(state.saved));
  }, [state]);

  function addToSaved(data) {
    dispatch({
      type: "ADD_TO_SAVED",
      payload: data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        saved: state.saved,
        addToSaved,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

//action on components
addToSaved({
  id: "_" + Math.random().toString(36).substr(2, 9),
  date: new Date(),
  result: result,
  status: status,
  need: need,
});

//reducer
// case "ADD_TO_SAVED":
//       return {
//         ...state,
//         saved: [action.payload, ...state.saved],
//       };
