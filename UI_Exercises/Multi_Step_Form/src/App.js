import SidePanel from './SidePanel';
import Form from './Form';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <SidePanel />
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
}

export default App;
