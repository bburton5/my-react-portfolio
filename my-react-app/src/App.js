import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
