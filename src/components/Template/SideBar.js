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
        I&apos;m a Platform and DevOps Engineer.
        I currently work for <a href="https://clabs.co/">cLabs</a>.
        Before, I&apos;ve also worked for <a href="https://keyko.io/">Keiko</a>, <a href="https://empathy.co">Empathy</a>,
        and <a href="https://www.stratio.com/home">StratioBD</a>.
        I hold a Ph.D. in Telematics from <a href="https://www.ntnu.edu/">NTNU</a> and a Telecommunications
        Engineer M.Sc from <a href="https://universityofvalladolid.uva.es/">UVa</a>.
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
