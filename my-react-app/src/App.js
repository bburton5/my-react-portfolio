import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import projects from "./projects";

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <Portfolio projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
