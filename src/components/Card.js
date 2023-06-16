import { useMemo } from 'react';

function Card({ photo }) {

  const timestamp = useMemo(() => {
    const date = `${new Date(photo.createdAt.seconds * 1000)}`.split(' ');
    return `${date[1]} ${date[2]} ${date[2]}`;
  });

  return (
    <div className='col mt-5'>
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
          <div>@username</div>
        </div>
      </div>
    </div>
  );
}

export default Card;