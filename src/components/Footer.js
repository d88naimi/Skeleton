import React from 'react';
import {Footer, FooterDropDownSection, FooterLinkList, FooterSection} from "react-mdl";
const FooterWrapper = () => (
  <Footer size="mega">
    <FooterSection type="middle">
      <FooterDropDownSection title="Features">
        <FooterLinkList>
          <a href="/">About</a>
          <a href="/">Terms</a>
        </FooterLinkList>
      </FooterDropDownSection>
      <FooterDropDownSection title="Details">
        <FooterLinkList>
          <a href="/" className="hello">Specs</a>
          <a href="/">Tools</a>
        </FooterLinkList>
      </FooterDropDownSection>
      <FooterDropDownSection title="Technology">
        <FooterLinkList>
          <a href="/">How it works</a>
          <a href="/">Patterns</a>
        </FooterLinkList>
      </FooterDropDownSection>
      <FooterDropDownSection title="FAQ">
        <FooterLinkList>
          <a href="/">Questions</a>
          <a href="/">Contact Us</a>
        </FooterLinkList>
      </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Title">
      <FooterLinkList>
        <a href="/">Help</a>
        <a href="/">Privacy & Terms</a>
      </FooterLinkList>
    </FooterSection>
  </Footer>
);

export default FooterWrapper;