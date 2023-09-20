import React from 'react';

import { About, Footer, Header, Resume, Skills, Testimonial, Work } from './container';
import { Navbar, SocialMedia } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Resume />
    <Footer />
    <SocialMedia />
  </div>
);

export default App;