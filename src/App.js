import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* ctrl+space to to get the refernace of component */}
      <h1>Ny First React App</h1>
      <button type="button" className="btn btn-primary px-5">Primary</button>
    </div>
  );
}

export default App;
