// import logo from './logo.svg';
// import './App.css';

import { ListContact, FormContact } from "./components";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Contact App</h1>
      <hr />
      <FormContact />
      <hr />
      <ListContact />
    </div>
  );
}

export default App;
