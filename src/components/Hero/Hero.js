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
      Indeed one of the best way to deflect attacks is to make it look like they're succeeding.It's the software equivalent of playing dead.
    </SectionText>
    <Button onClick={() => window.location='/'} >Learn more</Button>
  </LeftSection>
 </Section>
);

export default Hero;