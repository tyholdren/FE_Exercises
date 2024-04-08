export default function Section({ button, stepNumber, content, onClick }) {
  return (
    <div
      className="section-container"
      onClick={onClick}
      role="button"
      tabIndex="0"
    >
      <div className="section-content">
        <button>{button}</button>
        <div>{stepNumber}</div>
        <div>{content}</div>
      </div>
    </div>
  );
}
