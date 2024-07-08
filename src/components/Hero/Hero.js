import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hello there <br />
      It's Shivam  Portfolio
    </SectionTitle>
    <SectionText>
      Welcome to my portfolio! I'm Shivam, a software developer specializing in web development. Explore my projects and feel free to reach out for collaboration or questions!
    </SectionText>
    <Button onClick={() => window.location='https://shivu-blogs.vercel.app/'} >Learn more</Button>
    <Button onClick={() => window.location='https://silver-hyacinthe-42.tiiny.site/'} >Resume</Button>
  </LeftSection>
 </Section>
);

export default Hero;
