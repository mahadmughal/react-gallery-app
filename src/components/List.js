import Card from "./Card"

const List = ({ itemsList }) => {
  return (
    itemsList?.length > 0 &&
    <div className="row mt-3">
      {itemsList.map((item) => {
        return (
          <div key={item.createdAt} className="col-4 mb-5">
            <Card {...item} />
          </div>
        );
      })}
    </div>
  )
}
export default List;