import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <switch>
          <Route path="checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
