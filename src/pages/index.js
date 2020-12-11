import * as React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Header from '../components/header.js';
import Footer from '../components/footer.js';
// import Contact from '../components/contact.js';
import SignUp from '../components/signup.js';
import Projects from '../components/projects.js';
import AboutMe from '../components/aboutMe.js'
import Nav from '../components/nav.js';
// styles
// markup
// <BrowserRouter>
// <Header />
// <Switch>
//   <Route exact path='/'>

//   </Route>
// </Switch>
// <Footer />
// </BrowserRouter>
const IndexPage = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/'>
      <Header />
        </Route>
        <Route path='/about'>
          <AboutMe />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='contactus'>
        </Route>
      </Switch>
          {/* <Contact /> */}
      <Footer />
    </BrowserRouter>

  )
}

export default IndexPage
