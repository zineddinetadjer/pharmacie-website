import "./App.css";
import Arrivage from "./components/Arrivage";
import Article from "./components/Article";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import New from "./components/New";

function App() {
  return (
    <div className="App">
      <Navbar />
      <New />
      <Article />
      <Arrivage />
      <Categories />
    </div>
  );
}

export default App;
