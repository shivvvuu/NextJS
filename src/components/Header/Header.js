import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {Span, Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import Projects from './../Projects/Projects';

const Header = () =>  (
 <Container>
  <Div1>
    <Link href="/">
      <p style={{ display:"flex" ,alignItem:"center", color:"white" }}>
        <DiCssdeck size="3rem"  /><Span>Shivam jhod</Span>
      </p>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href="https://github.com/shivvvuu">
      <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://linkedin.com/in/shivvvuu21">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://instagram.com/shivvvuu/">
      <AiFillInstagram size="3rem"/>
    </SocialIcons>
  </Div3>
 </Container>
);

export default Header;
