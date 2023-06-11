import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import UploadForm from './components/UploadForm';
import { useState, useEffect, useReducer } from 'react';

const photos = [
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200'
]

function App() {

  const initialState = {
    count: 0,
    input: { title: null, file: null, path: null },
    items: photos,
    isCollapsed: false
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'setCount':
        return {
          ...state,
          count: action.payload.count
        }
      case 'setItems':
        return {
          ...state,
          items: [action.payload.path, ...state.items]
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

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = () => dispatch({ type: 'setCollapse', payload: { collapse: !state.isCollapsed } });

  const handleOnChange = (e) => {
    if (e.target.type === 'file') {
      dispatch({ type: 'setInput', payload: { file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) } });
    } else {
      dispatch({ type: 'setInput', payload: { title: e.target.value } });
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'setItems', payload: { path: state.input.path } });
    dispatch({ type: 'setInput', payload: { input: initialState.input } });
    toggle;
  };

  useEffect(() => {
    dispatch({ type: 'setCount', payload: { count: state.items.length } })
  }, [state.items]);

  return (
    <>
      <div className="App">
        <NavBar />
        <div className='container text-center mt-5'>
          {`You have ${state.count} image${state.items.length > 1 ? 's' : ''}`}
          <h1>Gallery</h1>
          <button className='btn btn-success float-end' onClick={toggle}>{state.isCollapsed ? 'close' : '+ add'}</button>
          {state.isCollapsed &&
            <UploadForm
              input={state.input}
              onChange={handleOnChange}
              onSubmit={handleOnSubmit}
            />
          }
          <div className='row'>
            {state.items.map((photo, index) => <Card key={index} src={photo} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
