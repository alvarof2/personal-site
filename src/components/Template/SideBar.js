import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Álvaro Fernández</h2>
        <p><a href="mailto:fernandez.f.alvaro@gmail.com">fernandez.f.alvaro@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Álvaro. I like all things related to the DevOps culture.
        I currently work at <a href="https://keyko.io/">Keyko</a>. Before Keyko I was
        at <a href="https://empathy.co">Empathy</a>
        , and <a href="https://www.stratio.com/home">StratioBD</a>.
        I&apos;m an <a href="https://www.ntnu.edu/">NTNU</a> Ph.D. in Telematics and <a href="https://universityofvalladolid.uva.es/">UVa</a> alumnus.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Álvaro Fernández <Link to="/">fernandezfalvaro.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
