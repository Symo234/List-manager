import { useState } from 'react';
import './ListManager.css';

function ListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="list-manager">
      <h1 className="title">Item List</h1>
      
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter an item"
          className="input-field"
        />
        <button
          onClick={handleAddItem}
          className="add-button"
        >
          Add Item
        </button>
      </div>
      
      <div className="list-container">
        {items.length === 0 ? (
          <p className="empty-message">No items added yet</p>
        ) : (
          <ul className="item-list">
            {items.map((item, index) => (
              <li key={index} className="list-item">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListManager;