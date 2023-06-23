import './App.css';
import { Context } from './context/firebaseContext';
import { useAuthContext } from './context/authContext';
import { useContext, useEffect } from 'react';
import List from './components/List';


function App() {
  const { state, read } = useContext(Context);
  const { authenticate } = useAuthContext();

  useEffect(() => {
    read();
    authenticate();
  }, []);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <List items={state.items} />
        </div>
      </div>
    </>
  );
}

export default App;
