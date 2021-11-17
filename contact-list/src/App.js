import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListContact, AddContact, UpdateContact } from "./components";
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        {/* <FormContact />
        <ListContact /> */}
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" component={ListContact} exact />
          <Route path="/add-contact" component={AddContact} exact />
          <Route path="/update-contact/:id" component={UpdateContact} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
