import './App.css';
import Layout from './components/Layout';
import Card from './components/Card';
import { Context } from './context';
import { useContext, useEffect } from 'react';
import { app } from './lib/firebase.config';

function App() {
  const { state } = useContext(Context);

  useEffect(() => {
    app();
  }, []);

  return (
    <>
      <Layout />
      <div className='container'>
        <div className='row'>
          {state.items.map((photo, index) => <Card key={index} src={photo} />)}
        </div>
      </div>
    </>
  );
}

export default App;
