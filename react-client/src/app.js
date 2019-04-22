import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './components/navBar.js';
import ShortFooter from './components/short-footer.js';
import AboutPage from './pages/aboutPage.js';
import MagnegPage from './pages/magnegCaseStudyPage.js';
import SchedxPage from './pages/schedxCaseStudy.js'
import TravelixPage from './pages/travelixCaseStudy.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about" exact path="/about" component={AboutPage} />
          <Route name="magneg" exact path="/magneg" component={MagnegPage} />
          <Route name="travelix" exact path="/travelix" component = {TravelixPage} />
          <ShortFooter />
        </div>

      </Router>
    )
  }
}

export default App;
