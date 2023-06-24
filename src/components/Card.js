import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Card({ id, createdAt, path, title, user }) {

  const timestamp = useMemo(() => {
    const date = `${new Date(photo.createdAt.seconds * 1000)}`.split(' ');
    return `${date[1]} ${date[2]} ${date[2]}`;
  });

  const navigate = useNavigate();
  const handleClick = (() => {
    navigate(`/images/${id}`, { state : { id }});
  });

  return (
    createdAt &&
    <div className='col mt-5' onClick={handleClick}>
      <div className='border rounded' style={{ width: '22rem' }}>
        <div style={{
          height: '220px',
          backgroundImage: `url(${photo.path})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        </div>
        <div className='text-center py-2'>{photo.title}</div>
        <div className='d-flex justify-content-between'>
          <div>{timestamp}</div>
          <div>{ `@${photo.user}` }</div>
        </div>
      </div>
    </div>
  );
}

export default Card;