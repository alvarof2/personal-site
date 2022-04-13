import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Certifications from '../components/Resume/Certifications';
import Publications from '../components/Resume/Publications';

import publications from '../data/resume/publications';
import certifications from '../data/resume/certifications';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Certifications',
  'Publications',
  'Skills',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Álvaro Fernández's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <p> My resume is also available in <a href="https://drive.google.com/file/d/1ari72Hmw6ajKEuFt8PRNN4EZDINqccUE/view?usp=sharing">pdf format</a>) with source code available <a href="https://github.com/alvarof2/latex-cv">here</a>.
      </p>
      <Education data={degrees} />
      <Experience data={positions} />
      <Certifications data={certifications} />
      <Publications data={publications} />
      <Skills skills={skills} categories={categories} />

    </article>
  </Main>
);

export default Resume;
