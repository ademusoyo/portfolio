import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import AboutPage from './pages/aboutPage.js';
import MagnegPage from './pages/magnegCaseStudyPage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about" exact path="/about" component={AboutPage} />
          <Route name="magneg" exact path="/magneg_case_study" component={MagnegPage} />
          <Footer />
        </div>

      </Router>
    )
  }
}

export default App;
