import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items,edit,remove }) => {
    console.log(items);
  return (
    <div className="grocessary-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button type="button" onClick={()=>edit(id)} className="edit-btn">
                <FaEdit />
              </button>
              <button type="button" onClick={()=>remove(id)} className="delete-btn">
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default List;
