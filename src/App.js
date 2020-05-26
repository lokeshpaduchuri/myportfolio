import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from '../src/components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content" >
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Lokesh's Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact Me</Link>
              </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Lokesh's Portfolio</Link>}>
          <Navigation className=" mdl-grid mdl-cell--4-col-phone">
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact Me</Link>
          </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
            <Footer size="mini" className="footerClass">
            <FooterSection type="left" className="footerSectionClass">
            <FooterLinkList>
              <p>Copyrights  <i className="fa fa-copyright" aria-hidden="true"></i> Lokesh Paduchuri 2020</p>
            </FooterLinkList>
            </FooterSection>
            <FooterLinkList className="footerLinks">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/lokeshpaduchuri" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>

              {/* GitHub */}
              <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </FooterLinkList>
            </Footer>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
