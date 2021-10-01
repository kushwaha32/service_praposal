import { MuiThemeProvider } from "material-ui/styles";
import PersonalForm from "./component/PersonalForm";
import { AppBar } from "material-ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceForm from "./component/ServiceForm";
import NavLinkCu from "./component/NavLinkCu";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Router>
        <MuiThemeProvider>
          <AppBar title="Enter the Service Detail" onClick={() => setShow(!show)}/>
          <NavLinkCu show= {show}/>
          <Switch>
             <Route path="/" exact component={PersonalForm}/>
             <Route path="/step-form" exact component={ServiceForm}/>
          </Switch>
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
