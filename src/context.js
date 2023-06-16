import { createContext, useReducer } from "react"
import Firestore from "./Handlers/firestore";

const { readDocs } = Firestore;

export const Context = createContext();

const initialState = {
  count: 0,
  input: { title: null, file: null, path: null },
  items: [],
  isCollapsed: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setItemsFromFirestore':
      return {
        ...state,
        items: action.payload.items
      }
    case 'setItems':
      return {
        ...state,
        items: [action.payload.path, ...state.items],
        count: state.items.length + 1,
        input: { title: null, file: null, path: null },
        isCollapsed: !state.isCollapsed
      }
    case 'setInput':
      return {
        ...state,
        input: { ...state.input, ...action.payload }
      }
    case 'setCollapse':
      return {
        ...state,
        isCollapsed: !state.isCollapsed
      }
    default: return state
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const read = async () => {
    const items = await readDocs("stocks");
    dispatch({ type: 'setItemsFromFirestore', payload: { items: items.map((item) => item.path ) }});
  };
  return <Context.Provider value={{ state, dispatch, read }}>{children}</Context.Provider>
}

export default Provider;