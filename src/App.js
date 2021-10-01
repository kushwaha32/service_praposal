import { MuiThemeProvider } from "material-ui/styles";
import PersonalForm from "./component/PersonalForm";
import { AppBar } from "material-ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StepFormOne from "./component/StepForm/StepFormOne";

function App() {
  return (
    <div className="App">
      <Router>
        <MuiThemeProvider>
          <AppBar title="Enter the Service Detail" />
          <Switch>
             <Route path="/" exact component={PersonalForm}/>
             <Route path="/step-form" exact component={StepFormOne}/>
          </Switch>
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
