export default function ListItem({
  id,
  item,
  deleteItem,
  isChecked,
  onCheckboxChange,
}) {
  return (
    <div className={isChecked ? 'selected-list-item' : 'list-item'}>
      <input
        checked={isChecked}
        onChange={onCheckboxChange}
        type="checkbox"
        id={`item-${item}`}
      />
      <label htmlFor={`item-${item}`}>{item}</label>
      <button onClick={() => deleteItem(id)}>X</button>
    </div>
  );
}
