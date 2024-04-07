export default function Section({ button, stepNumber, content, onClick }) {
  return (
    <div className="section-container">
      <button onClick={onClick}>{button}</button>
      <div className="section-content">
        <div>{stepNumber}</div>
        <div>{content}</div>
      </div>
    </div>
  );
}
