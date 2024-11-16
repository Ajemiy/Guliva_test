// import React from 'react';
import StoreButton from './_SubComponents/StoreButton'

const Header: React.FC = () => {
  interface Links{
    url: string;
    text: string;
  }

  const navLinks:Links[] = [
    {
      text: "Why Guliva?",
      url: "#why-guliva"
    },
    {
      text: "Features",
      url: "#features"
    },
    {
      text: "Contact Us",
      url: "#contact"
    },
    {
      text: "FAQs",
      url: "#faqs"
    }
  ]

  return (
    <header >
         <nav>
            <div id="logo">
                guliva
            </div>
            <ul >
              {navLinks.map((link)=>(
                 <li ><a href={link.url} > {link.text}</a></li>
              ))}
                <li>
                    <StoreButton brand='Google Play' img=''/>
                    <StoreButton brand='Apple Store' img=''/>
                </li>
            </ul>
        </nav>
      <div className="hero">
        <div className="heroMsg">
        <h1>Save up to ₦50k/annum with pay per trip insurance</h1>
        <p>Join Nigeria’s first mobile insurance platform where you can buy insurance for both yourself and your vehicle only when you need it.</p>
        <div>
          <StoreButton brand='Google Play' img=''/>
          <StoreButton brand='Apple Store' img=''/>
        </div>
        </div>
        <div>
            <img src="https://guliva.io/static/media/phone-double.afa62281e26817204961.webp" alt="" />
        </div>
        </div>
    </header>
  );
};

export default Header;
