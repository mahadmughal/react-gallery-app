import List from './List';
import { useFirebaseContext } from '../context/firebaseContext';
import { useAuthContext } from '../context/authContext';
import { useMemo } from 'react';

const Stocks = () => {
  const { currentUser } = useAuthContext();
  const { state } = useFirebaseContext();

  const displayItems = useMemo(() => {
    return state.items.filter((item) => item.user === currentUser?.displayName)
  }, [state.items]);

  return (
    <>
      <h1>My Stocks</h1>
      <List items={displayItems} />
    </>
  );
}

export default Stocks;