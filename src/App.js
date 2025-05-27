import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* ctrl+space to to get the refernace of component */}
      <h1>Ny First React App</h1>
      <button type="button" className="btn btn-primary px-5">Primary</button>
      <p>Now i have made some changes in code and pushing again</p>
      <p>Now i have made some ther changes and going to merge in master</p>

    </div>
  );
}

export default App;
