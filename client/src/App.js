import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import Home from './pages/Home';
import NewQuestion from './pages/NewQuestion';
import SingleQuestion from './pages/SingleQuestion';
import EditQuestion from './pages/EditQuestion';

function App() {
  return (
    <Router>
      <Container>
        <Route exact path="/" component={Home}/>
        <Route exact path="/newquestion" component={NewQuestion}/>
        <Route exact path="/questions/:questionId" component={SingleQuestion}/>
        <Route exact path="/editquestions/:questionId" component = {EditQuestion}/>
      </Container>
    </Router>
  );
}

export default App;
