import './App.css';

export default function ListItem({
  id,
  item,
  deleteItem,
  isChecked,
  onCheckboxChange,
}) {
  return (
    <div className={'list-item'}>
      <input
        checked={isChecked}
        onChange={onCheckboxChange}
        type="checkbox"
        id={`item-${item}`}
      />
      <label
        htmlFor={`item-${item}`}
        style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
      >
        {item}
      </label>
      <button onClick={() => deleteItem(id)}>X</button>
    </div>
  );
}
