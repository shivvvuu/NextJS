import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:1800-000-000'>1800-XX-XX-XX</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:jhod5122shivam@gmail.com'>jhod5122shivam@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialContainer>
      <CompanyContainer>
        <Slogan>Thankyou For Visiting My Portfolio</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://github.com">
      <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://linkedin.com">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://instagram.com">
      <AiFillInstagram size="3rem"/>
    </SocialIcons>
      </SocialContainer>
    </SocialContainer>
   </FooterWrapper>
  );
};

export default Footer;
