import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="wine" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Isa Bremer and is open-sourced on{" "}
            <a href="https://github.com/flimby2010/dictionary-project">
              {" "}
              Github{" "}
            </a>{" "}
            and hosted on{" "}
            <a href="https://elated-bhaskara-7ec658.netlify.app">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
