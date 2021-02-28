import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import Home from './pages/Home';
import NewQuestion from './pages/NewQuestion';
import SingleQuestion from './pages/SingleQuestion';

function App() {
  return (
    <Router>
      <Container>
        <Route exact path="/" component={Home}/>
        <Route exact path="/newquestion" component={NewQuestion}/>
        <Route exact path="/questions/:questionId" component={SingleQuestion}/>
      </Container>
    </Router>
  );
}

export default App;
