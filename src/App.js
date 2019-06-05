import React, { Component } from "react";

import NavbarSection from "./sections/NavbarSection";
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import ThemeSwitch from 'react-theme-switch';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />
        
        <NavbarSection>
        
        </NavbarSection>
        
        <TitlesSection />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default App;
