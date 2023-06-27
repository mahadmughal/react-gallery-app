import './App.css';
import { useFirebaseContext } from './context/firebaseContext';
import { useAuthContext } from './context/authContext';
import { useEffect } from 'react';
import List from './components/List';


function App() {
  const { state, read } = useFirebaseContext();
  const { authenticate } = useAuthContext();

  useEffect(() => {
    read();
    authenticate();
  }, []);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <List itemsList={state.items} />
        </div>
      </div>
    </>
  );
}

export default App;
