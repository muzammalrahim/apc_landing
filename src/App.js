import "./App.css";
import PortfolioBanner from "./components/portfolio/PortfolioBanner";
import Home from "./pages/HomePage/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Team from "./pages/Team/Team";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/portfolio" component={Portfolio} exact />
          <Route path="/team" component={Team} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
