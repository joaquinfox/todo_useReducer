import React, { useState } from 'react';
function App() {
  const [list, setList] = useState([]);
  const [itemDesc, setItemDesc] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemDesc) {
    } else if (itemDesc && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, desc: itemDesc };
          }
          return item;
        })
      );
      setIsEditing(false);
      setEditID(null);
      setItemDesc('');
    } else {
      let newItem = { id: new Date().getTime().toString(), desc: itemDesc };
      setList([...list, newItem]);
      setItemDesc('');
    }
  };

  const handleEdit = (id) => {
    let targetItem = list.find((item) => item.id === id);
    console.log(targetItem);
    setIsEditing(true);
    setEditID(targetItem.id);
    setItemDesc(targetItem.desc);
  };

  const handleDelete = (id) => {
    let updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };
  return (
    <main>
      <section id="container">
        <h1>So Much To Do!</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setItemDesc(e.target.value)}
            type="text"
            value={itemDesc}
            name="itemDesc"
          />
          <button>{isEditing ? 'update' : 'add'}</button>
        </form>
        <div id="todo-list">
          <ul>
            {list.map((item) => {
              return (
                <li key={item.id}>
                  {item.desc}{' '}
                  <button onClick={() => handleDelete(item.id)}>delete</button>
                  <button onClick={() => handleEdit(item.id)}>edit</button>
                </li>
              );
            })}
          </ul>
          <button onClick={() => setList([])}>clear list</button>
        </div>
      </section>
    </main>
  );
}

export default App;
