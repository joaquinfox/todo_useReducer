import React, { useState, useReducer } from 'react';

const defaultState = {
  list: [],
  isEditing: false,
  editID: null,
};

const reducer = (state, action) => {
  if (action.type === 'ADD_NEW') {
    const newList = [...state.list, action.payload];
    return {
      ...state,
      list: newList,
    };
  }
};
function App() {
  const [itemDesc, setItemDesc] = useState('');
  // const [isEditing, setIsEditing] = useState(false);
  // const [editID, setEditID] = useState(null);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemDesc) {
      const newItem = { id: new Date().getTime().toString(), desc: itemDesc };
      dispatch({ type: 'ADD_NEW', payload: newItem });
      setItemDesc('');
    }
    // if (!itemDesc) {
    // } else if (itemDesc && isEditing) {
    //   setList(
    //     list.map((item) => {
    //       if (item.id === editID) {
    //         return { ...item, desc: itemDesc };
    //       }
    //       return item;
    //     })
    //   );
    //   setIsEditing(false);
    //   setEditID(null);
    //   setItemDesc('');
    // }
  };

  // const handleEdit = (id) => {
  //   let targetItem = list.find((item) => item.id === id);
  //   console.log(targetItem);
  //   setIsEditing(true);
  //   setEditID(targetItem.id);
  //   setItemDesc(targetItem.desc);
  // };

  // const handleDelete = (id) => {
  //   let updatedList = list.filter((item) => item.id !== id);
  //   setList(updatedList);
  // };
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
          {/* <button>{isEditing ? 'update' : 'add'}</button> */}
        </form>
        <div id="todo-list">
          <ul>
            {state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.desc}{' '}
                  {/* <button onClick={() => handleDelete(item.id)}>delete</button>
                  <button onClick={() => handleEdit(item.id)}>edit</button> */}
                </li>
              );
            })}
          </ul>
          {/* <button onClick={() => setList([])}>clear list</button> */}
        </div>
      </section>
    </main>
  );
}

export default App;
