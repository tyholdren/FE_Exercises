export default function DropdownItem({ item }) {
  return (
    <div className="dropdown-item">
      <button data-item-id={item}>{item}</button>
    </div>
  );
}
