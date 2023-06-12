import NavBar from './NavBar';
import UploadForm from './UploadForm'
import { Context } from '../context';
import { useContext } from 'react';

function Layout({}) {

  const { state, dispatch } = useContext(Context);
  
  const toggle = () => dispatch({ type: 'setCollapse', payload: { collapse: !state.isCollapsed } });

  return (
    <>
      <NavBar />
      <div className='container text-center mt-5'>
        {`You have ${state.count} image${state.items.length > 1 ? 's' : ''}`}
        <h1>Gallery</h1>
        <button className='btn btn-success' onClick={toggle}>{state.isCollapsed ? 'close' : '+ add'}</button>
        { state.isCollapsed && <UploadForm /> }
      </div>
    </>
  );
}

export default Layout;