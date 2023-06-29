import { createContext, useReducer, useContext, useMemo } from "react";
import Firestore from "../handlers/firestore";

const { readDocs } = Firestore;

export const Context = createContext();

const initialState = {
  count: 0,
  input: { title: null, file: null, path: null },
  items: [],
  firebaseItems: [],
  isCollapsed: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setItemsFromFirestore':
      return {
        ...state,
        items: action.payload.items,
        firebaseItems: action.payload.items
      }
    case 'setItems':
      return {
        ...state,
        items: [action.payload.item, ...state.items],
        firebaseItems: [action.payload.item, ...state.firebaseItems],
        count: state.items.length + 1,
        input: { title: null, file: null, path: null },
        isCollapsed: !state.isCollapsed
      }
    case 'filteredItems':
      return {
        ...state,
        items: action.payload.results
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
    dispatch({ type: 'setItemsFromFirestore', payload: { items }});
  };
  const filterItems = (input) => {
    if (input === '' || !input) {
      dispatch({ type: 'setItems', payload: { items: state.firebaseItems } })
    }

    let list = state.firebaseItems.filter((item) => !!item);
    let results = list.filter((item) => {
      const name = item.title.toLowerCase();
      const searchInput = input?.toLowerCase();
      return name.indexOf(searchInput) > -1;
    })

    dispatch({ type: 'filteredItems', payload: { results } });
  };

  return <Context.Provider value={{ state, dispatch, read, filterItems }}>{children}</Context.Provider>
}

export const useFirebaseContext = () => {
  return useContext(Context);
}

export default Provider;