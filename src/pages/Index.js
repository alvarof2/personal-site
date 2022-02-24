import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Álvaro Fernández's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Álvaro Fernández&apos;s personal website. Madrid based independet contractor as DevOps
            engineer at Keyko. Ph.D. in Telematics from the Norwegian University of Science and
            Technology (NTNU), and Telecommunications Engineer from the University of Valladolid
            (UVa).
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/alvarof2/personal-site">here</a>.
        <br />Full credit to <a href="https://mldangelo.com/">Michael D&apos;Angelo</a> for the <a href="https://github.com/mldangelo/personal-site">original code</a>.
      </p>
    </article>
  </Main>
);

export default Index;