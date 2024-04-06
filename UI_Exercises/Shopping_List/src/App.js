import { useState, useEffect } from 'react';
import { ListItem } from './Listitem';
import { DropdownItem } from './DropDownItem';
import './App.css';

const URL = 'https://api.frontendeval.com/fake/food/';

export default function App() {
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [list, setList] = useState([]);
  const [checkedState, setCheckedState] = useState({});

  const debounce = (fn, delay) => {
    let timeoutId;

    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleCheckboxChange = id => {
    setCheckedState(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    const getItems = async () => {
      if (searchInput.length > 1) {
        try {
          const response = await fetch(`${URL}${searchInput}`);
          const results = await response.json();
          setItems(results);
        } catch (error) {
          console.log(new Error(error));
        }
      } else if (searchInput.length === 0) {
        setItems([]);
      }
    };

    const debouncedItems = debounce(getItems, 5000);
    debouncedItems();
  }, [searchInput]);

  const updateInput = event => {
    setSearchInput(event.target.value);
  };

  const handleDropdownClick = event => {
    const item = event.target.getAttribute('data-item-id');
    const newItem = { id: list.length, item: item };
    setList([...list, newItem]);
  };

  const deleteItem = idToDelete => {
    const newList = list.filter(({ id }) => id !== idToDelete);
    setList(newList);
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="shopping-list-input">Search for Items</label>
        <input
          id="shopping-list-input"
          name="shopping-list-input"
          type="text"
          value={searchInput}
          onChange={updateInput}
        />
      </div>
      <div
        className="dropdown-container"
        onClick={event => handleDropdownClick(event)}
      >
        {items.map((item, index) => {
          return (
            <DropdownItem
              key={`item-${index}`}
              data-item-id={item}
              item={item}
            />
          );
        })}
      </div>
      <div className="list-container">
        {list.map(({ id, item }) => {
          return (
            <ListItem
              key={`item-${id}`}
              id={id}
              item={item}
              isChecked={checkedState[id] || false}
              onCheckboxChange={() => handleCheckboxChange(id)}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}
