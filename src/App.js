import './App.css';
import Layout from './components/Layout';
import Card from './components/Card';
import { Context } from './context/firebaseContext';
import { useAuthContext } from './context/authContext';
import { useContext, useEffect } from 'react';


function App() {
  const { state, read } = useContext(Context);
  const { authenticate } = useAuthContext();

  useEffect(() => {
    read();
    authenticate();
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
