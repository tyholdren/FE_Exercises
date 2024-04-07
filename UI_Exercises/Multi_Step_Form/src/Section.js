export default function Section({ button, step, content }) {
  return (
    <div className="section-container">
      <button>{button}</button>
      <div className="section-content">
        <div>{step}</div>
        <div>{content}</div>
      </div>
    </div>
  );
}
