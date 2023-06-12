import { createContext, useReducer } from "react"

export const Context = createContext();

const photos = [
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200'
]

const initialState = {
  count: photos.length,
  input: { title: null, file: null, path: null },
  items: photos,
  isCollapsed: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setItems':
      return {
        ...state,
        items: [action.payload.path, ...state.items],
        count: state.items.length + 1,
        input: initialState.input,
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
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default Provider;