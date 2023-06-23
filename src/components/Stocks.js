import List from './List';
import { useFirebaseContext } from '../context/firebaseContext';
import { useAuthContext } from '../context/authContext';
import { useMemo } from 'react';

const Stocks = () => {
    const { currentUser } = useAuthContext();
    const { state } = useFirebaseContext();

    // const displayItems = useMemo(() => {
    //     return (
    //         state.items.map((item) => item.user === currentUser?.displayName)
    //     )
    // }, [currentUser, state.items]);

    return (
        <>
            <h1>My Stocks</h1>
            <List items={state.items} />
        </>
    )
}

export default Stocks;