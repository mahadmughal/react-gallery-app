import { useMemo } from 'react';

function Card({ createdAt, path, title, user }) {

  const timestamp = useMemo(() => {
    const date = `${new Date(createdAt?.seconds * 1000)}`.split(' ');
    return `${date[1]} ${date[2]} ${date[2]}`;
  });

  return (
    createdAt &&
    <div className='col mt-5'>
      <div className='border rounded' style={{ width: '22rem' }}>
        <div style={{
          height: '220px',
          backgroundImage: `url(${path})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        </div>
        <div className='text-center py-2'>{title}</div>
        <div className='d-flex justify-content-between'>
          <div>{timestamp}</div>
          <div>{`@${user}`}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;