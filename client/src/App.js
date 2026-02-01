import React, { useState } from 'react';


function App() {
  // Menu items state
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Biryani", price: "₹250", status: "Available" },
    { id: 2, name: "Chicken 65", price: "₹180", status: "Out of Stock" },
    { id: 3, name: "Chicken Tikka", price: "₹200", status: "Available" },
  
  ]);

  // Details of new item to be added
  const [newItem, setNewItem] = useState({ name: '', price: '', status: 'Available' });

  // Form submission handler to add new item
  const addItem = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.price) {
      setMenuItems([...menuItems, { ...newItem, id: Date.now() }]);
      setNewItem({ name: '', price: '', status: 'Available' }); // ఫామ్ క్లియర్ చేయడం
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Restaurant Admin Dashboard</h1>
      <hr />

      {/* New item form */}
      <div style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#f9f9f9', border: '1px solid #ddd' }}>
        <h3>Add New Item</h3>
        <form onSubmit={addItem}>
          <input 
            type="text" 
            placeholder="Item Name" 
            value={newItem.name}
            onChange={(e) => setNewItem({...newItem, name: e.target.value})}
            style={{ marginRight: '10px', padding: '5px' }}
          />
          <input 
            type="text" 
            placeholder="Price (e.g. ₹100)" 
            value={newItem.price}
            onChange={(e) => setNewItem({...newItem, price: e.target.value})}
            style={{ marginRight: '10px', padding: '5px' }}
          />
          <button type="submit" style={{ padding: '5px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>
            Add Item
          </button>
        </form>
      </div>

      {/* Menu Management Table */}
      <h3>Menu Management</h3>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th>Item Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.status}</td>
              <td>
                <button style={{ color: 'red' }} onClick={() => setMenuItems(menuItems.filter(i => i.id !== item.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;