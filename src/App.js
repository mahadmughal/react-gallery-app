import './App.css';
import Layout from './components/Layout';
import Card from './components/Card';
import { Context } from './context';
import { useContext, useEffect } from 'react';


function App() {
  const { state, read } = useContext(Context);

  useEffect(() => {
    read();
  }, []);

  return (
    <>
      <Layout />
      <div className='container'>
        <div className='row'>
          {state.items.map((item, index) => <Card key={index} photo={item} />)}
        </div>
      </div>
    </>
  );
}

export default App;
