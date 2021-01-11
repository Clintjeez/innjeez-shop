import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Latest from "./components/latest-product/latest";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Hero />
        <Latest />
      </div>
    </div>
  );
}

export default App;
