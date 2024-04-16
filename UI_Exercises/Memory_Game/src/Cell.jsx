export default function Cell({ isActive, isDisabled, id, onClick }) {
  const getCardStyle = () => {
    if (isDisabled) {
      return 'disabled-cards';
    } else if (isActive) {
      return 'active-cards';
    } else {
      return 'hidden-cards';
    }
  };

  return (
    <button className={getCardStyle()} disabled={isDisabled} onClick={onClick}>
      Cell{id}
    </button>
  );
}
