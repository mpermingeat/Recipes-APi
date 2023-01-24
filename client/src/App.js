import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import MyNavBar from "./components/MyNavBar/MyNavBar";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import DetailRecipe from "./pages/DetailRecipe/DetailRecipe";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && <MyNavBar />}
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route
          exact
          path="/detail/:id/:dataBase"
          component={DetailRecipe}
        ></Route>
        <Route exact path="/create" component={CreateRecipe}></Route>
      </Switch>
    </div>
  );
}

export default App;
