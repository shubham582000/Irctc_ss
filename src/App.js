
import './App.css';
import Body from './Body';
import About from './About';
import Coach from './Coach';
import Navbar from './Navbar';
import TrainStatus from './TrainStatus';
import Superfast from './Superfast';
import Rajdhani from './Rajdhani';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import SpecialTrain from './SpecialTrain';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <BrowserRouter>
        <Navbar/>
        {/* body */}
        <Switch>
          <Route exact path="/">
              <Body/>
          </Route>
          <Route exact path="/trainStatus">
              <TrainStatus/>
          </Route>
          <Route exact path="/coachEnquiry">
              <Coach/>
          </Route>
          <Route exact path="/about">
              <About/>
          </Route>
          <Route exact path="/specialTrains">
              <SpecialTrain/>
          </Route>
          <Route exact path="/rajdhani">
              <Rajdhani/>
          </Route>
          <Route exact path="/superfast">
              <Superfast/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
