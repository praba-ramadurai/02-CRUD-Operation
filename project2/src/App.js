import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please Enter Value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item)=>{
          if(item.id ===editId){
            return{...item,title:name}
          }
          return item;
        })
      )
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "Value Changed", "sucess");
    } else {
      showAlert(true, "Item Added to the List", "sucess");
      const newItem = {id:new Date().getTime().toString(),title:name}
      setList([...list,newItem]);
      setName('');
    }
  };
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const editItem=(id)=>{
    const specificItem=list.find((item)=>
    item.id===id);
    setIsEditing(true);
    setEditId(id)
    setName(specificItem.title)
  }

  const removeItem=(id)=>{
    setList(list.filter((item)=>item.id ===!id))
    showAlert(true,'Item Removed','danger') 
  }

  const clearList=()=>{
    showAlert(true,'Item Empty','danger')
    setList([]);
  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            type="text"
            placeholder="e.g eggs"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
     {list.length>0 && <div className="grocery-container">
        <List items={list} edit={editItem} remove={removeItem}/>
        <button className="clear-btn" onClick={clearList} >Clear Items</button>
      </div>
}
    </section>
  );
}

export default App;
