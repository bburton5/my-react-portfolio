import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Portfolio from "./components/Project";
import Footer from "./components/Footer";
import projects from "./projects";

function App() {
  return (
    <div className="portfolio-app" style={{}}>
      <Header />
      <Portfolio projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
