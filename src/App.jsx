import Card from "./Card"; 
import data from "./data";

function App() {
  return (
    <div>
      <nav className="nav">
        <h1>MEANINGFUL MOVIES</h1>
        <span className="material-icons menu">menu</span>
      </nav>
      <div className="container">
      <div className="movies">
      


      {data.cards.map((movies, index) => (
        <Card key={index} index={index} {...movies} />
      ))}
      </div>
      </div>
    </div>
  );
}

export default App;