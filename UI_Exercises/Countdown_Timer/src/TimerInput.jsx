export default function TimerInput({
  htmlFor,
  id,
  name,
  type,
  placeholder,
  onInput,
  value,
  min,
}) {
  return (
    <div>
      <div>
        <label htmlFor={htmlFor} />
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onInput={onInput}
          value={value}
          min={min}
        />
      </div>
    </div>
  );
}
