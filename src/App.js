import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import UploadForm from './components/UploadForm';
import { useState, useEffect } from 'react';

const photos = [
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200'
]

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState({title: null, file: null, path: null});
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);

  const toggle = () => collapse(!isCollapsed);

  const handleOnChange = (e) => {
    if (e.target.type === 'file') {
      setInput({ ...input, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0])});
    } else {
      setInput({ ...input, title: e.target.value });
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems([input.path, ...items]);
    setInput({title: null, file: null, path: null});
    collapse(false);
  };

  // takes effect only when change occurs to items ...
  useEffect(() => {
    setCount(items.length);
  }, [items]);

  return (
    <>
      <div className="App">
        <NavBar />
        <div className='container text-center mt-5'>
          {`You have ${count} image${items.length > 1 ? 's' : ''}`}
          <h1>Gallery</h1>
          <button className='btn btn-success float-end' onClick={toggle}>{isCollapsed ? 'close' : '+ add'}</button>
          { isCollapsed &&
              <UploadForm
                input={input}
                onChange={handleOnChange}
                onSubmit={handleOnSubmit} 
              />
          }
          <div className='row'>
            {items.map((photo, index) => <Card key={index} src={photo} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
