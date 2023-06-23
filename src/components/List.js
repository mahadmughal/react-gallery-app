import Card from './Card';

const List = ({ items }) => {
  return (
    <div className='row mt-3'>
      {
        items.map((item) =>  { return <Card {...item} /> })
      }
    </div>
  );
}

export default List;