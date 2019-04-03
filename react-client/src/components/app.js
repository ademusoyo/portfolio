import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import ShortFooter from './footerComponent/short-footer.js';
import AboutPage from './pages/aboutPage.js';
import MagnegPage from './pages/magnegCaseStudyPage.js';
import SchedxPage from './pages/schedxCaseStudy.js'
import ContactPage from './pages/contactPage.js'
import WorkPage from './pages/workPage.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about" exact path="/about" component={AboutPage} />
          <Route name="contact" exact path="/contact" component={ContactPage} />
          <Route name="work" exact path="/work" component={WorkPage} />
          <Route name="magneg" exact path="/magneg" component={MagnegPage} />
          <Route name="schedx" exact path="/schedx" component = {SchedxPage} />
          <ShortFooter />
        </div>

      </Router>
    )
  }
}

export default App;
