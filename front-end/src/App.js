import React from 'react';

import { About, Skills, Testimonials, Header, Footer, Work } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
